using System;

namespace _03._Rounding_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            string values = Console.ReadLine();
            string[] items = values.Split();
            double[] numbers = new double[items.Length];
            for (int i = 0; i < items.Length; i++)
            { 
               numbers[i] = double.Parse(items[i]);

                if (numbers[i] == 0)
                {
                    numbers[i] = 0;
                }
                Console.WriteLine($"{numbers[i]} => {(int)Math.Round(numbers[i], MidpointRounding.AwayFromZero)}");
            }
        }
    }
}
