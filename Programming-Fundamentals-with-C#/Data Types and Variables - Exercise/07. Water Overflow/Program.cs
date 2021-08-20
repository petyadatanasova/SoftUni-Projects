using System;

namespace _07._Water_Overflow
{
    class Program
    {
        static void Main(string[] args)
        {
            int numLines = int.Parse(Console.ReadLine());
            int tankCapacity = 255;
            for (int i = 0; i < numLines; i++)
            {
                int quantityWater = int.Parse(Console.ReadLine());

                if(quantityWater<=tankCapacity)
                {
                    tankCapacity -= quantityWater;
                }
                else
                {
                    Console.WriteLine("Insufficient capacity!");
                }

            }
            Console.WriteLine(255-tankCapacity);
        }
    }
}
