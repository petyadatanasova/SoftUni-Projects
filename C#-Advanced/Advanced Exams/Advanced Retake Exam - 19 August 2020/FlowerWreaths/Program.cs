using System;
using System.Collections.Generic;
using System.Linq;

namespace FlowerWreaths
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack<int> lilies = new Stack<int>(Console.ReadLine().Split(", ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            Queue<int> roses = new Queue<int>(Console.ReadLine().Split(", ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            int wreathsCount = 0;
            int storedFlowers = 0;

            while (lilies.Any() && roses.Any())
            {
                int lily = lilies.Pop();
                int rose = roses.Peek();

                if(lily+rose==15)
                {
                    wreathsCount++;
                    roses.Dequeue();
                }
                else if (lily + rose >15)
                {
                    lily -= 2;
                    lilies.Push(lily);
                }
                else
                {
                    storedFlowers += lily + rose;
                    roses.Dequeue();
                }

            }

            int additionalWreaths = storedFlowers / 15;

            wreathsCount += additionalWreaths;

            if(wreathsCount>=5)
            {
                Console.WriteLine($"You made it, you are going to the competition with {wreathsCount} wreaths!");
            }
            else
            {
                Console.WriteLine($"You didn't make it, you need {5-wreathsCount} wreaths more!");
            }
        }
    }
}
