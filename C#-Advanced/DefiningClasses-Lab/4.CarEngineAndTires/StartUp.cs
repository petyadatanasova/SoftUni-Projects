using System;

namespace CarManufacturer
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            string make = Console.ReadLine();
            string model = Console.ReadLine();
            int year = int.Parse(Console.ReadLine());
            double fuelQuantity = double.Parse(Console.ReadLine());
            double fuelConsumption = double.Parse(Console.ReadLine());

            Car firstCar = new Car();
            Console.WriteLine(firstCar.WhoAmI());
            Car secondCar = new Car(make, model, year);
            Console.WriteLine(secondCar.WhoAmI());
            Car thirdCar = new Car(make, model, year, fuelQuantity, fuelConsumption);
            Console.WriteLine(thirdCar.WhoAmI());

            //Tire[] tires = new Tire[4];
            //tires[0].Year = 1;
            //tires[1].Year = 1;
            //tires[2].Year = 2;
            //tires[3].Year = 2;

            //tires[0].Pressure = 2.5;
            //tires[1].Pressure = 2.1;
            //tires[2].Pressure = 0.5;
            //tires[3].Pressure = 2.3;

            Tire[] tires = new Tire[4]
            {
                new Tire(1, 2.5),
                new Tire(1, 2.1),
                new Tire(2, 0.5),
                new Tire(2, 2.3),
             };

            Engine engine = new Engine(560, 6300);

            Car car = new Car("Lamborgini", "Urus", 2010, 250, 9, engine, tires);

            Console.WriteLine(car.WhoAmI());

        }
    }
}
