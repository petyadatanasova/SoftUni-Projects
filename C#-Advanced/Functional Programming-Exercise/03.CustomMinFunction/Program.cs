using System;
using System.Linq;

namespace _03.CustomMinFunction
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
                int minNum = int.MaxValue;
            Func<int,int, bool> smallestNum = (p, y) => p < y;
            foreach (var num in numbers)
            {
                if(smallestNum(num, minNum))
                {
                    minNum = num;
                }
            }
            Console.WriteLine(minNum);
        }
    }
}
