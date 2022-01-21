using System;
using System.Collections.Generic;

namespace BirthdayCelebrations
{
   public  class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split();
            List<IBirthable> allBirthableEntities = new List<IBirthable>();

            while (input[0] != "End")
            {
                IBirthable iBirthable = null;
                if (input[0] == "Citizen")
                {
                    string name = input[1];
                    int age = int.Parse(input[2]);
                    string id = input[3];
                    string birthdate = input[4];
                    iBirthable = new Citizen(name, age, id, birthdate);
                    allBirthableEntities.Add(iBirthable);
                }
                else if (input[0] == "Pet")
                {
                    string name = input[1];
                    string birthdate = input[2];
                    iBirthable = new Pet(name, birthdate);
                    allBirthableEntities.Add(iBirthable);
                }
               


                input = Console.ReadLine().Split();
            }
            string birthdateIdentifier = Console.ReadLine();

            foreach (var item in allBirthableEntities)
            {
                if (item.Birthdate.EndsWith(birthdateIdentifier))
                {
                    Console.WriteLine(item.Birthdate);
                }
            }
        }
    }
}
