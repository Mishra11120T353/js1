let heading = document.getElementById("heading");
let btn = document.getElementById("btn");
let countText = document.getElementById("count") 
let count = 0;


btn.addEventListener("click" , function(){

//For Count The Clicks.
count++;
countText.textContent = "You Clicked "+count+" Times.";

//For Adding some scale animation.
btn.classList.add("scale");

setTimeout(function(){
 btn.classList.remove("scale");
}, 200)

//For the color  gradient effect.
let gradients =[
"linear-gradient(135deg, #667eea, #764ba2)",
"linear-gradient(135deg, #ff6a00, #ee0979)",
"linear-gradient(135deg, #11998e, #38ef7d)",
"linear-gradient(135deg, #fc466b, #3f5efb)",
"linear-gradient(135deg, #f7971e, #ffd200)"
];
let randomGradient = Math.floor(Math.random()*gradients.length);
document.body.style.background = gradients[randomGradient];



//For random thoughts.
let toughts =["Small steps every day lead to big results.🚀",
"Dream big, start small, stay consistence.💪",
"Sucess begins with self-belief.✨",
"Your only limit is your mindset.🧠",
"Make today so awesome that yesterday gets jealous.🔥"];
let rondomToughts = Math.floor(Math.random()*toughts.length);
heading.textContent= toughts[rondomToughts];

//For Background color change on click.
let textColors =["white", "black", "white", "black"];
let randomIndex = Math.floor(Math.random() * textColors.length);
heading.style.color = textColors[randomIndex];

//Animation for the random text or Quote's.
heading.classList.remove("animate");
void heading.offsetWidth;
heading.classList.add("animate");


});