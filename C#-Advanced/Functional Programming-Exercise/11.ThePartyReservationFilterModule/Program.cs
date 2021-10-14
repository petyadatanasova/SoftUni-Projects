using System;
using System.Collections.Generic;
using System.Linq;

namespace _11.ThePartyReservationFilterModule
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> names = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).ToList();

            Dictionary<string, Predicate<string>> filters = new Dictionary<string, Predicate<string>>();

            string[] commandArg = Console.ReadLine().Split(";");
            while (commandArg[0]!="Print")
            {
                string command = commandArg[0];
                string filterType = commandArg[1];
                string filterParameter = commandArg[2];

                Predicate<string> predicate = GetPredicate(filterType, filterParameter);
                if(command=="Add filter")
                {
                    string key = filterType + "_" + filterParameter;
                    filters.Add(key, predicate);
                }
                else if (command=="Remove filter")
                {
                    filters.Remove(filterType + "_" + filterParameter);
                }
               
                commandArg = Console.ReadLine().Split(";");
            }
            List<string> filteredNames = new List<string>();
            foreach (var filter in filters)
            {
                names.RemoveAll(filter.Value);
            }
            Console.WriteLine(string.Join(" ", names));
        }

        private static Predicate<string> GetPredicate(string filterType, string filterParameter)
        {
           if(filterType=="Starts with")
            {
                return name => name.StartsWith(filterParameter);
            }
           if(filterType=="Ends with")
            {
                return name => name.EndsWith(filterParameter);
            }
           if(filterType=="Lenght")
            {
                return name => name.Length == int.Parse(filterParameter);
            }

            return name => name.Contains(filterParameter);
        }
    }
}
//•	"Starts with"
//•	"Ends with"
//•	"Length"
//•	"Contains"
