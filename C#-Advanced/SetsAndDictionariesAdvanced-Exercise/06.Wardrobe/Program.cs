using System;
using System.Collections.Generic;

namespace _06.Wardrobe
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Dictionary<string, Dictionary<string, int>> clothes = new Dictionary<string, Dictionary<string, int>>();
            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(" -> ", StringSplitOptions.RemoveEmptyEntries);
                string color = input[0];
                string[] clothesSet = input[1].Split(",");
                if(!clothes.ContainsKey(color))
                {
                    clothes.Add(color, new Dictionary<string, int>());
                }
                for (int j= 0; j < clothesSet.Length; j++)
                {
                    if(!clothes[color].ContainsKey(clothesSet[j]))
                    {
                        clothes[color].Add(clothesSet[j], 0);
                    }
                    clothes[color][clothesSet[j]]++;
                }
            }
            string[] clothesToFind = Console.ReadLine().Split();
            string colour = clothesToFind[0];
            string clothesPiece = clothesToFind[1];

            foreach (var item in clothes)
            {
                if(item.Key==colour)
                {
                    Console.WriteLine($"{item.Key} clothes:");
                    foreach (var set in item.Value)
                    {
                        if(set.Key==clothesPiece)
                        {
                            Console.WriteLine($"* {set.Key} - {set.Value} (found!)");
                        }
                        else
                        {
                            Console.WriteLine($"* {set.Key} - {set.Value}");
                        }
                    }
                }
                else
                {
                    Console.WriteLine($"{item.Key} clothes:");
                    foreach (var set in item.Value)
                    {
                        Console.WriteLine($"* {set.Key} - {set.Value}");
                    }

                }
            }

        }
    }
}
