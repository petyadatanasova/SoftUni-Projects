using System;
using System.Linq;

namespace _1.DiagonalDifference
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int[,] matrix = new int[n, n];

            for (int i = 0; i < n; i++)
            {
                int[] rows = Console.ReadLine().Split().Select(int.Parse).ToArray();
                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = rows[j];
                }
            }

            int primaryDiagonalSum = 0;
            int secondaryDiaonalSum = 0;

            for (int i = 0; i < n; i++)
            {
                for (int j = i; j <=i ; j++)
                {
                    primaryDiagonalSum += matrix[i, j];
                }
            }

            for (int i = n-1; i >= 0; i--)
            {
                for (int j = n-i-1; j < n-i; j++)
                {
                    secondaryDiaonalSum += matrix[i, j];
                }
            }
            Console.WriteLine(Math.Abs(primaryDiagonalSum-secondaryDiaonalSum));
        }
    }
}
