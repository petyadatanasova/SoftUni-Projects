using System;
using System.Collections.Generic;
using System.Linq;

namespace _06.ReverseAndExclude
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList();
            int divisible = int.Parse(Console.ReadLine());

            Func<int, int, bool> func = (n, d) => n % d != 0;
            List<int> filterederNum = numbers.Where(x => func(x, divisible)).Reverse().ToList();
            Console.WriteLine(string.Join(" ",filterederNum));
        }
    }
}
