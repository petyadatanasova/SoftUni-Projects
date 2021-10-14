using System;
using System.Collections.Generic;
using System.Linq;

namespace _09.ListOfPredicates
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            HashSet<int> dividers = Console.ReadLine().Split().Select(int.Parse).ToHashSet();

            List<int> numbers = new List<int>();

            for (int i = 1; i <= n; i++)
            {
                numbers.Add(i);
            }

            Func<int, int, bool> filter = (number, divider) => number % divider == 0;
            //bool isTrue = true;
            List<int> filteredNums = new List<int>();
            foreach (var number in numbers)
            {
                bool isTrue = true;
                foreach (var divider in dividers)
                {
                    if(filter(number, divider))
                    {
                        continue;
                    }
                    else
                    {
                        isTrue = false;
                        break;
                    }
                    
                }
                if(isTrue)
                {
                    filteredNums.Add(number);
                }
            }
            Console.WriteLine(string.Join(" ", filteredNums));
        }
    }
}
