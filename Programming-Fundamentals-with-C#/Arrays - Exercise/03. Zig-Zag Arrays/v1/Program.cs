using System;
using System.Linq;

namespace _03._Zig_Zag_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberLines = int.Parse(Console.ReadLine());

            int[] firstArray = new int[numberLines];
            int[] secondArray = new int[numberLines];

            for (int i = 0; i < numberLines; i++)
            {
                int[] numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();



                if (i % 2 == 1)
                {
                    firstArray[i] = numbers[1];
                    secondArray[i] = numbers[0];
                }
                else
                {
                    firstArray[i] = numbers[0];
                    secondArray[i] = numbers[1];
                }

            }
            Console.WriteLine(string.Join(" ", firstArray));
            Console.WriteLine(string.Join(" ", secondArray));

        }
    }
}
