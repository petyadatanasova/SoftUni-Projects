using System;
using System.Collections.Generic;
using System.Linq;

namespace BirthdayCelebrations
{
   public  class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            Dictionary<string, IBuyer> allBuyers = new Dictionary<string, IBuyer>();
            for (int i = 0; i < num; i++)
            {
                string[] input = Console.ReadLine().Split();
                IBuyer ibuyer = null;
                if (input.Length==4)
                {
                    string name = input[0];
                    int age = int.Parse(input[1]);
                    string id = input[2];
                    string birthdate = input[3];
                     ibuyer = new Citizen(name, age, id, birthdate);
                    allBuyers.Add(name, ibuyer);
                }
                else if (input.Length == 3)
                {
                    string name = input[0];
                    int age = int.Parse(input[1]);
                    string group = input[2];
                    ibuyer = new Rebel(name, age, group);
                    allBuyers.Add(name, ibuyer);
                }
            }
            string boughtFood = Console.ReadLine();
            while (boughtFood!="End")
            {
                if(allBuyers.ContainsKey(boughtFood))
                {
                    allBuyers[boughtFood].BuyFood();
                }


                boughtFood = Console.ReadLine();
            }

            Console.WriteLine(allBuyers.Sum(x => x.Value.Food));
        }
    }
}
