const hover0 = document.getElementById("hover0");
const hover1 = document.getElementById("hover1");
hover0.addEventListener("mousemove", (event) => {
  const destination = document.getElementById("destination1");
  destination.textContent = "x: " + event.offsetX + ", y: " + event.offsetY;
});
hover1.addEventListener("mousemove", (event) => {
  const destination = document.getElementById("destination0");
  destination.textContent = "x: " + event.offsetX + ", y: " + event.offsetY;
});
