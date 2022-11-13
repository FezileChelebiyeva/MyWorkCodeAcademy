//See https://aka.ms/new-console-template for more information

using System;
class Program
{
    public static void Main()
    {
        int[] arr = { 2, 3, 4, 10, 40 };
        int n = arr.Length;
        int x = 2;
        int i = 1;
        while (i < n && arr[i] <= x)
            i = i * 2;

        int min = i / 2;
        int max = arr.Length - 1;
        int mid;
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
            Console.WriteLine("Found At Index " + min);
        }
        else if (arr[max] == x)
        {
            Console.WriteLine("Found At Index " + max);
        }
        else
        {
            Console.WriteLine("Not Found");
        }
    }
}