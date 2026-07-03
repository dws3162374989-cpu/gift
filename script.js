const galleryItems = window.galleryItems || [];
const card = document.querySelector("[data-card]");
const photo = document.querySelector("[data-photo]");
const indexLabel = document.querySelector("[data-index]");
const titleLabel = document.querySelector("[data-title]");
const captionLabel = document.querySelector("[data-caption]");
const progress = document.querySelector("[data-progress]");
const thumbs = document.querySelector("[data-thumbs]");
const toast = document.querySelector("[data-toast]");
const canvas = document.querySelector("#confetti");
const ctx = canvas.getContext("2d");

const sweetLines = [
  "今日甜话：方景源小朋友，允许你今天多可爱一点。",
  "系统提示：你已获得无限偏爱权限。",
  "投喂成功：今日份喜欢已经送达。",
  "隐藏彩蛋：你一出现，快乐就自动刷新。",
  "认证完成：最值得被宠的人，是你。"
];

let current = 0;
let pieces = [];
let animationFrame = 0;
let autoplayTimer = 0;
let autoplayOn = false;
let audioContext = null;
let musicTimer = 0;
let musicOn = false;
let musicStep = 0;

function pad(number) {
  return String(number).padStart(2, "0");
}

function renderThumbs() {
  thumbs.innerHTML = galleryItems
    .map((item, index) => `
      <button type="button" class="thumb" data-go="${index}" aria-label="第 ${index + 1} 张">
        <img src="${item.src}" alt="">
      </button>
    `)
    .join("");

  thumbs.querySelectorAll("[data-go]").forEach((button) => {
    button.addEventListener("click", () => showSlide(Number(button.dataset.go), true));
  });
}

function showSlide(nextIndex, withSparkle = false) {
  if (!galleryItems.length) return;

  current = (nextIndex + galleryItems.length) % galleryItems.length;
  const item = galleryItems[current];

  card.classList.add("is-flipping");
  window.setTimeout(() => {
    photo.src = item.src;
    photo.alt = item.title;
    indexLabel.textContent = `${pad(current + 1)} / ${galleryItems.length}`;
    titleLabel.textContent = item.title;
    captionLabel.textContent = item.caption;
    progress.style.width = `${((current + 1) / galleryItems.length) * 100}%`;

    thumbs.querySelectorAll(".thumb").forEach((thumb, index) => {
      thumb.classList.toggle("is-active", index === current);
      if (index === current) {
        thumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    });

    card.classList.remove("is-flipping");
    if (withSparkle) popHearts();
  }, 120);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2300);
}

function popHearts() {
  for (let i = 0; i < 9; i += 1) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = "♥";
    heart.style.setProperty("--x", `${20 + Math.random() * 60}vw`);
    heart.style.setProperty("--y", `${35 + Math.random() * 40}vh`);
    heart.style.setProperty("--s", `${18 + Math.random() * 24}px`);
    document.body.append(heart);
    window.setTimeout(() => heart.remove(), 1300);
  }
}

function resizeCanvas() {
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * scale);
  canvas.height = Math.floor(window.innerHeight * scale);
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
}

function launchConfetti() {
  const colors = ["#ee6f8b", "#ffb896", "#ffe28a", "#8bd3bd", "#95bdff", "#ffffff"];
  pieces = Array.from({ length: 95 }, () => ({
    x: window.innerWidth * (0.18 + Math.random() * 0.64),
    y: window.innerHeight * 0.22,
    size: 5 + Math.random() * 9,
    vx: -4 + Math.random() * 8,
    vy: -7 - Math.random() * 7,
    rotation: Math.random() * Math.PI,
    spin: -0.18 + Math.random() * 0.36,
    color: colors[Math.floor(Math.random() * colors.length)],
    life: 80 + Math.random() * 50
  }));

  cancelAnimationFrame(animationFrame);
  tickConfetti();
}

function tickConfetti() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  pieces = pieces
    .map((piece) => ({
      ...piece,
      x: piece.x + piece.vx,
      y: piece.y + piece.vy,
      vy: piece.vy + 0.3,
      rotation: piece.rotation + piece.spin,
      life: piece.life - 1
    }))
    .filter((piece) => piece.life > 0 && piece.y < window.innerHeight + 40);

  for (const piece of pieces) {
    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.rotation);
    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.68);
    ctx.restore();
  }

  if (pieces.length) {
    animationFrame = requestAnimationFrame(tickConfetti);
  }
}

function playTone(frequency, start, duration, volume = 0.055) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.04);
}

function playMusicStep() {
  if (!audioContext || !musicOn) return;

  const melody = [523.25, 659.25, 783.99, 659.25, 587.33, 659.25, 523.25, 392.0];
  const harmony = [261.63, 329.63, 392.0, 329.63, 293.66, 329.63, 261.63, 196.0];
  const now = audioContext.currentTime;
  const index = musicStep % melody.length;

  playTone(melody[index], now, 0.34, 0.055);
  playTone(harmony[index], now + 0.02, 0.46, 0.025);
  musicStep += 1;
}

function toggleMusic(button) {
  if (!audioContext) {
    audioContext = new AudioContext();
  }

  musicOn = !musicOn;
  button.classList.toggle("is-on", musicOn);
  button.textContent = musicOn ? "暂停音乐" : "开启音乐";

  if (musicOn) {
    musicStep = 0;
    playMusicStep();
    musicTimer = window.setInterval(playMusicStep, 420);
    showToast("循环音乐已开启，快乐连续播放。");
  } else {
    window.clearInterval(musicTimer);
    showToast("音乐暂停，照片继续甜。");
  }
}

function toggleAutoplay(button) {
  autoplayOn = !autoplayOn;
  button.classList.toggle("is-on", autoplayOn);
  button.textContent = autoplayOn ? "暂停播放" : "自动播放";

  if (autoplayOn) {
    autoplayTimer = window.setInterval(() => showSlide(current + 1), 2600);
    showToast("自动播放已开启。");
  } else {
    window.clearInterval(autoplayTimer);
    showToast("自动播放暂停。");
  }
}

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => {
    showSlide(current + 1, true);
    launchConfetti();
  });
});

document.querySelector("[data-prev]").addEventListener("click", () => showSlide(current - 1, true));
document.querySelector("[data-autoplay]").addEventListener("click", (event) => toggleAutoplay(event.currentTarget));
document.querySelector("[data-music]").addEventListener("click", (event) => toggleMusic(event.currentTarget));
document.querySelector("[data-sweet]").addEventListener("click", () => {
  showToast(sweetLines[Math.floor(Math.random() * sweetLines.length)]);
  popHearts();
});

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
renderThumbs();
showSlide(0);
