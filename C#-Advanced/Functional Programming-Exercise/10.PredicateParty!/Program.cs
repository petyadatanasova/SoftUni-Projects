using System;
using System.Collections.Generic;
using System.Linq;

namespace _10.PredicateParty_
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> names = Console.ReadLine().Split().ToList();

            

            string[] command = Console.ReadLine().Split();
            while (command[0] != "Party!")
            {
                Predicate<string> predicate = GetPredicate(command[1], command[2]);
                if (command[0] == "Remove")
                {
                    names.RemoveAll(predicate);
                }
                else if (command[0] == "Double")
                {
                    List<string> doubledNames = names.FindAll(predicate);

                    if(doubledNames.Any())
                    {
                        int index = names.FindIndex(predicate);
                        names.InsertRange(index, doubledNames);
                    }
                }


                command = Console.ReadLine().Split();
            }
            if(names.Any())
            {
                Console.WriteLine($"{string.Join(", ", names)} are going to the party!");
            }
            else
            {
                Console.WriteLine("Nobody is going to the party!");
            }
        }

        private static Predicate<string> GetPredicate(string commandType, string Arg)
        {
            
            if(commandType=="StartsWith")
            {
                return name => name.StartsWith(Arg);

            }
            else if ( commandType=="EndsWith")
            {
                return name => name.EndsWith(Arg);
            }
            
                return name => name.Length==int.Parse(Arg);
            
        }
    }
}
