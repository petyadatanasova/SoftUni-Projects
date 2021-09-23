using System;
using System.Linq;

namespace _5.SquareWithMaximumSum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] matrixSize = Console.ReadLine().Split(", ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int[,] matrix = new int[matrixSize[0], matrixSize[1]];
            for (int i = 0; i < matrixSize[0]; i++)
            {
                int[] rows = Console.ReadLine().Split(", ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
                for (int j = 0; j < matrixSize[1]; j++)
                {
                    matrix[i, j] = rows[j];
                }
            }
            int maxSum = int.MinValue;
            int maxRow = 0;
            int maxCol = 0;
           
                for (int i = 0; i < matrix.GetLength(0) - 1; i++)
                {

                    for (int j = i; j < matrix.GetLength(1) - 1; j++)
                    {
                        int sum = matrix[i, j] + matrix[i, j + 1] + matrix[i + 1, j] + matrix[i + 1, j + 1];
                        if (sum > maxSum)
                        {
                            maxSum = sum;
                            maxRow = i;
                            maxCol = j;
                        }

                    }
                }
                for (int i = maxRow; i < maxRow + 2; i++)
                {
                    for (int j = maxCol; j < maxCol + 2; j++)
                    {
                        Console.Write(matrix[i, j] + " ");
                    }
                    Console.WriteLine();
                }

                Console.WriteLine(maxSum);
            
        }
    }
}
