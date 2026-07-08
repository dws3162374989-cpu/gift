const galleryItems = [
  { src: "assets/gallery/photo-01.jpg", title: "比心", caption: "来自我源宝宝的比心噢" },
  { src: "assets/gallery/photo-02.jpg", title: "比耶", caption: "我所记录的第2次比耶" },
  { src: "assets/gallery/photo-03.jpg", title: "地铁美照", caption: "晚上坐高铁又坐地铁好心疼" },
  { src: "assets/gallery/photo-04.jpg", title: "亲亲宝宝", caption: "手机里亲亲，无时无刻都想亲我宝宝" },
  { src: "assets/gallery/photo-05.jpg", title: "毕业美照", caption: "达成成就和我源宝宝的毕业照" },
  { src: "assets/gallery/photo-06.jpg", title: "江边散步", caption: "牵着我源宝宝在江边散步真爽呀" },
  { src: "assets/gallery/photo-07.jpg", title: "荆州站", caption: "宝宝回家我去学校" },
  { src: "assets/gallery/photo-08.jpg", title: "中山公园", caption: "宝宝带我逛中山公园" },
  { src: "assets/gallery/photo-09.jpg", title: "武汉江滩", caption: "第一次跟女生来武汉江滩嘻嘻" },
  { src: "assets/gallery/photo-10.jpg", title: "毕业照片", caption: "小黑裙小花束衬托出我漂亮源宝宝" },
  { src: "assets/gallery/photo-11.jpg", title: "骑猪宝宝", caption: "宝宝骑猪哈哈哈太可爱了超级喜欢噢" },
  { src: "assets/gallery/photo-12.jpg", title: "小黄裙比耶", caption: "顺利拿下岗一源宝宝真棒棒" },
  { src: "assets/gallery/photo-13.jpg", title: "城墙举手", caption: "“别拍啦”我宝宝太可爱我真沦陷了" },
  { src: "assets/gallery/photo-14.jpg", title: "宝宝自拍", caption: "白衣服配小手比耶太可爱啦" },
  { src: "assets/gallery/photo-15.jpg", title: "毕业照", caption: "花束在中间，我和宝宝肩并肩哈哈哈" },
  { src: "assets/gallery/photo-16.jpg", title: "腼腆微笑", caption: "第一次给我宝宝拍照噢" },
  { src: "assets/gallery/photo-17.jpg", title: "花墙自拍", caption: "宝宝自拍无敌可爱" },
  { src: "assets/gallery/photo-18.jpg", title: "格纹帽子", caption: "帽子一戴如此可爱" },
  { src: "assets/gallery/photo-19.jpg", title: "美美照", caption: "穿裙子的源宝宝好看爆炸呀" },
  { src: "assets/gallery/photo-20.jpg", title: "漂亮小黑裙", caption: "小黑裙也无敌漂亮啊" },
  { src: "assets/gallery/photo-21.jpg", title: "宝宝鲜花", caption: "源宝宝中指加开枪也无法阻挡我追求" },
  { src: "assets/gallery/photo-22.jpg", title: "校园指认", caption: "握着我宝宝的手一起指哈哈哈" },
  { src: "assets/gallery/photo-23.jpg", title: "发夹展示", caption: "小小发夹锦上添花" },
  { src: "assets/gallery/photo-24.jpg", title: "风吹飘发", caption: "发随风动真好看呀" },
  { src: "assets/gallery/photo-25.jpg", title: "美丽宝宝", caption: "刚涂的口红更加彰显了我宝宝的美丽呀" },
  { src: "assets/gallery/photo-26.jpg", title: "小草帽", caption: "如此可爱美丽的源宝宝" },
  { src: "assets/gallery/photo-27.jpg", title: "小黄裙转身", caption: "我宝宝转身一笑美我一大跳呀" }
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
const viewer = document.querySelector("[data-viewer]");
const story = document.querySelector(".story");
const luckyButton = document.querySelector("[data-lucky]");
const secretButton = document.querySelector("[data-secret]");
const secretCard = document.querySelector("[data-secret-card]");
const secretTitle = document.querySelector("[data-secret-title]");
const secretText = document.querySelector("[data-secret-text]");
const lockScreen = document.querySelector("[data-lock-screen]");
const lockCard = document.querySelector("[data-lock-card]");
const lockForm = document.querySelector("[data-lock-form]");
const lockInput = document.querySelector("[data-lock-input]");
const lockMessage = document.querySelector("[data-lock-message]");
const canvas = document.querySelector("#confetti");
const ctx = canvas.getContext("2d");

const LOCK_HASH = "76d55b0f0476a842ce3626918a16a091d27b5a9bc629c3b045b4dcc57c829d64";
const LOCK_SESSION_KEY = "fang_album_unlocked_this_time";
const LOCK_FALLBACK = String.fromCharCode(49, 48, 49, 54, 48, 48);

const sweetLines = [
  "今日甜话：方景源小朋友，允许你今天多可爱一点。",
  "系统提示：你已获得无限偏爱权限。",
  "投喂成功：今天的喜欢已经送达。",
  "隐藏彩蛋：你一出现，快乐就自动刷新。",
  "认证完成：最值得被宠的人，是你。"
];

const secretLines = [
  "已经5天没有见到我宝宝了，天天都在想我宝宝",
  "第一次和我宝宝去荆州的高铁上，别提有多激动了，还有点小紧张",
  "我宝宝第二次专门从荆州来武汉找我，还是好感动",
  "我源宝宝如此美丽，被我宝宝钓成翘嘴了哈哈哈哈哈哈",
  "说实话拍照那天真心疼我宝宝，上午早起去早饭都没吃去体检，又来例假，大太阳晒得不得了，结果还没拍出几张好看的照片，晚上吃饭还忘记说不放香菜了，下次拍照肯定准备好不那么仓促了，出去吃饭也一定记住交代忌口，我宝宝看我表现噢",
  "一次亲眼见我宝宝穿这个白裙子噢，无敌好看呀",
  "我宝宝准备考试累了好久，送我宝宝回家过五一，在家的宝宝气色都变好啦",
  "我宝宝第一次带我来逛公园，源宝宝的美丽让我忍不住了，风有点大还给我宝宝吹感冒了晚上还发烧了，真心疼啊",
  "我宝宝考完试下午来找我，还来例假不舒服，晚上送我宝宝去汉口站看着我宝宝慢慢走进去，很舍不得啊",
  "哎呀我宝宝还是太好看啦，521小水印嘿嘿",
  "跟我宝宝一起去复检，又要送我宝宝回家了，这次估计好久见不到我宝宝，好舍不得啊",
  "感冒还没好去面试，哎呀我宝宝还是太棒了，这么长时间的准备也算是展示出来了，我宝宝真厉害噢",
  "去车站之前和我宝宝一起逛着城墙，多希望时间能过的慢一点能多跟我宝宝待一会",
  "超级无敌好看啊我宝宝，每次跟我宝宝发信息看到背景都要沉迷一会儿",
  "我宝宝右手小动作噢，我不管比中指我就要亲我宝宝",
  "我宝宝在校门外等着我复试玩，第一次跟我宝宝出去玩，太好看啦，我宝宝晚上说想打台球可惜太晚了送我宝宝回去了，其实很不想送我宝宝回去，但是第一次跟女生出去玩就让过夜感觉不太好，还是有点舍不得",
  "宝宝自拍无敌可爱 我宝宝太好看啦我真沦陷啦",
  "我宝宝戴帽子更好看呀",
  "当时看我宝宝这张自拍一边看一边笑，真好看呀，欣赏我宝宝的美照也是一种享受呀",
  "第一次见我宝宝穿这个小黑裙，真给我感动坏了大晚上来武汉找我就因为怕我不开心，当时我就想这女生怎么这么好啊这辈子真遇不到第二个了，泪目了我必须要娶我宝宝，嘿嘿还亲到我宝宝了",
  "那一瞬间我真恍惚了，好像看到了以后向我宝宝求婚的样子嘿嘿",
  "娶到我宝宝的时候我要再握着我宝宝的手指一次",
  "哎呀我宝宝还是太好看啦，搭配发夹更是美丽爆炸啊",
  "第一次亲眼见我宝宝穿这个灰裙子，也是第一次见我宝宝穿裙子呀，我宝宝穿裙子是真好看呀",
  "武汉胖哥俩不如荆州好吃，差评，真怀念和我宝宝在荆州玩的时候呀",
  "我宝宝穿白裙子也无敌好看啊，感觉浑身布灵布灵的哈哈哈",
  "小黄裙更衬出我宝宝的白呀，太好看啦"
];

let current = 0;
let pieces = [];
let animationFrame = 0;
let autoplayTimer = 0;
let autoplayOn = false;
let audioContext = null;
let masterGain = null;
let compressor = null;
let musicTimer = 0;
let musicOn = false;
let musicStep = 0;
let nextNoteTime = 0;
let touchStartX = 0;
let touchStartY = 0;
let secretTimer = 0;
let tapTimer = 0;
let lastTapTime = 0;
let lastTapX = 0;
let lastTapY = 0;
let didSwipe = false;
let immersiveOn = false;
let luckyIndex = 0;

function pad(number) {
  return String(number).padStart(2, "0");
}

async function digestText(value) {
  if (window.crypto && window.crypto.subtle && typeof TextEncoder !== "undefined") {
    const bytes = new TextEncoder().encode(value);
    const digest = await window.crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  return "";
}

function isUnlockedThisSession() {
  try {
    return sessionStorage.getItem(LOCK_SESSION_KEY) === "1";
  } catch (error) {
    return false;
  }
}

function rememberUnlock() {
  try {
    sessionStorage.setItem(LOCK_SESSION_KEY, "1");
  } catch (error) {
    // Some in-app browsers block storage; unlocking still works for this page load.
  }
}

function setLockMessage(message, isError = false) {
  lockMessage.textContent = message;
  lockMessage.classList.toggle("is-error", isError);
}

function unlockAlbum(shouldRemember = true) {
  if (shouldRemember) rememberUnlock();
  document.body.classList.remove("is-locked");
  lockScreen.setAttribute("aria-hidden", "true");
  window.setTimeout(() => {
    lockScreen.hidden = true;
  }, 360);
  resizeCanvas();
}

function shakeLockCard() {
  lockCard.classList.remove("is-shaking");
  void lockCard.offsetWidth;
  lockCard.classList.add("is-shaking");
}

async function handleUnlock(event) {
  event.preventDefault();
  const value = lockInput.value.replace(/\s+/g, "");
  const digest = await digestText(value);
  const isCorrect = digest ? digest === LOCK_HASH : value === LOCK_FALLBACK;

  if (isCorrect) {
    setLockMessage("解锁成功，快乐相册正在开门。");
    unlockAlbum();
    showToast("欢迎进入方景源小朋友的快乐相册。");
    return;
  }

  setLockMessage("还能是谁的手机密码呢？", true);
  lockInput.select();
  shakeLockCard();
  if (navigator.vibrate) navigator.vibrate([24, 40, 24]);
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

function showSlide(nextIndex, withSparkle = false, withTransition = true) {
  if (!galleryItems.length) return;

  current = (nextIndex + galleryItems.length) % galleryItems.length;
  const item = galleryItems[current];

  if (withTransition) playTransition();

  card.classList.add("is-flipping");
  window.setTimeout(() => {
    story.style.setProperty("--photo", `url("${item.src}")`);
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
  }, withTransition ? 170 : 0);
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
  }, 620);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function popHeartsAt(x, y, amount = 7) {
  for (let i = 0; i < amount; i += 1) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = "♥";
    heart.style.setProperty("--x", `${x + (-26 + Math.random() * 52)}px`);
    heart.style.setProperty("--y", `${y + (-16 + Math.random() * 32)}px`);
    heart.style.setProperty("--s", `${16 + Math.random() * 22}px`);
    document.body.append(heart);
    window.setTimeout(() => heart.remove(), 1300);
  }
}

function popHearts() {
  popHeartsAt(window.innerWidth * (0.22 + Math.random() * 0.56), window.innerHeight * (0.3 + Math.random() * 0.34), 7);
}

function showSecret() {
  const item = galleryItems[current];
  secretTitle.textContent = `${item.title}的小备注`;
  secretText.textContent = secretLines[current] || "这一张也被我认真喜欢着。";
  secretCard.classList.add("is-visible");
  secretCard.setAttribute("aria-hidden", "false");
  window.clearTimeout(secretTimer);
  secretTimer = window.setTimeout(hideSecret, 4300);
  if (navigator.vibrate) navigator.vibrate(18);
}

function hideSecret() {
  secretCard.classList.remove("is-visible");
  secretCard.setAttribute("aria-hidden", "true");
}

function toggleImmersive() {
  immersiveOn = !immersiveOn;
  story.classList.toggle("is-immersive", immersiveOn);
  showToast(immersiveOn ? "沉浸看图开启，轻点照片可恢复。" : "小按钮回来了。");
}

function getLuckyIndex() {
  const today = new Date();
  const seed = today.getFullYear() * 372 + (today.getMonth() + 1) * 31 + today.getDate();
  return seed % galleryItems.length;
}

function setupLuckyPhoto() {
  luckyIndex = getLuckyIndex();
  const lucky = galleryItems[luckyIndex];
  luckyButton.textContent = `今日幸运：第 ${pad(luckyIndex + 1)} 张`;
  luckyButton.setAttribute("aria-label", `跳到今日幸运照片：${lucky.title}`);
  window.setTimeout(() => {
    showToast(`今日幸运照片：${lucky.title}`);
  }, 680);
}

function resizeCanvas() {
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * scale);
  canvas.height = Math.floor(window.innerHeight * scale);
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
}

