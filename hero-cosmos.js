function initHeroCosmos() {
  const hero = document.querySelector(".hero-panel-cosmos");
  const canvas = hero?.querySelector(".hero-cosmos-canvas");

  if (!hero || !canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, active: false };
  let stars = [];
  let rafId = null;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let tick = 0;

  function createStars() {
    const starCount = Math.max(55, Math.min(125, Math.floor((width * height) / 5200)));
    stars = Array.from({ length: starCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.8 + 0.45,
      alpha: Math.random() * 0.45 + 0.25,
      depth: Math.random() * 0.9 + 0.25,
      drift: (Math.random() - 0.5) * 0.0009,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.018 + 0.008,
      hue: Math.random() > 0.78 ? 200 : Math.random() > 0.42 ? 215 : 225
    }));
  }

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createStars();
    render();
  }

  function drawNebula(x, y, radius, color, alpha) {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, `rgba(${color}, ${alpha})`);
    gradient.addColorStop(0.45, `rgba(${color}, ${alpha * 0.22})`);
    gradient.addColorStop(1, `rgba(${color}, 0)`);
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawBackdrop() {
    const pointerX = (pointer.x - 0.5) * width;
    const pointerY = (pointer.y - 0.5) * height;

    drawNebula(width * 0.78 - pointerX * 0.05, height * 0.24 - pointerY * 0.03, width * 0.34, "56, 136, 230", 0.16);
    drawNebula(width * 0.18 + pointerX * 0.08, height * 0.78 + pointerY * 0.04, width * 0.28, "28, 74, 172", 0.13);
    drawNebula(width * 0.52 + pointerX * 0.06, height * 0.52 + pointerY * 0.08, width * 0.18, "68, 166, 228", 0.08);

    if (pointer.active) {
      drawNebula(pointer.x * width, pointer.y * height, Math.min(width, height) * 0.22, "150, 220, 255", 0.07);
    }
  }

  function drawStars() {
    for (const star of stars) {
      star.twinkle += star.twinkleSpeed;
      star.x = (star.x + star.drift + 1) % 1;

      const px = star.x * width + (pointer.x - 0.5) * 16 * star.depth;
      const py = star.y * height + (pointer.y - 0.5) * 12 * star.depth;
      const alpha = star.alpha + Math.sin(star.twinkle + tick * 0.012) * 0.18;
      const radius = star.size + Math.sin(star.twinkle * 1.2 + tick * 0.01) * 0.15;

      ctx.beginPath();
      ctx.fillStyle = `hsla(${star.hue}, 95%, 92%, ${Math.max(0.12, alpha)})`;
      ctx.shadowBlur = 8 + star.size * 3;
      ctx.shadowColor = "rgba(143, 219, 255, 0.32)";
      ctx.arc(px, py, Math.max(0.3, radius), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;
  }

  function drawConstellations() {
    const nearby = stars.filter((star) => {
      const px = star.x * width + (pointer.x - 0.5) * 16 * star.depth;
      const py = star.y * height + (pointer.y - 0.5) * 12 * star.depth;
      const dx = px - pointer.x * width;
      const dy = py - pointer.y * height;
      return Math.sqrt(dx * dx + dy * dy) < Math.min(width, height) * 0.28;
    }).slice(0, 10);

    if (nearby.length < 2) return;

    ctx.lineWidth = 0.75;
    for (let i = 0; i < nearby.length - 1; i += 1) {
      const current = nearby[i];
      const next = nearby[i + 1];
      const x1 = current.x * width + (pointer.x - 0.5) * 16 * current.depth;
      const y1 = current.y * height + (pointer.y - 0.5) * 12 * current.depth;
      const x2 = next.x * width + (pointer.x - 0.5) * 16 * next.depth;
      const y2 = next.y * height + (pointer.y - 0.5) * 12 * next.depth;

      ctx.strokeStyle = "rgba(156, 224, 255, 0.18)";
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    drawBackdrop();
    drawStars();
    if (pointer.active) {
      drawConstellations();
    }
  }

  function animate() {
    tick += 1;
    pointer.x += (pointer.tx - pointer.x) * 0.055;
    pointer.y += (pointer.ty - pointer.y) * 0.055;
    render();
    rafId = window.requestAnimationFrame(animate);
  }

  function setPointer(event) {
    const rect = hero.getBoundingClientRect();
    pointer.tx = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    pointer.ty = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);
    pointer.active = true;
  }

  hero.addEventListener("pointermove", setPointer);
  hero.addEventListener("pointerenter", setPointer);
  hero.addEventListener("pointerleave", () => {
    pointer.tx = 0.5;
    pointer.ty = 0.5;
    pointer.active = false;
  });

  window.addEventListener("resize", resize);
  resize();

  if (!prefersReducedMotion) {
    animate();
  }
}

document.addEventListener("DOMContentLoaded", initHeroCosmos);
