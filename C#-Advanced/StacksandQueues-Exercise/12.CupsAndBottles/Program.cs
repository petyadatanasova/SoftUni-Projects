using System;
using System.Collections.Generic;
using System.Linq;

namespace _12.CupsAndBottles
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<int> cups = new Queue<int>(Console.ReadLine().Split().Select(int.Parse).ToArray());
            Stack<int> bottles = new Stack<int>(Console.ReadLine().Split().Select(int.Parse).ToArray());
            int wastedWater = 0;

            while (cups.Count>0 && bottles.Count>0)
            {
                int currentCup = cups.Peek();
                
                while (currentCup > 0)
                {
                    int currentBottle = bottles.Pop();
                    if (currentCup <= currentBottle)
                    {
                        wastedWater += currentBottle - currentCup;
                        cups.Dequeue();
                        currentCup = 0;
                    }
                    else if (currentCup>currentBottle)
                    {
                        currentCup -= currentBottle;
                        
                    }
                 }
            }
            if(cups.Count>0 && bottles.Count<=0)
            {
                Console.WriteLine($"Cups: {string.Join(" ", cups)}");
            }
            else if (cups.Count<=0 && bottles.Count>0)
            {
                Console.WriteLine($"Bottles: {string.Join(" ", bottles)}");
            }
            Console.WriteLine($"Wasted litters of water: {wastedWater}");
        }
    }
}
