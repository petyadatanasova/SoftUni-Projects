using System;
using System.Collections.Generic;

namespace BorderControl
{
   public class StartUp
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split();
            List<IIdentifiable> allCitizensAndRobots = new List<IIdentifiable>();

            while (input[0]!="End")
            {
                IIdentifiable iidentifiable = null;
                if (input.Length==3)
                {
                    string name = input[0];
                    int age = int.Parse(input[1]);
                    string id = input[2];
                    iidentifiable = new Citizen(name, age, id);
                }
                else
                {
                    string model = input[0];
                    string id = input[1];

                    iidentifiable = new Robot(model, id);
                }
                allCitizensAndRobots.Add(iidentifiable);


                input = Console.ReadLine().Split();
            }
            string detainedId = Console.ReadLine();

            foreach (var item in allCitizensAndRobots)
            {
                if(item.Id.EndsWith(detainedId))
                {
                    Console.WriteLine(item.Id);
                }
            }
        }
    }
}
