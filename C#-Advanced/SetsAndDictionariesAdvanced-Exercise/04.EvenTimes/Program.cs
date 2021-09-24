using System;
using System.Collections.Generic;

namespace _04.EvenTimes
{
    class Program
    {
        public static object Distionary { get; private set; }

        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Dictionary<int, int> numbers = new Dictionary<int, int>();
            for (int i = 0; i < n; i++)
            {
                int input = int.Parse(Console.ReadLine());

                if(!numbers.ContainsKey(input))
                {
                    numbers.Add(input, 0);

                }
                numbers[input]++;
            }
            foreach (var number in numbers)
            {
                if(number.Value%2==0)
                {
                    Console.Write($"{number.Key} ");
                }
            }
        }
    }
}
