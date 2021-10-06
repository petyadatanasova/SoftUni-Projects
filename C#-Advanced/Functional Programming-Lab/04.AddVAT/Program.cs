using System;
using System.Linq;

namespace _04.AddVAT
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] prices = Console.ReadLine().Split(", ").Select(double.Parse).ToArray();

            Func <double, double> func = price=>price=price*1.20;

            foreach (var price in prices)
            {
                Console.WriteLine($"{func(price):F2}");
            }
        }
    }
}
