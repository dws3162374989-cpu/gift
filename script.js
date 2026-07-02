const letterButton = document.querySelector("[data-open-letter]");
const confettiButton = document.querySelector("[data-confetti]");
const letter = document.querySelector("#letter");
const canvas = document.querySelector("#confetti");
const ctx = canvas.getContext("2d");

let pieces = [];
let animationFrame = 0;

async function loadContent() {
  try {
    const response = await fetch("site-content.json", { cache: "no-store" });
    if (!response.ok) return;
    const content = await response.json();

    for (const [key, value] of Object.entries(content)) {
      const element = document.querySelector(`[data-content="${key}"]`);
      if (!element || !value) continue;

      if (key === "photo") {
        element.src = value;
      } else {
        element.textContent = value;
      }
    }
  } catch {
    // Local file previews may block fetch; the built-in HTML text remains as a fallback.
  }
}

function resizeCanvas() {
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * scale);
  canvas.height = Math.floor(window.innerHeight * scale);
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
}

function launchConfetti() {
  const colors = ["#e85d75", "#ffb38b", "#6eb6a6", "#251b16", "#ffffff"];
  pieces = Array.from({ length: 90 }, () => ({
    x: window.innerWidth * (0.2 + Math.random() * 0.6),
    y: window.innerHeight * 0.24,
    size: 5 + Math.random() * 9,
    vx: -4 + Math.random() * 8,
    vy: -8 - Math.random() * 8,
    rotation: Math.random() * Math.PI,
    spin: -0.18 + Math.random() * 0.36,
    color: colors[Math.floor(Math.random() * colors.length)],
    life: 80 + Math.random() * 50
  }));

  cancelAnimationFrame(animationFrame);
  tick();
}

function tick() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  pieces = pieces
    .map((piece) => ({
      ...piece,
      x: piece.x + piece.vx,
      y: piece.y + piece.vy,
      vy: piece.vy + 0.32,
      rotation: piece.rotation + piece.spin,
      life: piece.life - 1
    }))
    .filter((piece) => piece.life > 0 && piece.y < window.innerHeight + 40);

  for (const piece of pieces) {
    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.rotation);
    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.66);
    ctx.restore();
  }

  if (pieces.length) {
    animationFrame = requestAnimationFrame(tick);
  }
}

letterButton.addEventListener("click", () => {
  letter.scrollIntoView({ behavior: "smooth", block: "center" });
  launchConfetti();
});

confettiButton.addEventListener("click", launchConfetti);
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
loadContent();
