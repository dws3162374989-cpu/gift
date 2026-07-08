const galleryItems = [
  { src: "assets/gallery/photo-01.jpg", title: "手指小心心", caption: "黄色小裙子加贴脸小心心，今天的可爱先由你本人亲自派送。" },
  { src: "assets/gallery/photo-02.jpg", title: "高铁比耶", caption: "窗外风景在飞，镜头里的比耶小朋友稳稳营业，乖得很认真。" },
  { src: "assets/gallery/photo-03.jpg", title: "车厢贴贴", caption: "地铁里的近距离合照，距离很近，喜欢也不用藏得太远。" },
  { src: "assets/gallery/photo-04.jpg", title: "隔空亲亲", caption: "手机里一个亲亲，现实里一个偷笑，幼稚但非常值得收藏。" },
  { src: "assets/gallery/photo-05.jpg", title: "毕业招牌照", caption: "校名、学士服和并肩合照都在，这一天必须被郑重盖章。" },
  { src: "assets/gallery/photo-06.jpg", title: "双人补水站", caption: "两瓶水抢镜失败，因为后面的你们更像今日限定快乐。" },
  { src: "assets/gallery/photo-07.jpg", title: "候车大厅", caption: "在大厅等车也能拍得像小电影，方景源小朋友自带主角感。" },
  { src: "assets/gallery/photo-08.jpg", title: "红柱长椅", caption: "红色柱子、木椅和阳光都很暖，但最亮眼的还是这个比耶。" },
  { src: "assets/gallery/photo-09.jpg", title: "夜色比耶", caption: "路灯亮起来，夜晚变软一点，你的比耶把画面变甜一点。" },
  { src: "assets/gallery/photo-10.jpg", title: "黑裙花束", caption: "黑裙和蓝紫花束刚好相配，像把温柔认真捧在手心里。" },
  { src: "assets/gallery/photo-11.jpg", title: "银色座位", caption: "靠在银色座椅边看手机，随手一拍都是安静又可爱的片段。" },
  { src: "assets/gallery/photo-12.jpg", title: "小黄裙比耶", caption: "黄裙子、双手比耶、微微偷笑，甜度直接拉到满格。" },
  { src: "assets/gallery/photo-13.jpg", title: "城墙举手", caption: "城墙边举高手的那一秒，快乐很明显，我喜欢也很明显。" },
  { src: "assets/gallery/photo-14.jpg", title: "窗帘自拍", caption: "白衣服配小比耶，像偷偷把今天的可爱缓存了一份。" },
  { src: "assets/gallery/photo-15.jpg", title: "毕业并肩", caption: "花束在中间，你们并肩站好，这张正式里还藏着一点乖。" },
  { src: "assets/gallery/photo-16.jpg", title: "地铁小笑", caption: "车厢里看镜头的小笑很轻，但足够把普通路程变成纪念。" },
  { src: "assets/gallery/photo-17.jpg", title: "花墙自拍", caption: "手指差点抢镜，花墙也很热闹，但你还是画面重点。" },
  { src: "assets/gallery/photo-18.jpg", title: "格纹帽子", caption: "帽子一戴，乖巧值加满；认真看镜头的时候更像被偏爱的小朋友。" },
  { src: "assets/gallery/photo-19.jpg", title: "阳光近照", caption: "阳光落在眼镜和脸上，这张软乎乎的，适合反复看。" },
  { src: "assets/gallery/photo-20.jpg", title: "床边挥手", caption: "坐在床边挥挥手，像在说：快来陪我，不许慢吞吞。" },
  { src: "assets/gallery/photo-21.jpg", title: "花束求夸", caption: "单膝送花有点搞笑，但花是真的，喜欢是真的，想哄你也是真的。" },
  { src: "assets/gallery/photo-22.jpg", title: "校园指认", caption: "红色建筑前一起指向镜头，像在宣布：这一页回忆归我们。" },
  { src: "assets/gallery/photo-23.jpg", title: "发夹展示", caption: "举起小发夹认真展示，逛店的小瞬间也被你变得很可爱。" },
  { src: "assets/gallery/photo-24.jpg", title: "站口合照", caption: "出发前的合照，有阳光、有风、还有一起去下一站的期待。" },
  { src: "assets/gallery/photo-25.jpg", title: "窗边座位", caption: "靠窗坐在一起，光线刚好，距离刚好，连沉默都像小约会。" },
  { src: "assets/gallery/photo-26.jpg", title: "草帽试戴", caption: "一排草帽里，你戴的这一顶最像夏天偷偷给你开的玩笑。" },
  { src: "assets/gallery/photo-27.jpg", title: "小黄裙转身", caption: "画面有点晃，但转身看过来的那一下，很像生活里突然冒出的甜。" }
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
  "这张小心心只允许方景源小朋友本人签收，别人看了也只能羡慕。",
  "和你一起坐车的时候，目的地会变重要，但旁边是谁更重要。",
  "车厢里人来人往，可这一小块画面只属于我们。",
  "隔着屏幕也要亲亲，幼稚一点没关系，反正是给你的。",
  "毕业这天很正式，我想把你认真开心的样子存久一点。",
  "两瓶水负责补水，你负责把画面变得很甜。",
  "等车的时候不算浪费时间，因为旁边是你。",
  "阳光和红柱都很好看，但我还是先看你。",
  "夜色刚刚降下来，你刚刚把它变可爱。",
  "这一束花很温柔，但拿着花的人更温柔。",
  "认真看手机也会被偷拍，因为我觉得这种日常也珍贵。",
  "黄色小裙子很适合你，像把夏天悄悄穿在身上。",
  "这张的快乐太明显了，根本藏不住。",
  "窗帘旁边的这一下比耶，属于乖巧小朋友证件照。",
  "并肩站好的样子很正式，但我还是觉得你最可爱。",
  "地铁里的小笑被我抓到了，归档为今日小确幸。",
  "花在后面开，你在前面发光，画面分工很明确。",
  "这顶帽子很会选主人，戴到你头上就合理了。",
  "阳光偏心了一点，刚好落在你脸上。",
  "你一挥手，我就想立刻走近一点。",
  "这张有点搞笑，但也有点认真，刚好像我们。",
  "校园门口这一张，适合写进很长很长的以后。",
  "小发夹被认真展示的样子，太像你的小战利品。",
  "站口的风有点忙，但它没有吹散这份好心情。",
  "靠窗坐在一起的时候，连沉默都可以很舒服。",
  "草帽店这一秒，像夏天偷偷给你加了滤镜。",
  "这张有点晃，所以更像真实生活里突然出现的甜。"
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
