using System;
using System.Collections.Generic;
using System.Linq;

namespace CarManufacturer
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            List<Tire[]> tires = new List<Tire[]>();
            string input = Console.ReadLine();
            while (input!= "No more tires")
            {
                string[] inputTires = input.Split(" ", StringSplitOptions.RemoveEmptyEntries);
                Tire[] currentTires = new Tire[4]
                {
                    new Tire(int.Parse(inputTires[0]), double.Parse(inputTires[1])),
                    new Tire(int.Parse(inputTires[2]), double.Parse(inputTires[3])),
                    new Tire(int.Parse(inputTires[4]), double.Parse(inputTires[5])),
                    new Tire(int.Parse(inputTires[6]), double.Parse(inputTires[7])),
                };
                //for (int i = 0; i < inputTires.Length; i+=2)
                //{
                //    currentTires[i].Year=int.Parse(inputTires[i]);
                //    currentTires[i+1].Pressure=double.Parse(inputTires[i+1]);
                //}
                tires.Add(currentTires);
                input = Console.ReadLine();
            }
            List<Engine> engines = new List<Engine>();
            input = Console.ReadLine();
            while (input != "Engines done")
            {
                double[] inputEngine = input.Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(double.Parse).ToArray();
                Engine engine = new Engine((int)inputEngine[0], inputEngine[1]);
                engines.Add(engine);
                input = Console.ReadLine();
            }
            //Audi A5 2017 200 12 0 0
            //{make} {model} {year} {fuelQuantity} {fuelConsumption} {engineIndex} {tiresIndex}
            input = Console.ReadLine();
            List<Car> cars = new List<Car>();
            while (input!="Show special")
            {
                string[] inputCar = input.Split(" ", StringSplitOptions.RemoveEmptyEntries);
                string make = inputCar[0];
                string model = inputCar[1];
                int year = int.Parse(inputCar[2]);
                double fuelQuantity = double.Parse(inputCar[3]);
                double fuelConsumption = double.Parse(inputCar[4]);
                int engineIndex = int.Parse(inputCar[5]);
                int tiresIndex = int.Parse(inputCar[6]);

                Car car = new Car(make, model, year, fuelQuantity, fuelConsumption, engines[engineIndex], tires[tiresIndex]);

                cars.Add(car);

                input = Console.ReadLine();
            }

            List<Car> filteredCars = cars.Where(x => x.Year >= 2017 && x.Engine.HorsePower >= 330 && x.Tires.Sum(t => t.Pressure) >= 9 && x.Tires.Sum(t => t.Pressure) < 10).ToList();
            List<Car> carsDriven = new List<Car>();

            foreach (var car in filteredCars)
            {
                carsDriven.Add(car);
                car.FuelQuantity = car.FuelQuantity - (car.FuelConsumption /100)*20;
            }


            foreach (var car in carsDriven)
            {
                Console.WriteLine($"Make: {car.Make}{Environment.NewLine}Model: {car.Model}{Environment.NewLine}" +
                    $"Year: {car.Year}{Environment.NewLine}HorsePowers: {car.Engine.HorsePower}{Environment.NewLine}FuelQuantity: {car.FuelQuantity}");
            }

        }

       
    }
}
