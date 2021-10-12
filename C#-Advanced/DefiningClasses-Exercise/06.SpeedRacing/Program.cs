using System;
using System.Collections.Generic;

namespace SpeedRacing
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Dictionary<string, Car> cars = new Dictionary<string, Car>();
            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                string model = input[0];
                double fuelAmount = double.Parse(input[1]);
                double fuelConsumption= double.Parse(input[2]);

                Car car = new Car(model,fuelAmount, fuelConsumption);
                if(!cars.ContainsKey(model))
                {
                    cars.Add(model,car);
                }
            }
            string[] command = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            while (command[0]!="End")
            {
                string carModel = command[1];
                double amountOfKm = double.Parse(command[2]);

                cars[carModel].CalculateIfCarCanMoveDistance(amountOfKm);

                command = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            }
            foreach (var car in cars)
            {
                Console.WriteLine($"{car.Key} {car.Value.FuelAmount:f2} {car.Value.TravelledDistance}");
            }
        }
    }
}
