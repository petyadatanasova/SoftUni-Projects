using System;

namespace _06._Triples_of_Latin_Letters
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());

            for (int i = 97; i < num+97; i++)
            {
                for (int j = 97; j < num+97; j++)
                {
                    for (int k = 97; k < num+97; k++)
                    {
                        Console.WriteLine($"{(char)i}{(char)j}{(char)k}");
                    }
                }
            }




        }
    }
}
