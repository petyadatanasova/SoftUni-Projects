using System;
using System.Linq;

namespace _2.SumMatrixColumns
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] matrixSize = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
            int[,] matrix = new int[matrixSize[0], matrixSize[1]];
            for (int i = 0; i < matrixSize[0]; i++)
            {
                int[] matrixRow = Console.ReadLine().Split().Select(int.Parse).ToArray(); 
                for (int j= 0; j < matrixSize[1]; j++)
                {
                    matrix[i, j] = matrixRow[j];
                }
            }

            for (int j = 0; j < matrix.GetLength(1); j++)
            {
                int sum = 0;
                for (int i = 0; i < matrix.GetLength(0); i++)
                {
                    sum += matrix[i, j];
                }
                Console.WriteLine(sum);
            }
        }
    }
}
