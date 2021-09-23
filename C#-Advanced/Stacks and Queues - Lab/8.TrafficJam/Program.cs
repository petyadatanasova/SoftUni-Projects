using System;
using System.Collections.Generic;

namespace _8.TrafficJam
{
    class Program
    {
        static void Main(string[] args)
        {
            int carsToPass = int.Parse(Console.ReadLine());
            Queue<string> cars = new Queue<string>();
            string car = Console.ReadLine();
            int counter = 0;
            while (car != "end")
            {
                if (car == "green")
                {
                    int count = cars.Count;
                    for (int i = 0; i < (count < carsToPass ? count : carsToPass); i++)
                    {

                        Console.WriteLine($"{cars.Dequeue()} passed!");
                        counter++;

                    }
                }
                else
                {
                    cars.Enqueue(car);
                }

                car = Console.ReadLine();
            }
            Console.WriteLine($"{counter} cars passed the crossroads.");
        }
    }
}
