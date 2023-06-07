let food1 = document.getElementById('food1');
let food2 = document.getElementById('food2');
let right = document.getElementById('right');

food1.addEventListener("click",()=>{
    right.style.backgroundImage = "url('food1.png')";
})
food2.addEventListener("click",()=>{
    right.style.backgroundImage = "url('food.jpg')";
})