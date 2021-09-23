using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.BasicStackOperations
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] commandInput = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int[] input = Console.ReadLine().Split().Select(int.Parse).ToArray();

            int elementsStack = commandInput[0];
            int elementsToPop = commandInput[1];
            int elementToLookFor = commandInput[2];

            int minElement = int.MaxValue;
            Stack<int> elements = new Stack<int>();
            bool foundElement = false;

            for (int i = 0; i < elementsStack; i++)
            {

                elements.Push(input[i]);
            }

            for (int i = 0; i < elementsToPop; i++)
            {

                elements.Pop();
            }
            if (elements.Count <= 0)
            {
                Console.WriteLine("0");
                return;
            }
            while (elements.Any())
            {
                if (elements.Peek() == elementToLookFor)
                {

                    foundElement = true;
                    break;
                }
                else
                {
                    if (elements.Peek() <= minElement)
                    {
                        minElement = elements.Peek();
                    }
                }
                elements.Pop();
            }
            if (foundElement)
            {
                Console.WriteLine("true");
            }
            else
            {
                Console.WriteLine(minElement);
            }

        }
    }
}
