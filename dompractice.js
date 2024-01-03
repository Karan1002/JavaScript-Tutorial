let body = document.querySelector("body");

let btn = document.createElement("button");
btn.innerText = "Click me";
btn.style.backgroundColor = "Red";
btn.style.color = "White";

body.prepend(btn);

let para = document.querySelector("p");
console.log(para);
para.classList.add("newClassP");
