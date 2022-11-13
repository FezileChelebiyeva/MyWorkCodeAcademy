// 1. Ayın adlarına uyğun olaraq neçə gündən ibarət olması

//string month = "april";

//switch (month)
//{
//    case "january":
//        Console.WriteLine("january has 31 days");
//         break;
//    case "february":
//        Console.WriteLine("february 28 days");
//         break;
//    case "march":
//        Console.WriteLine("march has 31 days");
//         break;
//    case "april":
//        Console.WriteLine("april has 30 days");
//         break;
//    case "may":
//        Console.WriteLine("may has 31 days");
//         break;
//    case "june":
//        Console.WriteLine("june has 30 days");
//         break;
//    case "july":
//        Console.WriteLine("july has 31 days");
//         break;
//    case "august":
//        Console.WriteLine("august has 31 days");
//         break;
//    case "september":
//        Console.WriteLine("september has 30 days");
//         break;
//    case "october":
//        Console.WriteLine("october has 31 days");
//         break;
//    case "november":
//        Console.WriteLine("november has 30 days");
//         break;
//    case "december":
//        Console.WriteLine("december has 31 days");
//         break;
//    default:
//        Console.WriteLine("this is not months");
//        break;
//         }



// 2. 3 ədəd içindən cəmləri ən böyük olan 2 ədədi qaytarmaq

//int a = 28;
//int b = 83;
//int c = 78;

//if (a + b > b + c && a + b > a + c)
//{
//    Console.WriteLine(a + " " + b);
// }
//else if (b + c > b + a && b + c > a + c)
//{
//    Console.WriteLine(b + " " + c);
// }
//else if (a + c > b + c && a + c > a + b)
//{
//    Console.WriteLine(c + " " + a);
// }



// 3. 3 ədəd verilib. Bu ədədləri artan və azalan sıra ilə düzün.

//azalan sıra

//int a = 6;
//int b = 7;
//int c = 8;

//if (a > b && a > c)
//{
//    if (b > c)
//    {
//        Console.WriteLine(a + " " + b + " " + c);
//    }
//    else
//    {
//        Console.WriteLine(a + " " + c + " " + b);
//         }
//}
//else if (b > c && b > a)
//{
//    if (c > a)
//    {
//        Console.WriteLine(b + " " + c + " " + a);
//    }
//    else
//    {
//        Console.WriteLine(b + " " + a + " " + c);
//         }
//}
//else
//{
//    if (a > b)
//    {
//        Console.WriteLine(c + " " + a + " " + b);
//    }
//    else
//    {
//        Console.WriteLine(c + " " + b + " " + a);
//    }
//}


//artan sıra
//int a = 6;
//int b = 9;
//int c = 10;

//if (a < b && a < c)
//{
//    if (b < c)
//    {
//        Console.WriteLine(a + " " + b + " " + c);
//    }
//    else
//    {
//        Console.WriteLine(a + " " + c + " " + b);
//         }
//}
//else if (b < c && b < a)
//{
//    if (c < a)
//    {
//        Console.WriteLine(b + " " + c + " " + a);
//    }
//    else
//    {
//        Console.WriteLine(b + " " + a + " " + c);
//         }
//}
//else
//{
//    if (a < b)
//    {
//        Console.WriteLine(c + " " + a + " " + b);
//    }
//    else
//    {
//        Console.WriteLine(c + " " + b + " " + a);
//    }
//}



// 4. 3 ədəd verilib. Bu ədədlərin birləşməsindən yaranan ən böyük və ən kiçik 3 rəqəmli ədədi tapan proqram

//int a = 2;
//int b = 9;
//int c = 8;
//int max;
//int min;
//if (a > b && b > c && a > c)
//{
//        max = a * 100 + b * 10 + c;
//     min = c * 100 + b * 10 + a;
//         Console.WriteLine("max: " + max);
//         Console.WriteLine("min: " + min);
//     if (c > b)
//    {
//      max = a * 100 + c * 10 + b;
//      min = b * 100 + c * 10 + a;
//        Console.WriteLine("max: " + max);
//        Console.WriteLine("min: " + min);
//     }
//}
//else if (b > a && b > c && c > a)
//{
//     max = b * 100 + c * 10 + a;
//     min = a * 100 + c * 10 + b;
//        Console.WriteLine("max: " + max);
//        Console.WriteLine("min: " + min);
//     if (a > c)
//    {
//      max = b * 100 + a * 10 + c;
//      min = c * 100 + a * 10 + b;
//         Console.WriteLine("max: " + max);
//         Console.WriteLine("min: " + min);
//     }
//}
//else if (c > a && c > b && a > b)
//{
//      max = c * 100 + a * 10 + b;
//      min = b * 100 + a * 10 + c;
//         Console.WriteLine("max: " + max);
//         Console.WriteLine("min: " + min);
// }  
//else
//{
//    max = c * 100 + b * 10 + a;
//    min = a * 100 + b * 10 + c;
//         Console.WriteLine("max: " + max);
//         Console.WriteLine("min: " + min);
// }



// 5. 3 rəqəmli hər hansı bir ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram

//int a = 273;

//int first = a / 100;
//int second = (a % 100) / 10;
//int third = (a % 100) - second * 10;

//Console.WriteLine(first + ", " + second + ", " + third);



// 6. Proqrama daxil edilən məlumatın ədəd və ya  hərf, simvol olduğunu təyin edən proqram

// ədəd
//int a = 32;

//if (a.GetType() == typeof(int))
//{
//    Console.WriteLine("Daxil edilən məlumat rəqəmdir");
//}

// hərf
//string b = "a";

//if (b.GetType() == typeof(string))
//{
//    Console.WriteLine("Daxil edilən məlumat hərf və ya simvoldur");
//}

// simvol
//string c = "/";

//if (c.GetType() == typeof(string))
//{
//    Console.WriteLine("Daxil edilən məlumat hərf və ya simvoldur");
//}



// 7. Düzbucaqlı üçbucağın katetləri və hipotenuzunun uzunluğu verilib. 
//    Verilən məlumatlara əsəsən bu üçbucağın düzbucaqlı üçbucaq olub olmadığını yoxlayan proqram 

//using System;
//int a = 6;
//int b = 8;
//int c = 10;

//if (a*a + (b*b) == (c*c)) {
//    Console.WriteLine("düzbucaqlı üçbucaqdır");
//}
//else {
//    Console.WriteLine("düzbucaqlı üçbucaq deyil");
//}



// 8. Proqrama il, ay, gün adında məlumat daxil edilir. 
//    Daxil edilən məlumatın yaşadığımız ilə kimi olan tarix formatına uğun olub olduğunu təyin edən proqram

//int day = 04;
//int month = 12;
//int year = 2002;

// if(day <= 31 && month <= 12 && year <= 2022 ){
//    Console.WriteLine(day + "." + month + "." + year);
// }
// else
//{
//    Console.WriteLine("Tarix uyğun deyil");
// }