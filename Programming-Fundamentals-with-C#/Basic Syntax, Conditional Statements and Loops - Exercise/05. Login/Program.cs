using System;

namespace _05._Login
{
    class Program
    {
        static void Main(string[] args)
        {
            string user = Console.ReadLine();
            string passTry = Console.ReadLine();
            int counter = 0;
            char[] pass = user.ToCharArray();
            Array.Reverse(pass);

            string str = new string(pass);
            
            for (int i = 1; i <= 5; i++)
            {
                
                if (passTry == str)
                {
                    Console.WriteLine($"User {user} logged in.");
                    return;
                }
                else
                {
                    Console.WriteLine("Incorrect password. Try again.");
                    counter++;
                }
                if (counter == 3)
                {
                    Console.WriteLine($"User {user} blocked!");
                    return;
                }
                passTry = Console.ReadLine();
            }
        }
    }
}
