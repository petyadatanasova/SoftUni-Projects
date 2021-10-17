using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SkiRental
{
    public class SkiRental
    {
        public SkiRental(string name, int capacity)
        {
            Name = name;
            Capacity = capacity;
            Skis = new Dictionary<string, Ski>();
        }

        public string Name { get; set; }
        public int Capacity { get; set; }
        Dictionary<string, Ski> Skis;

        //•	Method Add(Ski ski) – adds an entity to the data if there is an empty slot for the Ski.
        public void Add(Ski ski)
        {
            string manufarcturer = ski.Manufacturer;
            string model = ski.Model;
            string key = manufarcturer + "_" + model;
            if (!Skis.ContainsKey(key) && Capacity > 0)
            {
                Skis.Add(key, ski);
                Capacity--;
            }

        }

        //•	Method Remove(string manufacturer, string model) – removes the Ski by given manufacturer and model, if such exists, and returns bool.
        public bool Remove(string manufacturer, string model)
        {
            if (Skis.ContainsKey(manufacturer + "_" + model))
            {
                return Skis.Remove(manufacturer + "_" + model);
                Capacity++;
            }
            return false;
        }
        //•	Method GetNewestSki() – returns the newest Ski (by year) or null if there are no Skis stored.
        public Ski GetNewestSki()
        {
            if (Skis.Any())
            {
                return Skis.Values.OrderByDescending(x => x.Year).FirstOrDefault();
            }
            return null;
        }
        //•	Getter Count – returns the number of Skis.
        public int Count => Skis.Count;

        //•	Method GetSki(string manufacturer, string model) – returns the Ski with the given manufacturer and model or null if there is no such Ski.
        public Ski GetSki(string manufacturer, string model)
        {
            if (Skis.ContainsKey(manufacturer + "_" + model))
            {
                return Skis[manufacturer + "_" + model];
            }
            return null;
        }
        //•	GetStatistics() – returns a string in the following format:

        public string GetStatistics()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"The skis stored in {Name}:");
            foreach (var ski in Skis)
            {
                sb.AppendLine(ski.Value.ToString());
            }
            return sb.ToString().TrimEnd();
        }
    }
}
