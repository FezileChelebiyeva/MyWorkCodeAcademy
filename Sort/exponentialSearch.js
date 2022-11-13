let arr = [2, 3, 4, 10, 40 ];
let n = arr.length;
let x = 10;
let i = 1;
while (i < n && arr[i] <= x)
    i = i * 2;

let min = Math.floor(i / 2);
let max = arr.length - 1;
let mid;
while (max - min > 1)
{
    mid = (max + min) / 2;
    if (arr[mid] < x)
    {
        min = mid + 1;
    }
    else
    {
        max = mid;
    }
}
if (arr[min] == x)
{
    console.log("Found At Index " + min);
}
else if (arr[max] == x)
{
    console.log("Found At Index " + max);
}
else
{
    console.log("Not Found");
}