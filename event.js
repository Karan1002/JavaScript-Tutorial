let btn = document.querySelector("#btn3");
console.log(btn);
btn.onclick = () => {
  let a = 26;
  a++;
  console.log("Hello" + a);
};

let mod = "light";
let modBtn = document.querySelector("#mod");
let body = document.querySelector("body");
modBtn.addEventListener("click", () => {
  if (mod === "light") {
    mod = "dark";
    // document.querySelector("body").style.backgroundColor = "black";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    mod = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(mod);
});
