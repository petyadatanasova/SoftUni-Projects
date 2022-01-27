using System;

namespace Vehicles
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] carInput = Console.ReadLine().Split();
            string[] truckInput = Console.ReadLine().Split();
            string[] busInput = Console.ReadLine().Split();

            int num = int.Parse(Console.ReadLine());

            IVehicle car = new Car(double.Parse(carInput[1]), double.Parse(carInput[2]), double.Parse(carInput[3]));
            IVehicle truck = new Truck(double.Parse(truckInput[1]), double.Parse(truckInput[2]), double.Parse(truckInput[3]));
            IVehicle bus = new Bus(double.Parse(busInput[1]), double.Parse(busInput[2]), double.Parse(busInput[3]));

            for (int i = 0; i < num; i++)
            {
                string[] command = Console.ReadLine().Split();

                try
                {
                    if (command[0] == "Drive")
                    {
                        double distance = double.Parse(command[2]);
                        bus.IsEmpty = false;
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
                        else if (command[1] == "Bus")
                        {
                            if (!bus.CanDrive(distance))
                            {
                                Console.WriteLine("Bus needs refueling");
                            }
                            else
                            {
                                bus.Drive(distance);

                                Console.WriteLine($"Bus travelled {distance} km");
                            }
                        }
                    }
                    else if (command[0] == "Refuel")
                    {
                        double litres = double.Parse(command[2]);
                        if (litres <= 0)
                        {
                            Console.WriteLine($"Fuel must be a positive number");
                        }
                        else
                        {
                            if (command[1] == "Car")
                            {
                                if (car.CanRefuel(litres))
                                {
                                    car.Refuel(litres);
                                }

                            }

                            else if (command[1] == "Truck")
                            {
                                if (truck.CanRefuel(litres))
                                {
                                    truck.Refuel(litres);
                                }

                            }
                            else if (command[1] == "Bus")
                            {
                                if (bus.CanRefuel(litres))
                                {
                                    bus.Refuel(litres);
                                }
                            }
                        }

                    }
                    else if (command[0] == "DriveEmpty")
                    {
                        bus.IsEmpty = true;
                        double distance = double.Parse(command[2]);
                        if (!bus.CanDrive(distance))
                        {
                            Console.WriteLine("Bus needs refueling");
                        }
                        else
                        {
                            bus.Drive(distance);

                            Console.WriteLine($"Bus travelled {distance} km");
                        }
                    }
                }
                catch (Exception ex)
                {

                    Console.WriteLine(ex.Message); ;
                }

            }
            Console.WriteLine($"Car: {car.FuelQuantity:F2}");
            Console.WriteLine($"Truck: {truck.FuelQuantity:F2}");
            Console.WriteLine($"Bus: {bus.FuelQuantity:F2}");

        }
    }
}
