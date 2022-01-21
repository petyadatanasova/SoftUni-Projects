using System;
using System.Collections.Generic;

namespace ExplicitInterfaces
{
    public class Program
    {
        static void Main(string[] args)
        {
            //PeterDavies Bulgaria 20
            string[] input = Console.ReadLine().Split();
            List<IResident> residents = new List<IResident>();

            while (input[0]!="End")
            {
                string name = input[0];
                string country = input[1];
                int age = int.Parse(input[2]);

                Citizen resident = new Citizen(name, country, age);
               
                residents.Add(resident);


                input = Console.ReadLine().Split();
            }

            foreach (var resident in residents)
            {
                Console.WriteLine(resident);

            }
        }
    }
}
