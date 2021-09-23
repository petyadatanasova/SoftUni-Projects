using System;
using System.Collections.Generic;
using System.Linq;

namespace _05.FashionBoutique
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack<int> clothes = new Stack<int>(Console.ReadLine().Split().Select(int.Parse).ToArray());
            int rackCapacity = int.Parse(Console.ReadLine());

            int newRack = 0;
            int numRacks = 1;
            while (clothes.Count>0)
            {
                int currentPiece = clothes.Peek();

                if(newRack+currentPiece<=rackCapacity)
                {
                    newRack += currentPiece;
                    clothes.Pop();
                }
                else
                {
                    numRacks++;
                    newRack = 0;
                }
            }
            Console.WriteLine(numRacks);
        }
    }
}
