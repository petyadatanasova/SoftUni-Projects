using System;

namespace _05._Decrypting_Message
{
    class Program
    {
        static void Main(string[] args)
        {
            int key = int.Parse(Console.ReadLine());
            int numberLines = int.Parse(Console.ReadLine());
            string[] message = new string[numberLines];

            for (int i = 0; i < numberLines; i++)
            {
                char character = char.Parse(Console.ReadLine());

                character += (char)key;
                 
                message[i] = character.ToString();
            }
            Console.WriteLine(string.Join("", message));


        }
    }
}
