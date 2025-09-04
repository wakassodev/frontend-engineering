(function() {
const container = document.getElementById("container");
const btn = document.getElementById("mode-btn");
const toggleBtn = document.getElementById("toggle-btn")

let isClicked = false


btn.addEventListener("click", () => {
  if (!isClicked) {
    if (!toggleBtn.checked) toggleBtn.click();
  } else {
    if (toggleBtn.checked) toggleBtn.click();
  }
});

toggleBtn.addEventListener("change", (e) => {
  if (e.target.checked) {
    container.style.backgroundColor = "#2b2100ff";
    btn.textContent = "Light";
  } else {
    container.style.backgroundColor = "antiquewhite";
    btn.textContent = "Dark";
  }
})})();

