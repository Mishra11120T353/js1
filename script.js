let heading = document.getElementById("heading");
let btn = document.getElementById("btn");

heading.style.color="brown";

btn.addEventListener("click" , function(){
let colors =["red" , "blue", "green", "yellow", "pink", "black"];
let randomIndex = Math.floor(Math.random() * colors.length);
document.body.style.backgroundColor = colors[randomIndex];
heading.textContent="I'm Back."
heading.classList.remove("animate");
void heading.offsetWidth;
heading.classList.add("animate");

});