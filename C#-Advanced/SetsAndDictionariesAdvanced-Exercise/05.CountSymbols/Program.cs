using System;
using System.Collections.Generic;

namespace _05.CountSymbols
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            SortedDictionary<char, int> elements = new SortedDictionary<char, int>();

            for (int i = 0; i < input.Length; i++)
            {
                if(!elements.ContainsKey(input[i]))
                {
                    elements.Add(input[i], 0);
                }
                elements[input[i]]++;
            }
            foreach (var element in elements)
            {
                Console.WriteLine($"{element.Key}: {element.Value} time/s");
            }
        }
    }
}
