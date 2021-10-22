using System;
using System.Collections.Generic;
using System.Linq;

namespace LootBox
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<int> firstBox = new Queue<int>();
            Stack<int> secondBox = new Stack<int>();
            int[] firstInput = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int[] secondInput = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int collection = 0;

            for (int i = 0; i < firstInput.Length; i++)
            {
                firstBox.Enqueue(firstInput[i]);
            }
            for (int i = 0; i < secondInput.Length; i++)
            {
                secondBox.Push(secondInput[i]);
            }

            while (firstBox.Any() && secondBox.Any())
            {
                int firstItem = firstBox.Peek();
                int secondItem = secondBox.Pop();

                int sum = firstItem + secondItem;
                if(sum%2==0)
                {
                    firstBox.Dequeue();
                    collection += sum;

                }
                else
                {
                    firstBox.Enqueue(secondItem);
                }
            }
            if(firstBox.Count==0)
            {
                Console.WriteLine("First lootbox is empty");
            }
            else if (secondBox.Count==0)
            {
                Console.WriteLine("Second lootbox is empty");
            }

            if(collection>=100)
            {
                Console.WriteLine($"Your loot was epic! Value: {collection}");
            }
            else
            {
                Console.WriteLine($"Your loot was poor... Value: {collection}");
            }
        }
    }
}
