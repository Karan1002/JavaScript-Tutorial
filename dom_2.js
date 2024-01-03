let div = document.querySelector("div");
console.log(div);
div.style.backgroundColor = "red";
div.style.backgroundColor = "green";

let btn = document.createElement("button");
btn.innerText = "Submit";
console.log(btn);

div.append(btn);
div.prepend(btn);
div.before(btn);
div.after(btn);
