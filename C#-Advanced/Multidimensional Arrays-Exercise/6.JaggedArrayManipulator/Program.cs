using System;
using System.Linq;

namespace _6.JaggedArrayManipulator
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            double[][] array = new double[n][];
            for (int i = 0; i < n; i++)
            {
                double[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(double.Parse).ToArray();
                array[i] = input;
                //array[i] = new double[input.Length];
                //for (int j = 0; j < array[i].Length; j++)
                //{
                //    array[i][j] = input[j];
                //}
            }

            for (int i = 0; i < array.Length - 1; i++)
            {
                if (array[i].Length == array[i + 1].Length)
                {
                    for (int j = 0; j < array[i].Length; j++)
                    {
                        array[i][j] *= 2;
                        array[i+1][j] *= 2;
                    }
                }
                else
                {
                    for (int j = 0; j < array[i].Length; j++)
                    {
                        array[i][j] /= 2;
                       
                    }
                    for (int j = 0; j < array[i+1].Length; j++)
                    {
                        array[i + 1][j] /= 2;
                    }
                }

            }


            string[] command = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            while (command[0] != "End")
            {
                int row = int.Parse(command[1]);
                int col = int.Parse(command[2]);
                int value = int.Parse(command[3]);
                if (IsValid(array, row, col))
                {
                    if (command[0] == "Add")
                    {
                        array[row][col] += value;
                    }
                    else if (command[0] == "Subtract")
                    {
                        array[row][col] -= value;
                    }
                }


                command = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            }
            Print(array, array.Length);
        }

        private static void Print(double[][] array, int row)

        {
            for (int i = 0; i < row; i++)
            {
                for (int j = 0; j < array[i].Length; j++)
                {
                    Console.Write(array[i][j] + " ");
                }
                Console.WriteLine();
            }
        }

        private static bool IsValid(double[][] array, int row, int col)
        {
            return row >= 0 && row < array.Length && col >= 0 && col < array[row].Length;

        }


    }
}



