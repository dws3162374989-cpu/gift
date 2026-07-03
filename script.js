const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dot")];
const toast = document.querySelector("[data-toast]");
const canvas = document.querySelector("#confetti");
const ctx = canvas.getContext("2d");
const sweetLines = [
  "今日甜话：方景源小朋友，允许你今天多可爱一点。",
  "隐藏彩蛋：你一出现，快乐就自动刷新。",
  "系统提示：你已获得无限偏爱权限。",
  "投喂成功：今日份喜欢已经送达。",
  "认证完成：全世界最值得被宠的人，是你。"
];

let current = 0;
let pieces = [];
let animationFrame = 0;
let audioContext = null;
let musicTimer = null;
let musicOn = false;

function showSlide(nextIndex) {
  const total = slides.length;
  const oldIndex = current;
  current = (nextIndex + total) % total;

  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === current);
    slide.classList.toggle("is-leaving-left", index === oldIndex && index !== current);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === current);
  });

  popHearts();
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
  const colors = ["#ec6f86", "#ffb391", "#ffe28a", "#78c7b5", "#8fb7ff", "#ffffff"];
  pieces = Array.from({ length: 100 }, () => ({
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

function playTone(frequency, start, duration) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.08, start + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function playMelody() {
  if (!audioContext) return;
  const notes = [523.25, 659.25, 783.99, 659.25, 587.33, 659.25, 523.25, 392.0];
  const now = audioContext.currentTime;
  notes.forEach((note, index) => playTone(note, now + index * 0.32, 0.24));
}

function toggleMusic(button) {
  if (!audioContext) {
    audioContext = new AudioContext();
  }

  musicOn = !musicOn;
  button.textContent = musicOn ? "暂停音乐" : "开启音乐";

  if (musicOn) {
    playMelody();
    musicTimer = window.setInterval(playMelody, 2800);
    showToast("轻音乐已开启，快乐开始营业。");
  } else {
    window.clearInterval(musicTimer);
    showToast("音乐暂停，宠溺继续。");
  }
}

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => {
    showSlide(current + 1);
    launchConfetti();
  });
});

document.querySelector("[data-prev]").addEventListener("click", () => showSlide(current - 1));

dots.forEach((dot) => {
  dot.addEventListener("click", () => showSlide(Number(dot.dataset.go)));
});

document.querySelector("[data-sweet]").addEventListener("click", () => {
  const line = sweetLines[Math.floor(Math.random() * sweetLines.length)];
  showToast(line);
  popHearts();
});

document.querySelector("[data-music]").addEventListener("click", (event) => toggleMusic(event.currentTarget));
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
