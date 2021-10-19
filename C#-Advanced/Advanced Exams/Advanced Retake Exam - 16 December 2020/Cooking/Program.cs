using System;
using System.Collections.Generic;
using System.Linq;

namespace Cooking
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<int> liquids = new Queue<int>(Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            Stack<int> ingredients = new Stack<int>(Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            SortedDictionary<string, int> food = new SortedDictionary<string, int>();
          
            int increase = 0;
            while (liquids.Any() && ingredients.Any())
            {
                int liquid = liquids.Dequeue();

                int ingredient = ingredients.Peek();

                if (liquid + ingredient == 25 || liquid + ingredient == 50 || liquid + ingredient == 75 || liquid + ingredient == 100)
                {
                    AddFood(food, liquid, ingredient);
                    ingredients.Pop();
                    increase = 0;
                }
                else
                {
                    ingredients.Pop();
                    ingredient += 3;
                    ingredients.Push(ingredient);
                }
            }
            if(food.Count==4)
            {
                Console.WriteLine("Wohoo! You succeeded in cooking all the food!");
            }
            else
            {
                Console.WriteLine("Ugh, what a pity! You didn't have enough materials to cook everything.");
            }
            if(liquids.Any())
            {
                Console.WriteLine($"Liquids left: {string.Join(", ", liquids)}");
            }
            else
            {
                Console.WriteLine("Liquids left: none");
            }
            if(ingredients.Any())
            {
                Console.WriteLine($"Ingredients left: {string.Join(", ",ingredients)}");
            }
            else
            {
                Console.WriteLine("Ingredients left: none");
            }


            if(food.ContainsKey("Bread"))
            {
                Console.WriteLine($"Bread: {food["Bread"]}");
            }
            else
            {
                Console.WriteLine($"Bread: 0");
            }
            if (food.ContainsKey("Cake"))
            {
                Console.WriteLine($"Bread: {food["Cake"]}");
            }
            else
            {
                Console.WriteLine($"Cake: 0");
            }
            if (food.ContainsKey("Fruit Pie"))
            {
                Console.WriteLine($"Fruit Pie: {food["Fruit Pie"]}");
            }
            else
            {
                Console.WriteLine($"Fruit Pie: 0");
            }
            if (food.ContainsKey("Pastry"))
            {
                Console.WriteLine($"Pastry: {food["Pastry"]}");
            }
            else
            {
                Console.WriteLine($"Pastry: 0");
            }
            
        }

        private static void AddFood(SortedDictionary<string, int> food, int liquid, int ingredient)
        {
            if (liquid + ingredient == 25)
            {
                if (!food.ContainsKey("Bread"))
                {
                    food.Add("Bread", 0);
                }
                food["Bread"]++;
            }
            else if (liquid + ingredient == 50)
            {
                if (!food.ContainsKey("Cake"))
                {
                    food.Add("Cake", 0);
                }
                food["Cake"]++;
            }
            else if (liquid + ingredient == 75)
            {
                if (!food.ContainsKey("Pastry"))
                {
                    food.Add("Pastry", 0);
                }
                food["Pastry"]++;
            }
            else if (liquid + ingredient == 100)
            {
                if (!food.ContainsKey("Fruit Pie"))
                {
                    food.Add("Fruit Pie", 0);
                }
                food["Fruit Pie"]++;
            }
        }
    }
}
