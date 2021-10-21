using System;
using System.Collections.Generic;
using System.Linq;

namespace Bombs
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<int> bombEffects = new Queue<int>(Console.ReadLine().Split(", ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            Stack<int> bombCasings = new Stack<int>(Console.ReadLine().Split(", ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            SortedDictionary<string, int> bombPouch = new SortedDictionary<string, int>();
            bombPouch.Add("Datura Bombs", 0);
            bombPouch.Add("Cherry Bombs", 0);
            bombPouch.Add("Smoke Decoy Bombs", 0);

            while (bombEffects.Any() && bombCasings.Any())
            {
                int effect = bombEffects.Peek();
                int casing = bombCasings.Pop();

                if(effect+casing==40 || effect + casing == 60 || effect + casing == 120)
                {
                    bombEffects.Dequeue();
                    if(effect + casing == 40)
                    {
                       
                        bombPouch["Datura Bombs"]++;
                    }
                    else if (effect + casing == 60)
                    {
                       
                        bombPouch["Cherry Bombs"]++;
                    }
                    else if (effect + casing == 120)
                    {
                      
                        bombPouch["Smoke Decoy Bombs"]++;
                    }
                }
                else
                {
                    casing -= 5;
                    bombCasings.Push(casing);
                }
                if(bombPouch["Datura Bombs"] >= 3 && bombPouch["Cherry Bombs"] >= 3 & bombPouch["Smoke Decoy Bombs"] >= 3)
                {
                    break;
                }

            }

            if(bombPouch["Datura Bombs"]>=3 && bombPouch["Cherry Bombs"]>= 3 & bombPouch["Smoke Decoy Bombs"]>= 3)
            {
                Console.WriteLine("Bene! You have successfully filled the bomb pouch!");
            }
            else
            {
                Console.WriteLine("You don't have enough materials to fill the bomb pouch.");
            }
            if(bombEffects.Any())
            {
                Console.WriteLine($"Bomb Effects: {string.Join(", ", bombEffects)}");
            }
            else
            {
                Console.WriteLine("Bomb Effects: empty");
            }
            if (bombCasings.Any())
            {
                Console.WriteLine($"Bomb Casings: {string.Join(", ", bombCasings)}");
            }
            else
            {
                Console.WriteLine("Bomb Casings: empty");
            }

            foreach (var bomb in bombPouch)
            {
                Console.WriteLine($"{bomb.Key}: {bomb.Value}");
            }
        }
    }
}
