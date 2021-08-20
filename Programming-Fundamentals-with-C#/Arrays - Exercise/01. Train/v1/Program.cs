using System;

namespace _01._Train
{
    class Program
    {
        static void Main(string[] args)
        {
            int wagonsCount = int.Parse(Console.ReadLine());
            int sumPeople = 0;
            int[] train = new int[wagonsCount];
            for (int i = 0; i < wagonsCount; i++)
            {
                int numPeople = int.Parse(Console.ReadLine());
                train[i] = numPeople;
                sumPeople += numPeople;
            }
            Console.WriteLine(string.Join(" ", train));
            //foreach (var wagons in train)
            //{
            //    Console.Write($"{wagons} ");
            //}
            //Console.WriteLine();
            Console.WriteLine(sumPeople);
            




        }
    }
}
