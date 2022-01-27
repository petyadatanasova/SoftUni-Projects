using System;
using System.Collections.Generic;

namespace Raiding
{
    public class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            List<IBaseHero> heroes = new List<IBaseHero>();

            for (int i = 0; i < num; i++)
            {
                string name = Console.ReadLine();
                string heroType = Console.ReadLine();

                IBaseHero hero = null;
                if (heroType == "Druid")
                {
                    hero = new Druid(name);
                }
                else if (heroType == "Paladin")
                {
                    hero = new Paladin(name);
                }
                else if (heroType == "Rogue")
                {
                    hero = new Rogue(name);
                }
                else if (heroType == "Warrior")
                {
                    hero = new Warrior(name);
                }
                else
                {
                    Console.WriteLine("Invalid hero!");
                    num += 1;
                }
                if (hero != null)
                {
                    heroes.Add(hero);
                }

            }
            int bossPower = int.Parse(Console.ReadLine());

            foreach (var hero in heroes)
            {
                Console.WriteLine(hero.CastAbility());
                bossPower -= hero.Power;
            }


            if (bossPower <= 0)
            {
                Console.WriteLine("Victory!");
            }
            else
            {
                Console.WriteLine("Defeat...");
            }
        }
    }
}
