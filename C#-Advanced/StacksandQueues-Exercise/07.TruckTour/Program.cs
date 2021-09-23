using System;
using System.Collections.Generic;
using System.Linq;

namespace _07.TruckTour
{
    class Program
    {
        static void Main(string[] args)
        {
            int numOfPumps = int.Parse(Console.ReadLine());
            Queue<int[]> pumps = new Queue<int[]>();

            for (int i = 0; i < numOfPumps; i++)
            {
                int[] currentPump = Console.ReadLine().Split().Select(int.Parse).ToArray();

                pumps.Enqueue(currentPump);
            }
            //(1) the amount of petrol that particular petrol pump will give
            //(2) the distance from that petrol pump to the next petrol pump.
            int startTourIndex = 0;

            while (true)
            {

                int currentTank = 0;

                foreach (var item in pumps)
                {
                    int amountofPetrol = item[0];
                    int distance = item[1];

                    currentTank += amountofPetrol;
                    currentTank -= distance;

                    if (currentTank < 0)
                    {
                        int[] element = pumps.Dequeue();
                        pumps.Enqueue(element);
                        startTourIndex++;
                        break;
                    }
                    
                }
                if (currentTank >= 0)
                {
                    Console.WriteLine(startTourIndex);
                    break;
                }

            }

        }
    }
}
