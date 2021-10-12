using System;
using System.Collections.Generic;
using System.Linq;

namespace RawData
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            List<Car> cars = new List<Car>();
            for (int i = 0; i < n; i++)
            {
                //"{model} {engineSpeed} {enginePower} {cargoWeight}
                //{cargoType} {tire1Pressure} {tire1Age} {tire2Pressure}
                //{tire2Age} {tire3Pressure} {tire3Age} {tire4Pressure} {tire4Age}"

                string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                string model = input[0];
                int speed = int.Parse(input[1]);
                int power = int.Parse(input[2]);
                int weight = int.Parse(input[3]);
                string type = input[4];

                Engine engine = new Engine(speed, power);
                Cargo cargo = new Cargo(type, weight);
                Tire[] tires = new Tire[4];
                int counter = 0;
                for (int j = 5; j < input.Length-1; j+=2)
                {
                    tires[counter] = new Tire(int.Parse(input[j+1]), double.Parse(input[j]));
                    counter++;
                }
                Car car = new Car(model, engine, cargo, tires);
                cars.Add(car);
            }
            string filter = Console.ReadLine();
            List<Car> filteredCars = new List<Car>();
            if (filter=="fragile")
            {
                filteredCars = cars.Where(x => x.CargoOfCar.Type == filter && x.Tires.Any(t => t.Pressure < 1)).ToList();
            }
            else
            {
                filteredCars = cars.Where(x => x.CargoOfCar.Type == filter && x.EngineOfCar.Power>250).ToList();

            }
            foreach (var car in filteredCars)
            {
                Console.WriteLine($"{car.Model}");
            }
        }
    }
}
