using System;

namespace _12._Even_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int input = int.Parse(Console.ReadLine());
            while (true)
            {
               if (Math.Abs(input)%2==1)
                {
                    Console.WriteLine("Please write an even number.");
                }
                else
                {
                    break;
                }
                
                input = int.Parse(Console.ReadLine());
            }
            Console.WriteLine($"The number is: {Math.Abs(input)}");
        }
    }
}
