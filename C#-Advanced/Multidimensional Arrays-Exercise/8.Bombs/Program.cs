using System;
using System.Linq;

namespace _8.Bombs
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[,] matrix = new int[n, n];

            for (int i = 0; i < n; i++)
            {
                int[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();


                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = input[j];
                }
            }
            //coordinatres of Bombs
            string[] bombs = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            for (int b = 0; b < bombs.Length; b++)
            {
                int[] bombCoordinates = bombs[b].Split(",").Select(int.Parse).ToArray();
                int row = bombCoordinates[0];
                int col = bombCoordinates[1];

                int value = matrix[row, col];
                if (value > 0)
                {
                    matrix[row, col] = 0;
                    if (IsValid(matrix, row - 1, col) && matrix[row-1, col]>0)
                    {
                        matrix[row - 1, col] -= value;
                    }
                    if (IsValid(matrix, row - 1, col+1) && matrix[row - 1, col+1] > 0)
                    {
                        matrix[row - 1, col+1] -= value;
                    }
                    if (IsValid(matrix, row , col+1) && matrix[row, col+1] > 0)
                    {
                        matrix[row, col+1] -= value;
                    }
                    if (IsValid(matrix, row+1, col + 1) && matrix[row + 1, col+1] > 0)
                    {
                        matrix[row+1, col + 1] -= value;
                    }
                    if (IsValid(matrix, row+1, col) && matrix[row +1, col] > 0)
                    {
                        matrix[row+1, col] -= value;
                    }
                    if (IsValid(matrix, row + 1, col-1) && matrix[row + 1, col-1] > 0)
                    {
                        matrix[row + 1, col-1] -= value;
                    }
                    if (IsValid(matrix, row, col - 1) && matrix[row, col-1] > 0)
                    {
                        matrix[row, col - 1] -= value;
                    }
                    if (IsValid(matrix, row - 1, col-1) && matrix[row - 1, col-1] > 0)
                    {
                        matrix[row - 1, col-1] -= value;
                    }
                }
            }
            int aliveCells = 0;
            int sum = 0;
            foreach (var item in matrix)
            {
                if(item>0)
                {
                    aliveCells++;
                    sum += item;
                }
            }
            Console.WriteLine($"Alive cells: {aliveCells}");
            Console.WriteLine($"Sum: {sum}");

            for (int i = 0; i < n; i++)
            {
                for (int j= 0; j < n; j++)
                {
                    Console.Write(matrix[i,j]+" ");
                }
                Console.WriteLine();
            }

        }
        private static bool IsValid(int[,] matrix, int row, int col)
        {
            return row >= 0 && row < matrix.GetLength(0) && col >= 0 && col < matrix.GetLength(1);
        }
    }
}
