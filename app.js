// console.log("hello world");
const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const randomBg = () => {
  return `hsl(${Math.floor(Math.random() * 360 + 1)},100%, 50%)`;
};
btn.addEventListener("click", () => {
  body.style.background = randomBg();
});
