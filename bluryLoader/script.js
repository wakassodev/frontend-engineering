const img = document.getElementById("mainImg");
const percentEl = document.getElementById("percent");
const root = document.documentElement;

let progress = 0;

function animateToFull() {
  //Animate progress from 0 --> 1 smoothly
  function step() {
    progress += 0.008;
    if (progress > 1) progress = 1;

    root.style.setProperty("--p", progress);
    percentEl.textContent = Math.round((1 - progress) * 100) + "%";

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      setTimeout(() => percentEl.style.display = "none", 800);
    }
  }
  step()
}

// Attach listner before setting src
img.addEventListener("load", animateToFull);

img.src = "https://images.unsplash.com/photo-1529419412599-7bb870e11810?q=80"

if (img.complete) {
  animateToFull();
}
