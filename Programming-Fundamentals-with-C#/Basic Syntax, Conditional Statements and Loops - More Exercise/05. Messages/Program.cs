using System;

namespace _05._Messages
{
    class Program
    {
        static void Main(string[] args)
        {
            int letters = int.Parse(Console.ReadLine());
            string message = "";
            for (int i = 0; i < letters; i++)
            {
                
                string currentLetter = Console.ReadLine();
                int lenght = currentLetter.Length;
                int digit = currentLetter[0] - '0';
                int offset = (digit - 2) * 3;

                if (digit==0)
                {
                    message += (char)(32);
                    continue;
                }
              
                if (digit == 8 || digit == 9)
                {
                    offset++;
                }
                int letterIndex = offset + lenght - 1;
                int letterASCII = letterIndex + 97;

                
                message += (char)letterASCII;

            }

            Console.WriteLine(message);
        }
    }
}