function launchConfetti() {
  const colors = ["#ef7891", "#ffb896", "#ffe48d", "#8bd3bd", "#ffffff"];
  pieces = Array.from({ length: 70 }, () => ({
    x: window.innerWidth * (0.18 + Math.random() * 0.64),
    y: window.innerHeight * 0.24,
    size: 4 + Math.random() * 8,
    vx: -3.5 + Math.random() * 7,
    vy: -6 - Math.random() * 6,
    rotation: Math.random() * Math.PI,
    spin: -0.16 + Math.random() * 0.32,
    color: colors[Math.floor(Math.random() * colors.length)],
    life: 70 + Math.random() * 45
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
      vy: piece.vy + 0.28,
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

  if (pieces.length) animationFrame = requestAnimationFrame(tickConfetti);
}

function setupAudio() {
  if (audioContext) return;

  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  audioContext = new AudioEngine();
  compressor = audioContext.createDynamicsCompressor();
  compressor.threshold.value = -18;
  compressor.knee.value = 22;
  compressor.ratio.value = 4;
  compressor.attack.value = 0.004;
  compressor.release.value = 0.22;

  masterGain = audioContext.createGain();
  masterGain.gain.value = 0.82;
  masterGain.connect(compressor).connect(audioContext.destination);
}

function playTone(frequency, start, duration, volume, type = "triangle") {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.018);
  gain.gain.exponentialRampToValueAtTime(Math.max(volume * 0.36, 0.0001), start + duration * 0.58);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain).connect(masterGain);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function scheduleBeat(step, time) {
  const melody = [659.25, 783.99, 880.0, 783.99, 659.25, 587.33, 659.25, 523.25, 587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 493.88, 523.25];
  const chords = [
    [329.63, 392.0],
    [392.0, 493.88],
    [440.0, 523.25],
    [349.23, 440.0]
  ];
  const bass = [164.81, 196.0, 220.0, 174.61];
  const beat = step % melody.length;
  const chord = chords[Math.floor(beat / 4) % chords.length];

  playTone(melody[beat], time, 0.24, 0.16, beat % 2 ? "sine" : "triangle");
  playTone(chord[0], time + 0.018, 0.42, 0.072, "sine");
  playTone(chord[1], time + 0.034, 0.42, 0.052, "sine");

  if (beat % 4 === 0) {
    playTone(bass[Math.floor(beat / 4) % bass.length], time, 0.5, 0.07, "sine");
  }
}

function scheduleMusic() {
  if (!audioContext || !musicOn) return;

  while (nextNoteTime < audioContext.currentTime + 0.72) {
    scheduleBeat(musicStep, nextNoteTime);
    nextNoteTime += 0.28;
    musicStep += 1;
  }
}

async function toggleMusic(button) {
  setupAudio();
  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

  musicOn = !musicOn;
  button.classList.toggle("is-on", musicOn);
  button.textContent = musicOn ? "Ⅱ" : "♪";
  button.setAttribute("aria-label", musicOn ? "暂停音乐" : "开启音乐");

  if (musicOn) {
    musicStep = 0;
    nextNoteTime = audioContext.currentTime + 0.04;
    scheduleMusic();
    musicTimer = window.setInterval(scheduleMusic, 80);
    showToast("宠溺小曲上线，音量已加甜。");
  } else {
    window.clearInterval(musicTimer);
    showToast("音乐先暂停，可爱不暂停。");
  }
}

function toggleAutoplay(button) {
  autoplayOn = !autoplayOn;
  button.classList.toggle("is-on", autoplayOn);
  button.textContent = autoplayOn ? "暂停" : "自动";

  if (autoplayOn) {
    autoplayTimer = window.setInterval(() => showSlide(current + 1), 2800);
    showToast("自动翻页开始，坐好看可爱。");
  } else {
    window.clearInterval(autoplayTimer);
    showToast("自动翻页暂停。");
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
luckyButton.addEventListener("click", () => {
  showSlide(luckyIndex, true);
  showToast(`已跳到今日幸运：${galleryItems[luckyIndex].title}`);
});
secretButton.addEventListener("click", () => {
  showSecret();
  popHearts();
});
secretCard.addEventListener("click", hideSecret);
lockForm.addEventListener("submit", handleUnlock);
lockInput.addEventListener("input", () => {
  setLockMessage("输对暗号，快乐相册才开门。");
});

photo.draggable = false;

function isInsideStory(target) {
  return target instanceof Element && Boolean(target.closest(".story"));
}

["contextmenu", "selectstart", "dragstart"].forEach((eventName) => {
  document.addEventListener(eventName, (event) => {
    if (isInsideStory(event.target)) event.preventDefault();
  }, { capture: true });
});

viewer.addEventListener("click", (event) => {
  if (event.detail > 1 || didSwipe) {
    lastTapTime = 0;
    window.clearTimeout(tapTimer);
    return;
  }

  const now = Date.now();
  const distance = Math.hypot(event.clientX - lastTapX, event.clientY - lastTapY);
  if (now - lastTapTime < 330 && distance < 42) {
    lastTapTime = 0;
    window.clearTimeout(tapTimer);
    popHeartsAt(event.clientX, event.clientY, 10);
    showToast(sweetLines[Math.floor(Math.random() * sweetLines.length)]);
    return;
  }

  lastTapTime = now;
  lastTapX = event.clientX;
  lastTapY = event.clientY;
  window.clearTimeout(tapTimer);
  tapTimer = window.setTimeout(() => {
    lastTapTime = 0;
    toggleImmersive();
  }, 300);
});

viewer.addEventListener("dblclick", (event) => {
  window.clearTimeout(tapTimer);
  lastTapTime = 0;
  popHeartsAt(event.clientX, event.clientY, 10);
  showToast(sweetLines[Math.floor(Math.random() * sweetLines.length)]);
});

viewer.addEventListener("touchstart", (event) => {
  const touch = event.changedTouches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}, { passive: true });

viewer.addEventListener("touchend", (event) => {
  const touch = event.changedTouches[0];
  const dx = touch.clientX - touchStartX;
  const dy = touch.clientY - touchStartY;

  if (Math.abs(dx) < 44 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
  didSwipe = true;
  window.setTimeout(() => {
    didSwipe = false;
  }, 260);
  showSlide(current + (dx < 0 ? 1 : -1), true);
}, { passive: true });

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
renderThumbs();
showSlide(0, false, false);
setupLuckyPhoto();

if (isUnlockedThisSession()) {
  unlockAlbum(false);
} else {
  window.setTimeout(() => lockInput.focus(), 360);
}
