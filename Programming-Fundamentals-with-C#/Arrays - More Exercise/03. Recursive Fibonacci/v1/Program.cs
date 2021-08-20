using System;
using System.Numerics;

namespace _03._Recursive_Fibonacci
{
    class Program
    {
        static void Main(string[] args)
        {
            long wantedNumber = long.Parse(Console.ReadLine());
            long[] fibonacciArray = new long[(int)wantedNumber];
            if(wantedNumber==1 || wantedNumber==2)
            {
                Console.WriteLine(1);
                return;
            }
            fibonacciArray[0] = 1;
            fibonacciArray[1] = 1;
            for (long i = 2; i < wantedNumber; i++)
            {
               fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
            }

            
                Console.WriteLine(fibonacciArray[wantedNumber-1]);
            
            

        }
    }
}
