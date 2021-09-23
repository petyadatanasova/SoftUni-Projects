using System;
using System.Collections.Generic;
using System.Linq;

namespace _2.StackSum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();
            Stack<int> nums = new Stack<int>();

            foreach (var num in numbers)
            {
                nums.Push(num);
            }
            string [] command = Console.ReadLine().ToLower().Split();
            while (command[0]!="end")
            {
                if(command[0]=="add")
                {
                    int firstNum = int.Parse(command[1]);
                    int secondNum = int.Parse(command[2]);

                    nums.Push(firstNum);
                    nums.Push(secondNum);


                }
                else if (command[0]=="remove")
                {
                    int numCount = int.Parse(command[1]);
                    if(numCount <= nums.Count)
                    {
                        for (int i = 0; i < numCount; i++)
                        {
                            nums.Pop();
                        }
                    }
                }
                command = Console.ReadLine().ToLower().Split();
            }
            int sum = 0;
            if (nums.Count > 0)
            {
                while (nums.Count > 0)
                {
                    sum += nums.Pop();
                }
            }
            Console.WriteLine("Sum: "+sum);
        }
    }
}
