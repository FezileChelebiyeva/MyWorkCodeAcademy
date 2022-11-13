let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let number1 = document.querySelector(".number1");
let number2 = document.querySelector(".number2");
let result = document.querySelector(".result");


btn.addEventListener('click', function(){
    console.log(result.textContent = +number1.value + +number2.value); 
    //console.log(result.textContent = Number(number1.value) + Number(number2.value)); 
}) ;

btn1.addEventListener('click', function(){
    console.log(result.textContent = number1.value - number2.value); 
}) ;

btn2.addEventListener('click', function(){
    console.log(result.textContent = number1.value * number2.value); 
}) ;

btn3.addEventListener('click', function(){
    console.log(result.textContent = number1.value / number2.value); 
}) ;