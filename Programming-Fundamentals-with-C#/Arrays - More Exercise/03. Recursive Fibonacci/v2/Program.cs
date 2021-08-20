using System;

namespace _03._Recursive_Fibonacci_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int wantedNum = int.Parse(Console.ReadLine());
            int[] fibonacci = new int[wantedNum];
            if (wantedNum==1)
            {
                fibonacci[0] = 1;
                Console.WriteLine(fibonacci[wantedNum - 1]);
                return;
            }
            fibonacci[0] = 1;
            fibonacci[1] = 1;
            if (wantedNum == 2)
            {
                Console.WriteLine(fibonacci[wantedNum - 1]);
                return;
            }
               for (int i = 2; i < wantedNum; i++)
                {

                    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];

                }
            
            Console.WriteLine(fibonacci[wantedNum-1]);
        }
    }
}
