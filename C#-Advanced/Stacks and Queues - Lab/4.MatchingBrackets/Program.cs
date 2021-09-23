using System;
using System.Collections.Generic;

namespace _4.MatchingBrackets
{
    class Program
    {
        static void Main(string[] args)
        {
            string equation = Console.ReadLine();
            Stack<int> index = new Stack<int>();
            for (int i = 0; i < equation.Length; i++)
            {
                if (equation[i].ToString() == "(")
                {
                    index.Push(i);
                }
                else if (equation[i].ToString() == ")")
                {
                    int openingBracket = index.Pop();
                    int closingBrackets = i;
                    Console.WriteLine(equation.Substring(openingBracket, closingBrackets-openingBracket+1));
                }
            }
        }
    }
}
