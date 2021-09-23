using System;
using System.Collections.Generic;

namespace _06.ParkingLot
{
    class Program
    {
        static void Main(string[] args)
        {
            HashSet<string> cars = new HashSet<string>();
            string[] commands = Console.ReadLine().Split(", ");
            while (commands[0]!="END")
            {
                string command = commands[0];
                string carPlate = commands[1];
                if(command=="IN")
                {
                    cars.Add(carPlate);
                }
                else
                {
                    cars.Remove(carPlate);
                }

                commands = Console.ReadLine().Split(", ");
            }
            if (cars.Count == 0)
            {
                Console.WriteLine("Parking Lot is Empty");
            }
            else
            {
                foreach (var car in cars)
                {
                    Console.WriteLine(car);
                }
            }
        }
    }
}
