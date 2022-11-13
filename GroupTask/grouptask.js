// task 1
// function sum (a,b){
// let sum = a + b;
// console.log("sum of two numbers: " + sum);
// }
// sum(3, 5)


// task 2
// function shshs (a,b){
//     let sum = a + b;
//     let mp = a * b;
//     let dv = a - b;
//     let sb = a / b;
//     console.log("sum of two numbers: " + sum);
//     console.log("mp of two numbers: " + mp);
//     console.log("dv of two numbers: " + dv);
//     console.log("sb of two numbers: " + sb);
//     }
//     shshs(3, 5)


// task 3
// function calculator (a, b, operation){
//     let sum = a + b
//     let multiplay = a * b;
//     let division = a - b;
//     let subtr = a / b;
// if(operation == "sum"){
//     console.log(sum);
// }
// else if(operation == "multiplay"){
//     console.log(multiplay);
// }
// else if( operation == "division"){
//     console.log(division);
// }
// else {
//     console.log(subtr);
// }
// }
// calculator(49, 4, "subtr")


// task 4 

// let btn = document.querySelector(".btn")
// let input = document.querySelector(".input")

// btn.addEventListener('click', function(){
//     if (input.value === ""){
//         alert("something write ")
//     }
//     else {
//         console.log(input.value);
//         input.value = ""
//     }   
// });


// task 5 bos inputa o biri inputun deyerini elave etmek
// let btn = document.querySelector(".btn")
// let input = document.querySelector(".input")
// let input1 = document.querySelector(".input1")

// btn.addEventListener('click', function(){
//     if (input.value === ""){
//         alert("something write ")
//     }
//     else {
//         input1.value = input.value
//         console.log(input1);
//         input.value = ""
//     }   
// });


// task 6 kalkulyator
// let btn = document.querySelector(".btn")
// let btn1 = document.querySelector(".btn1")
// let btn2 = document.querySelector(".btn2")
// let btn3 = document.querySelector(".btn3")
// let number1 = document.querySelector(".number1")
// let number2 = document.querySelector(".number2")
// let answer = document.querySelector(".answer")


// btn.addEventListener('click', function(){

//     console.log(answer.textContent = Number(number1.value) + Number(number2.value));
// })

// btn1.addEventListener('click', function(){
//     console.log(answer.textContent = number1.value - number2.value);
// })

// btn2.addEventListener('click', function(){
//     console.log(answer.textContent = number1.value * number2.value);
// })

// btn3.addEventListener('click', function(){
//     console.log(answer.textContent = number1.value / number2.value);
// })


// task 7
let btn = document.querySelector(".btn")
let inputEl = document.querySelector(".inputEl")
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")


btn.addEventListener('click', function () {
    input2.value = input1.value;
    console.log(input2);
    input2.style.color = inputEl.value

})
