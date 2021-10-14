using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.FindEvensOrOdds
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            List<int> numbers = new List<int>();
           
            for (int i = nums[0]; i <= nums[1]; i++)
            {
                numbers.Add(i);
            }
            string filter = Console.ReadLine();
            Predicate<int> predicate = p => true;
            if (filter=="even")
            {
                predicate = p => p % 2 == 0;
            }
            else if (filter=="odd")
            {
                predicate = p => p % 2 != 0;
            }
            Console.WriteLine(string.Join(" ", numbers.FindAll(predicate)));

            //List<int> newNumbers = new List<int>();
            //foreach (var num in numbers)
            //{
            //    if(predicate(num))
            //    {
            //        newNumbers.Add(num);
            //    }
            //}
            //Console.WriteLine(string.Join(" ", newNumbers));

        }
    }
}
