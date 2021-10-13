using System;
using System.Collections.Generic;

namespace CarSalesman
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Dictionary<string, Engine> engines = new Dictionary<string, Engine>();
            for (int i = 0; i < n; i++)
            {
                //"{model} int {power} int {displacement} string {efficiency}"
                string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                string model = input[0];
                int power = int.Parse(input[1]);
                Engine engine = new Engine(model, power);

                if (input.Length == 3)
                {
                    //if (Char.IsDigit(input[2][0]))
                    if (Int32.TryParse(input[2], out _))
                    {
                        engine.Displacement = input[2];
                    }
                    else
                    {
                        engine.Efficiency = input[2];
                    }

                }
                else if (input.Length == 4)
                {
                    engine.Displacement = input[2];
                    engine.Efficiency = input[3];
                }
                if (!engines.ContainsKey(model))
                {
                    engines.Add(model, engine);
                }
            }
            n = int.Parse(Console.ReadLine());
            List<Car> cars = new List<Car>();
            for (int i = 0; i < n; i++)
            {
                //"{model} {engine} int{weight} string{color}".
                string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                string model = input[0];
                string engineModel = input[1];
                Engine engine = engines[engineModel];
                Car car = new Car(model, engine);
                if (input.Length == 3)
                {
                    //if(Char.IsDigit(input[2][0]))
                    if (Int32.TryParse(input[2], out _))
                    {
                        car.Weight = input[2];
                    }
                    else
                    {
                        car.Color = input[2];
                    }
                }
                else if (input.Length == 4)
                {
                    car.Weight = input[2];
                    car.Color = input[3];
                }
                cars.Add(car);
            }
            foreach (var car in cars)
            {
                Console.WriteLine(car.ToString());
            }
        }
    }
}
