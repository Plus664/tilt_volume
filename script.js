const audio = document.getElementById("audio");
const fill = document.getElementById("fill");

window.addEventListener("deviceorientation", e => {
  console.log(e.gamma)
  if (e.gamma == null) return;
  let tilt = e.gamma;
  tilt = Math.max(-45, Math.min(45, tilt));
  const volume = (tilt + 45) / 90;
  audio.volume = volume;
  fill.style.width = (volume * 100) + "%";
});
