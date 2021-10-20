using System;
using System.Collections.Generic;
using System.Linq;

namespace Scheduling
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack<int> tasks = new Stack<int>(Console.ReadLine().Split(", ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            Queue<int> threads = new Queue<int>(Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            int taskToKill = int.Parse(Console.ReadLine());

            bool hasBeenKilled = false;
            int thread = 0;
            while (true)
            {
                int task = tasks.Peek();
                 thread = threads.Dequeue();
                if(task==taskToKill)
                {
                    break;
                }
                if (task <= thread)
                {
                    tasks.Pop();
                }
                

            }
            Console.WriteLine($"Thread with value {thread} killed task {taskToKill}");

            Console.WriteLine($"{thread} {string.Join(" ",threads)}");





        }
    }
}
