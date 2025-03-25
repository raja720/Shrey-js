let tl = gsap.timeline();

tl.from(".logo", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  delay: 0.3,
});
tl.from("li", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});
let button = document.querySelector(".home");
let menu = document.querySelector(".main");
let a = 0;
button.addEventListener("click", function () {
  if (a == 0) {
    menu.style.display = "none";
    a = 1;
  } else {
    menu.style.display = "block";
    a = 0;
  }
});
