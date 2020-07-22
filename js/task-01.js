const refs = {
  body: document.querySelector("body"),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

refs.btnStart.addEventListener("click", () => {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
  toChangeColor();
});
refs.btnStop.addEventListener("click", () => {
  refs.btnStop.disabled = true;
  refs.btnStart.disabled = false;
  stopToChange();
});

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let interval;

function toChangeColor() {
  interval = setInterval(() => {
    const color = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[color];
  }, 1000);
}

function stopToChange() {
  clearInterval(interval);
}
