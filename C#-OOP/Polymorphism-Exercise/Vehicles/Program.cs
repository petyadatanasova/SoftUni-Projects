using System;

namespace Vehicles
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] carInput = Console.ReadLine().Split();
            string[] truckInput = Console.ReadLine().Split();

            int num = int.Parse(Console.ReadLine());

            IVehicle car = new Car(double.Parse(carInput[1]), double.Parse(carInput[2]));
            IVehicle truck = new Truck(double.Parse(truckInput[1]), double.Parse(truckInput[2]));

            for (int i = 0; i < num; i++)
            {
                string[] command = Console.ReadLine().Split();

                if (command[0] == "Drive")
                {
                    double distance = double.Parse(command[2]);
                    if (command[1] == "Car")
                    {
                        if (!car.CanDrive((distance)))
                        {
                            Console.WriteLine("Car needs refueling");
                        }
                        else
                        {
                            car.Drive(distance);

                            Console.WriteLine($"Car travelled {distance} km");
                        }

                    }
                    else if (command[1] == "Truck")
                    {
                        if (!truck.CanDrive(distance))
                        {
                            Console.WriteLine("Truck needs refueling");
                        }
                        else
                        {
                            truck.Drive(distance);

                            Console.WriteLine($"Truck travelled {distance} km");
                        }
                    }
                }
                else if (command[0] == "Refuel")
                {
                    double litres = double.Parse(command[2]);
                    if (command[1] == "Car")
                    {
                        car.Refuel(litres);
                    }
                    else if (command[1] == "Truck")
                    {
                        truck.Refuel(litres);
                    }
                }

            }
            Console.WriteLine($"Car: {car.FuelQuantity:F2}");
            Console.WriteLine($"Truck: {truck.FuelQuantity:F2}");

        }
    }
}
