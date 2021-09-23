using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.FastFood
{
    class Program
    {
        static void Main(string[] args)
        {
            int totalFood = int.Parse(Console.ReadLine());

            Queue<int> orders = new Queue<int>(Console.ReadLine().Split().Select(int.Parse).ToArray());
            int biggestOrder = orders.Max();

            while (orders.Count>0)
            {
                if(orders.Peek()<=totalFood)
                {
                    totalFood -= orders.Peek();
                    
                    orders.Dequeue();
                }
                else
                {
                    break;
                }

            }
            Console.WriteLine(biggestOrder);
            if(orders.Count<=0)
            {
                Console.WriteLine("Orders complete");
            }
            else
            {
                Console.WriteLine($"Orders left: {string.Join(" ",orders)}");
            }
        }
    }
}
