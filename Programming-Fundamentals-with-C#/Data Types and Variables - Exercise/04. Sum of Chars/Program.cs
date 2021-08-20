using System;

namespace _04._Sum_of_Chars
{
    class Program
    {
        static void Main(string[] args)
        {
            int numOfLines = int.Parse(Console.ReadLine());
            int sumChars = 0;
            for (int i = 0; i < numOfLines; i++)
            {
                char input = char.Parse(Console.ReadLine());
                sumChars += input;

            }
            Console.WriteLine($"The sum equals: {sumChars}");
        }
    }
}
