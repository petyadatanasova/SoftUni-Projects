using System;
using System.Collections.Generic;
using System.Linq;

namespace _11.KeyRevolver
{
    class Program
    {
        static void Main(string[] args)
        {
            int priceOfBullet = int.Parse(Console.ReadLine());
            int sizeOfGunBarrel = int.Parse(Console.ReadLine());
            

            Stack<int> bulletsStack = new Stack<int>(Console.ReadLine().Split().Select(int.Parse).ToArray());
            int totalBullets = bulletsStack.Count();
            Queue<int> locksQueue = new Queue<int>(Console.ReadLine().Split().Select(int.Parse).ToArray());

            int valueOfIntelligence = int.Parse(Console.ReadLine());

            int counter = 0;
            while (bulletsStack.Count>0 && locksQueue.Count>0)
            {
                int currentBullet = bulletsStack.Pop();
                int currentLock = locksQueue.Peek();
                
                if(currentBullet<=currentLock)
                {
                    Console.WriteLine("Bang!");
                    locksQueue.Dequeue();
                }
                else
                {
                    Console.WriteLine("Ping!");
                }
                counter++;
                if (counter % sizeOfGunBarrel == 0 && bulletsStack.Count>0)
                {
                    Console.WriteLine("Reloading!");
                }

            }
           if(bulletsStack.Count<=0 && locksQueue.Count>0)
            {
                Console.WriteLine($"Couldn't get through. Locks left: {locksQueue.Count}");
            }
            else
            {
                Console.WriteLine($"{bulletsStack.Count} bullets left. Earned ${valueOfIntelligence-(totalBullets-bulletsStack.Count)*priceOfBullet}");
            }
        }
    }
}
