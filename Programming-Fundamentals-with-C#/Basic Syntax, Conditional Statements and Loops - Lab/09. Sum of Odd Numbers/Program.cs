using System;

namespace _09._Sum_of_Odd_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int numbers = int.Parse(Console.ReadLine());
            int counter = 0;
            int sum = 0;
            for (int i = 1; i <= 100; i++)
            {
                if (i%2==1)
                {
                    sum += i;
                    Console.WriteLine(i);
                    counter++;
                }
                if (counter==numbers)
                {
                    break;
                }
            }
            Console.WriteLine($"Sum: {sum}");
        }
    }
}
