using System;

namespace _7.PascalTriangle
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            long[][] array = new long[n][];
            for (int i = 0; i < n; i++)
            {
                array[i] = new long[i + 1];
                array[i][0] = 1;
                array[i][array[i].Length - 1] = 1;
                for (int j = 1; j < array[i].Length-1; j++)
                {
                    array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
                }
            }
            for (int i = 0; i < array.Length; i++)
            {
                for (int j = 0; j < array[i].Length; j++)
                {
                    Console.Write(array[i][j]+" ");
                }
                Console.WriteLine();
            }
        }
    }
}
