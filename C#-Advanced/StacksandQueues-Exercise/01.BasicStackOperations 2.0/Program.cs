using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.BasicStackOperations_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] commandInput = Console.ReadLine().Split().Select(int.Parse).ToArray();
            Stack<int> elements = new Stack<int>(Console.ReadLine().Split().Select(int.Parse).ToArray());

            int elementsStack = commandInput[0];
            int elementsToPop = commandInput[1];
            int elementToLookFor = commandInput[2];

           
            for (int i = 0; i < elementsToPop; i++)
            {

                elements.Pop();
            }
            if (elements.Count > 0)
            {
                if (elements.Contains(elementToLookFor))
                {
                    Console.WriteLine("true");
                    return;
                }
                else
                {
                    Console.WriteLine(elements.Min());
                }
            }
            else
            {
                Console.WriteLine("0");
            }
            
        }
    }
}
