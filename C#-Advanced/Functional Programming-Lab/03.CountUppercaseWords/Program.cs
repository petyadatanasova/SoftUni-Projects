using System;

namespace _03.CountUppercaseWords
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] text = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);

            Func<string, bool> func = word => Char.IsUpper(word[0]);

            for (int i = 0; i < text.Length; i++)
            {
                if(func(text[i]))
                {
                    Console.WriteLine(text[i]);
                }
            }

        }
    }
}
