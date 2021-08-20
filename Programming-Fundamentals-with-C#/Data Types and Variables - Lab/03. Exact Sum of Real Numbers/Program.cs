using System;

namespace _03._Exact_Sum_of_Real_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            decimal sum = 0;
            //double sum1 = 0; - loss of precision
            for (int i = 0; i < num; i++)
            {
                decimal input = decimal.Parse(Console.ReadLine());
                //double input1 = double.Parse(Console.ReadLine());

                sum += input;
                //sum1 += input1;
            }

            Console.WriteLine(sum);
            //Console.WriteLine(sum1);

        }
    }
}
