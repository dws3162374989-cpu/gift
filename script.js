const galleryItems = [
  { src: "assets/gallery/photo-01.jpg", title: "小心心发射", caption: "近距离小心心已经送达，今日份可爱直接贴脸暴击。" },
  { src: "assets/gallery/photo-02.jpg", title: "窗边比耶", caption: "车窗外的风景飞快后退，镜头里的比耶小朋友稳稳可爱。" },
  { src: "assets/gallery/photo-03.jpg", title: "地铁贴贴", caption: "车厢里的近距离合照，认真看镜头的样子很适合被收藏。" },
  { src: "assets/gallery/photo-04.jpg", title: "视频亲亲", caption: "手机里和现实里同步卖萌，幼稚得刚刚好，也甜得刚刚好。" },
  { src: "assets/gallery/photo-05.jpg", title: "毕业认证", caption: "校名、学士服和并肩合照一起出现，这一天当然要郑重保存。" },
  { src: "assets/gallery/photo-06.jpg", title: "双人补水站", caption: "两瓶水挡在前面，但挡不住这张照片里的陪伴感。" },
  { src: "assets/gallery/photo-07.jpg", title: "候车小片段", caption: "大厅里的等待时间，因为这张贴近镜头的合照变得很有纪念感。" },
  { src: "assets/gallery/photo-08.jpg", title: "红柱小憩", caption: "红色柱子、木椅和阳光都很暖，但最亮眼的还是你。" },
  { src: "assets/gallery/photo-09.jpg", title: "夜色比耶", caption: "路灯亮起来的时候，比耶手势也刚好把夜晚变得可爱。" },
  { src: "assets/gallery/photo-10.jpg", title: "花束公主", caption: "黑裙和蓝紫花束刚好相配，像把温柔认真地捧在手里。" },
  { src: "assets/gallery/photo-11.jpg", title: "小站台", caption: "坐在银色座椅边认真看手机，连等车的瞬间都很有画面感。" },
  { src: "assets/gallery/photo-12.jpg", title: "比耶小黄裙", caption: "黄色裙子和比耶手势一起出现，甜度直接调到满格。" },
  { src: "assets/gallery/photo-13.jpg", title: "城墙快乐", caption: "在城墙边举高手的那一刻，快乐很明显，喜欢也很明显。" },
  { src: "assets/gallery/photo-14.jpg", title: "比耶选手", caption: "戴眼镜比耶选手再次上线，表情乖到必须立刻夸夸。" },
  { src: "assets/gallery/photo-15.jpg", title: "毕业合照", caption: "花束在中间，你们站在一起，这张毕业照认真又可爱。" },
  { src: "assets/gallery/photo-16.jpg", title: "地铁小惊喜", caption: "车厢里的随手自拍，把普通路程变成了只有你们知道的小片段。" },
  { src: "assets/gallery/photo-17.jpg", title: "花墙前", caption: "花墙在后面开得热闹，你在前面看起来温柔又清亮。" },
  { src: "assets/gallery/photo-18.jpg", title: "戴帽小朋友", caption: "格纹帽子戴上的瞬间，可爱像被正式盖了章。" },
  { src: "assets/gallery/photo-19.jpg", title: "阳光近照", caption: "阳光落在脸上的这张很温柔，眼镜里的光也很好看。" },
  { src: "assets/gallery/photo-20.jpg", title: "挥挥手", caption: "坐在床边挥手的样子，像在说：快过来陪我。" },
  { src: "assets/gallery/photo-21.jpg", title: "毕业花花", caption: "单膝送花的瞬间有点搞笑，但花是真的，喜欢也是真的。" },
  { src: "assets/gallery/photo-22.jpg", title: "校园纪念", caption: "红色建筑和学士服一起入镜，把重要日子拍得很正式。" },
  { src: "assets/gallery/photo-23.jpg", title: "小发夹展示", caption: "举起小发夹认真展示，连逛店的小瞬间都可爱得很具体。" },
  { src: "assets/gallery/photo-24.jpg", title: "窗边合照", caption: "靠窗的位置、自然光和并肩的距离，都刚刚好。" },
  { src: "assets/gallery/photo-25.jpg", title: "出发啦", caption: "站台前的合照像旅程开头，下一站去哪都值得期待。" },
  { src: "assets/gallery/photo-26.jpg", title: "草帽时间", caption: "一排草帽作背景，你戴的这一顶最有故事感。" },
  { src: "assets/gallery/photo-27.jpg", title: "转身一下", caption: "画面有点晃，但转身看过来的那一下很有生活里的可爱。" }
];
const card = document.querySelector("[data-card]");
const photo = document.querySelector("[data-photo]");
const indexLabel = document.querySelector("[data-index]");
const titleLabel = document.querySelector("[data-title]");
const captionLabel = document.querySelector("[data-caption]");
const progress = document.querySelector("[data-progress]");
const thumbs = document.querySelector("[data-thumbs]");
const toast = document.querySelector("[data-toast]");
const wipe = document.querySelector("[data-wipe]");
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

  playTransition();
  card.classList.add("is-flipping");
  window.setTimeout(() => {
    photo.src = item.src;
    photo.alt = item.title;
    indexLabel.textContent = `第 ${pad(current + 1)} 张`;
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
    card.classList.remove("is-arriving");
    void card.offsetWidth;
    card.classList.add("is-arriving");
    if (withSparkle) popHearts();
  }, 120);
}

function playTransition() {
  if (!wipe) return;
  document.body.classList.add("is-transitioning");
  wipe.classList.remove("is-active");
  void wipe.offsetWidth;
  wipe.classList.add("is-active");
  window.clearTimeout(playTransition.timer);
  playTransition.timer = window.setTimeout(() => {
    wipe.classList.remove("is-active");
    document.body.classList.remove("is-transitioning");
  }, 640);
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
