using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.SetsOfElements
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int n = nums[0];
            int m = nums[1];
            HashSet<int> firstSet = new HashSet<int>();
            HashSet<int> secondSet = new HashSet<int>();
            for (int i = 0; i < n; i++)
            {
                int input = int.Parse(Console.ReadLine());
                firstSet.Add(input);
            }
            for (int i = 0; i < m; i++)
            {
                int input = int.Parse(Console.ReadLine());
                secondSet.Add(input);
            }
            HashSet<int> sets = new HashSet<int>();
            //foreach (var item in firstSet)
            //{
            //    if(secondSet.Contains(item))
            //    {
            //        sets.Add(item);
            //    }
            //}
            List<int> numbers = firstSet.Intersect(secondSet).ToList();
            Console.WriteLine(string.Join(" ", numbers));
        }
    }
}
