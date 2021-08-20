using System;

namespace _04._Refactoring_Prime_Checker
{
    class Program
    {
        static void Main(string[] args)
        {
            int endNumber = int.Parse(Console.ReadLine());

            for (int i = 2; i <= endNumber; i++)
            {
                bool isPrime = true;
                for (int j = 2; j < i; j++)
                {
                    if (i % j == 0)
                    {
                        isPrime = false;
                        break;
                    }
                   
                    
                }
                Console.WriteLine($"{i} -> {isPrime.ToString().ToLower()}");
            }

        }
    }
}
