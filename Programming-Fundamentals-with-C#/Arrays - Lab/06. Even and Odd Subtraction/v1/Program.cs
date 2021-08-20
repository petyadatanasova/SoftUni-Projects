using System;
using System.Linq;

namespace _06._Even_and_Odd_Subtraction
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int sumEven = 0;
            int sumOdd = 0;

            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] % 2 == 0) //Even
                {
                    sumEven += numbers[i];
                }
                else //Odd
                {
                    sumOdd += numbers[i];
                }
            }
            int difference = sumEven - sumOdd;
            Console.WriteLine($"{difference}");
        }
    }
}
