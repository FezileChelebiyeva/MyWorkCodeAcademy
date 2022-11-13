// 1. Ayın adlarına uyğun olaraq neçə gündən ibarət olması

// let month = "April";

//     switch(month){
//         case "January": console.log("January has 31 days")
//         break;
//         case "February": console.log("February 28 days")
//         break;
//         case "March": console.log("March has 31 days")
//         break;
//         case "April": console.log("April has 30 days")
//         break;
//         case "May": console.log("May has 31 days")
//         break;
//         case "June": console.log("June has 30 days")
//         break;
//         case "July": console.log("July has 31 days")
//         break;
//         case "August": console.log("August has 31 days")
//         break;
//         case "September": console.log("September has 30 days")
//         break;
//         case "October": console.log("October has 31 days")
//         break;
//         case "November": console.log("November has 30 days")
//         break;
//         case "December": console.log("December has 31 days")
//         break;
//         default: console.log("this is not months")
//         }



// 2. 3 ədəd içindən cəmləri ən böyük olan 2 ədədi qaytarmaq

// let a = 28;
// let b = 83;
// let c = 78;

// if(a+b>b+c && a+b>a+c)
// {
//     console.log(a+" "+b)
// }
// else if(b+c>b+a && b+c>a+c)
// {
//     console.log(b+" "+c)
// }
// else if(a+c>b+c && a+c>a+b)
// {
//     console.log(c+" "+a)
// }



// 3. 3 ədəd verilib. Bu ədədləri artan və azalan sıra ilə düzün.
//azalan sıra
// let a = 6;
// let b = 7;
// let c = 8;

// if (a > b && a > c) {
//     if (b > c) { 
//         console.log(a+" "+b+" "+c);
//     } else {
//         console.log(a+" "+c+" "+b) 
//         }
//     } 
// else if (b > c && b > a) {
//     if (c > a) {
//         console.log(b+" "+c+" "+a); 
//     }     
//     else {
//         console.log(b+" "+a+" "+c) 
//         }
//     }
// else {
//     if(a > b){
//         console.log(c+" "+a+" "+b);
//       }
//      else{
//         console.log(c+" "+b+" "+a);
//         }
//     }
   

//artan sıra
// let a = 6;
// let b = 9;
// let c = 10;

// if (a < b && a < c) {
//     if (b < c) { 
//         console.log(a+" "+b+" "+c);
//     } else {
//         console.log(a+" "+c+" "+b) 
//         }
//     } 
// else if (b < c && b < a) {
//     if (c < a) {
//         console.log(b+" "+c+" "+a); 
//     }     
//     else {
//         console.log(b+" "+a+" "+c) 
//         }
//     }
// else {
//     if(a < b){
//         console.log(c+" "+a+" "+b);
//       }
//      else{
//         console.log(c+" "+b+" "+a);
//         }
//     }



// 4. 3 ədəd verilib. Bu ədədlərin birləşməsindən yaranan ən böyük və ən kiçik 3 rəqəmli ədədi tapan proqram
// sehv var
// let a = 2
// let b = 9
// let c = 8
// let max;
// let min;
// if(a > b && b > c && a > c){
//     max = a*100+b*10+c
//     min = c*100+b*10+a
//         console.log("max: " + max)
//         console.log("min: " + min) 
//     if(c > b) {
//     max = a*100+c*10+b
//     min = b*100+c*10+a
//         console.log("max: " + max)
//         console.log("min: " + min)
//     }
// }
// else if(b > a && b > c && c > a){
//     max = b*100+c*10+a
//     min = a*100+c*10+b
//         console.log("max: " + max)
//         console.log("min: " + min)
//     if(a > c){
//         max = b*100+a*10+c
//         min = c*100+a*10+b
//             console.log("max: " + max)
//             console.log("min: " + min)
//     }
// }
// else if(c > a && c > b && a > b) {
//     max = c*100+a*10+b
//     min = b*100+a*10+c
//         console.log("max: " + max)
//         console.log("min: " + min)
// }
// else {
//     max = c*100+b*10+a
//     min = a*100+b*10+c
//         console.log("max: " + max)
//         console.log("min: " + min)
// }



// 5. 3 rəqəmli hər hansı bir ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram
// let a = 996;

// let first = (a / 100) - (a % 100)/100;
// let second = (a % 100) / 10 - (a%10)/10;
// let third = (a % 100) - second * 10;

// console.log(first + ", " + second + ", " + third);



// 6. Proqrama daxil edilən məlumatın ədəd və ya  hərf, simvol olduğunu təyin edən proqram

// let info = 2


// if(info = typeof(info) === "number")
// {
//         console.log("Daxil edilən məlumat rəqəmdir");
// }
// else 
// {
//         console.log("Daxil edilən məlumat hərf və ya simvoldur");
// }



// 7. Düzbucaqlı üçbucağın katetləri və hipotenuzunun uzunluğu verilib. 
//    Verilən məlumatlara əsəsən bu üçbucağın düzbucaqlı üçbucaq olub olmadığını yoxlayan proqram 

// let a = 6
// let b = 8
// let c = 10
// if(a**2+b**2==c**2){
//      console.log("düzbucaqlı üçbucaqdır")
// }
// else{
//     console.log("düzbucaqlı üçbucaq deyil")
// }



// 8. Proqrama il, ay, gün adında məlumat daxil edilir. 
//    Daxil edilən məlumatın yaşadığımız ilə kimi olan tarix formatına uğun olub olduğunu təyin edən proqram

// let day = 04
// let month = 12
// let year = 2002

// if(day <= 31 && month <= 12 && year <= 2022 ){
//     console.log(day+"."+month+"."+year)
// }
// else {
//     console.log("Tarix uyğun deyil")
// }