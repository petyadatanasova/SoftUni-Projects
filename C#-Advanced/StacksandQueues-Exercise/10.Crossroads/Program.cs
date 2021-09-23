using System;
using System.Collections.Generic;

namespace _10.Crossroads
{
    class Program
    {
        static void Main(string[] args)
        {
            int greenLight = int.Parse(Console.ReadLine());
            int freeWindow = int.Parse(Console.ReadLine());
            string input = Console.ReadLine();
            Queue<string> cars = new Queue<string>();
            int counter = 0;

            while (input != "END")
            {
                if (input == "green")
                {
                    int currentGreen = greenLight;
                    while (currentGreen > 0 && cars.Count>0 )
                    {
                        string currentCar = cars.Peek();
                        if(currentCar.Length<=currentGreen)
                        {
                            currentGreen -= currentCar.Length;
                            cars.Dequeue();
                            counter++;
                        }
                        else if (currentCar.Length<=currentGreen+freeWindow)
                        {
                            currentGreen = 0;
                            cars.Dequeue();
                            counter++;
                        }
                        else
                        {
                            int symbolsLeft = currentCar.Length - currentGreen - freeWindow;
                            int hitIndex = currentCar.Length - symbolsLeft;
                            Console.WriteLine("A crash happened!");
                            Console.WriteLine($"{currentCar} was hit at {currentCar[hitIndex]}.");
                            cars.Dequeue();
                            return;
                        }
                        

                    }
                }
                else
                {
                    cars.Enqueue(input);
                }


                input = Console.ReadLine();
            }
            Console.WriteLine("Everyone is safe.");
            Console.WriteLine($"{counter} total cars passed the crossroads.");
        }
    }
}
