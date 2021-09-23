using System;
using System.Collections.Generic;
using System.Linq;

namespace _3.SimpleCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string>equation = Console.ReadLine().Split().Reverse().ToList();
            Stack<string> nums = new Stack<string>();
            foreach (var item in equation)
            {
                nums.Push(item);
            }
            while (nums.Count>1)
            {
                int a = int.Parse(nums.Pop());
                string @operator = nums.Pop();
                int b = int.Parse(nums.Pop());

                nums.Push(@operator == "+" ? (a + b).ToString() : (a - b).ToString());  
            }
            Console.WriteLine(nums.Pop());
        }
    }
}
