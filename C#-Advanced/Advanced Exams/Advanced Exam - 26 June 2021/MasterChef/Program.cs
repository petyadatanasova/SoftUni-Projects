using System;
using System.Collections.Generic;
using System.Linq;

namespace Masterchef
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] ingredientsInput = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int[] freshnesssInput = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            Queue<int> ingredients = new Queue<int>();
            Stack<int> freshness = new Stack<int>();

            for (int i = 0; i < ingredientsInput.Length; i++)
            {
                ingredients.Enqueue(ingredientsInput[i]);
            }
            for (int i = 0; i < freshnesssInput.Length; i++)
            {
                freshness.Push(freshnesssInput[i]);
            }
            SortedDictionary<string, int> dishes = new SortedDictionary<string, int>();
            int freshnessLevel = 0;
            string dish = "";

            while (ingredients.Any() && freshness.Any())
            {
                int currentIngredient = ingredients.Dequeue();
                if (currentIngredient == 0)
                {
                    continue;
                }
                int currentFreshness = freshness.Pop();
                freshnessLevel = currentIngredient * currentFreshness;
                
                if (freshnessLevel == 150 || freshnessLevel == 250 || freshnessLevel == 300 || freshnessLevel == 400)
                {
                    dish = GetDishName(freshnessLevel);
                    if (!dishes.ContainsKey(dish))
                    {
                        dishes.Add(dish, 0);
                    }
                    dishes[dish]++;
                }
                else
                {
                    currentIngredient += 5;
                    ingredients.Enqueue(currentIngredient);
                }
            }
            if(dishes.Count>=4)
            {
                Console.WriteLine("Applause! The judges are fascinated by your dishes!");
            }
            else
            {
                Console.WriteLine("You were voted off. Better luck next year.");
            }
            if(ingredients.Any())
            {
                Console.WriteLine($"Ingredients left: {ingredients.Sum()}");
            }
            foreach (var item in dishes)
            {
                Console.WriteLine($"# {item.Key} --> {item.Value}");
            }
        }

        private static string GetDishName(int freshnessLevel)
        {
            if (freshnessLevel == 150)
            {
                return "Dipping sauce";
            }
            else if (freshnessLevel == 250)
            {
                return "Green salad";
            }
            else if (freshnessLevel == 300)
            {
                return "Chocolate cake";
            }
            else if (freshnessLevel == 400)
            {
                return "Lobster";
            }
            return null;
        }
    }
}
