using System;
using System.Collections.Generic;
using System.Linq;

namespace _05.FilterByAge
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Dictionary<string, int> people = new Dictionary<string, int>();
            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(", ");

                if(!people.ContainsKey(input[0]))
                {
                    people.Add(input[0], int.Parse(input[1]));
                }
            }
            string criteria = Console.ReadLine();
            int ageCriteria = int.Parse(Console.ReadLine());
            string format = Console.ReadLine();
            Func<int, int, bool> filter = null;

            if (criteria=="older")
            {
                filter = (currentAge, ageFilter) => currentAge >= ageFilter;
                //filteredPeople = people.Where(age => age.Value >= ageCriteria).ToDictionary(x=>x.Key, y=>y.Value);
            }
            else if (criteria=="younger")
            {
                filter = (currentAge, ageFilter) => currentAge < ageFilter;
                //filteredPeople = people.Where(age => age.Value < ageCriteria).ToDictionary(x => x.Key, y => y.Value);
            }
           
           // Action<KeyValuePair<string, int>> action = person => Console.WriteLine($"{person.Key} - {person.Value}");
            
            if(format== "name age")
            {
                foreach (var person in people.Where(p => filter(p.Value, ageCriteria)))
                {
                    Console.WriteLine($"{person.Key} - {person.Value}");
                }   
            }
            else if (format == "name")
            {
                foreach (var person in people.Where(p => filter(p.Value, ageCriteria)))
                {
                    Console.WriteLine($"{person.Key}");
                }
            }
            else if (format == "age")
            {
                foreach (var person in people.Where(p => filter(p.Value, ageCriteria)))
                {
                    Console.WriteLine($"{person.Value}");
                }
            }
        }
    }
}
