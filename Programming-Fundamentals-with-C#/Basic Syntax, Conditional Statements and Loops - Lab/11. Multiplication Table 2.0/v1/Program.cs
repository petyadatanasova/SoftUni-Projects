using System;

namespace _11._Multiplication_Table_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int multiplier = int.Parse(Console.ReadLine());

            if (multiplier <= 10)
            {
                for (int i = multiplier; i <= 10; i++)
                {
                    int sum = num * i;
                    Console.WriteLine($"{num} X {i} = {sum}");
                }
            }
            else
            {
                int sum = num * multiplier;
                Console.WriteLine($"{num} X {multiplier} = {sum}");
            }
        }
    }
}
