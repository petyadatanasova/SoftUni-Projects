using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Parking
{
    public class Parking
    {
        public Parking(string type, int capacity)
        {
            Type = type;
            Capacity = capacity;
            Cars = new List<Car>();

        }

        public List<Car> Cars { get; set; }
        public string Type { get; set; }
        public int Capacity { get; set; }

        public int Count => Cars.Count;
        public void Add(Car car)
        {
            if (Cars.Count < Capacity)
            {
                Cars.Add(car);
            }

        }

        public bool Remove(string manufacturer, string model)
        {
            Car car = Cars.FirstOrDefault(x => x.Manufacturer == manufacturer && x.Model == model);
            if (car != null)
            {
                Cars.Remove(car);
                return true;
            }
            return false;

        }

        public Car GetLatestCar()
        {
            // int latestYear = Cars.Select(x => x.Year).Max();
            //Car car = Cars.FirstOrDefault(x => x.Year == latestYear);
            Car car = Cars.OrderByDescending(x => x.Year).FirstOrDefault();
            return car;

        }

        public Car GetCar(string manufacturer, string model)
        {
            Car car = Cars.FirstOrDefault(x => x.Manufacturer == manufacturer && x.Model == model);
            
                return car;
            
        }

        public string GetStatistics()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine($"The cars are parked in {Type}:");

            foreach (var car in Cars)
            {
                sb.AppendLine(car.ToString().TrimEnd());
            }
            return sb.ToString().TrimEnd();
        }

    }
}
