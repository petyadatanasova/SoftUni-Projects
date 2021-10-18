using System;
using System.Collections.Generic;
using System.Linq;

namespace WarmWinter
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack<int> hats = new Stack<int>();
            Queue<int> scarves = new Queue<int>();

            int[] hatsInput = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int[] scarvesInput = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            List<int> sets = new List<int>();
            for (int i = 0; i < hatsInput.Length; i++)
            {
                hats.Push(hatsInput[i]);
            }
            for (int i = 0; i < scarvesInput.Length; i++)
            {
                scarves.Enqueue(scarvesInput[i]);
            }
            int mostExpensiveSet = int.MinValue;
            int increment = 0;
            while (hats.Any() && scarves.Any())
            {
                int currentHat = hats.Peek()+increment;
                int currentScarf = scarves.Peek();

                if(currentHat>currentScarf)
                {
                    sets.Add(currentHat + currentScarf);
                    hats.Pop();
                    scarves.Dequeue();
                    if(currentHat+currentScarf>mostExpensiveSet)
                    {
                        mostExpensiveSet = currentHat + currentScarf;
                    }
                    increment = 0;
                    continue;
                }
                else if (currentHat < currentScarf)
                {
                    hats.Pop();
                    increment = 0;
                    continue;

                }
                else
                {
                    scarves.Dequeue();
                    increment++;
                }
            }
            Console.WriteLine($"The most expensive set is: {mostExpensiveSet}");
            Console.WriteLine(string.Join(" ", sets));
        }
    }
}
