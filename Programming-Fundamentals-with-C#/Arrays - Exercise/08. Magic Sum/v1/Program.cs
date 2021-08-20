using System;
using System.Linq;

namespace _08._Magic_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int expectedSum = int.Parse(Console.ReadLine());

            for (int i = 0; i < arr.Length-1; i++)
            {
                for (int j = i+1; j < arr.Length; j++)
                {
                    if ((arr[i]+arr[j])==expectedSum)
                    {

                        Console.WriteLine($"{arr[i]} {arr[j]}");
                    }
                }
            }






        }
    }
}
