using System;

namespace _06._Balanced_Brackets
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberLines = int.Parse(Console.ReadLine());
            int countOpenBrackets = 0;
            int countClosedBrackets = 0;
            string previousBracket = "";

            for (int i = 0; i < numberLines; i++)
            {
                string input = Console.ReadLine();
                if (previousBracket==input)
                {
                    Console.WriteLine("UNBALANCED");
                    return;
                }
                if (input =="(")
                {
                    countOpenBrackets++;
                    previousBracket = "(";
                }
                if (input==")")
                {
                    countClosedBrackets++;
                    previousBracket = ")";
                }
            }
            if (countClosedBrackets==countOpenBrackets)
            {
                Console.WriteLine("BALANCED");
            }
            else
            {
                Console.WriteLine("UNBALANCED");
            }



        }
    }
}
