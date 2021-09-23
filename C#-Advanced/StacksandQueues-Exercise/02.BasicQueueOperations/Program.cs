using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.BasicQueueOperations
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] commands = Console.ReadLine().Split().Select(int.Parse).ToArray();
            Queue<int> input = new Queue<int>(Console.ReadLine().Split().Select(int.Parse).ToArray());

            int toDequeue = commands[1];
            int toLookFor = commands[2];

            for (int i = 0; i < toDequeue; i++)
            {
                input.Dequeue();
            }

            if(input.Count>0)
            {
                Console.WriteLine(input.Contains(toLookFor) ? "true" : $"{input.Min()}");
            }
            else
            {
                Console.WriteLine("0");
            }
        }
    }
}
