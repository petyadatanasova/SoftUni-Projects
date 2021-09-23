using System;
using System.Collections.Generic;
using System.Linq;

namespace _03.MaximumandMinimumElement
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            Stack<int> stack = new Stack<int>();
            for (int i = 0; i < num; i++)
            {
                int[] commands = Console.ReadLine().Split().Select(int.Parse).ToArray();

                if(commands[0]== 1)
                {
                    stack.Push(commands[1]);
                }
                else if (commands[0] == 2)
                {
                    if (stack.Count > 0)
                    {
                        stack.Pop();
                    }
                }
                else if (commands[0] == 3)
                {
                    if (stack.Count > 0)
                    {
                        Console.WriteLine(stack.Max());
                    }
                    
                }
                else if (commands[0] == 4)
                {
                    if (stack.Count > 0)
                    {
                        Console.WriteLine(stack.Min());
                    }
                   
                }
            }
            Console.WriteLine(string.Join(", ", stack));
        }
    }
}
