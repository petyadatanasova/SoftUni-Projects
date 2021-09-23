using System;

namespace _7.KnightGame
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            char[,] matrix = new char[n, n];

            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = input[j];
                }
            }
            int MaxCounter = 0;
            int MaxRow = 0;
            int MaxCol = 0;
            int knightsRemoved = 0;
            while (true)
            {
                int counter = 0;
                for (int i = 0; i < n; i++)
                {
                    for (int j = 0; j < n; j++)
                    {
                        if(matrix[i,j]=='K')
                        {
                            if(IsValid(matrix, i - 2, j + 1) && matrix[i - 2, j + 1]=='K')
                            {
                                counter++;
                            }
                            if (IsValid(matrix, i - 1, j + 2) && matrix[i - 1, j + 2] == 'K')
                            {
                                counter++;
                            }
                           
                            if (IsValid(matrix, i + 1, j + 2) && matrix[i + 1, j + 2] == 'K')
                            {
                                counter++;
                            }
                            if (IsValid(matrix, i + 2, j + 1) && matrix[i + 2, j + 1] == 'K')
                            {
                                counter++;
                            }
                            if (IsValid(matrix, i + 2, j - 1) && matrix[i + 2, j - 1] == 'K')
                            {
                                counter++;
                            }
                            if (IsValid(matrix, i + 1, j - 2) && matrix[i + 1, j - 2] == 'K')
                            {
                                counter++;
                            }
                            if (IsValid(matrix, i -1, j - 2) && matrix[i - 1, j - 2] == 'K')
                            {
                                counter++;
                            }
                            if (IsValid(matrix, i - 2, j - 1) && matrix[i - 2, j - 1] == 'K')
                            {
                                counter++;
                            }
                            
                            if(counter>MaxCounter)
                            {
                                MaxCounter = counter;
                                MaxRow = i;
                                MaxCol = j;
                            }
                            counter = 0;
                        }
                    }
                }
                if(MaxCounter==0)
                {
                    break;
                }
                matrix[MaxRow, MaxCol] = '0';
                MaxCounter = 0;
                MaxRow = 0;
                MaxCol = 0;
                knightsRemoved++;
            }
            Console.WriteLine(knightsRemoved);
            //for (int i = 0; i < n; i++)
            //{
            //    for (int j = 0; j < n; j++)
            //    {
            //        Console.Write(matrix[i,j]);
            //    }
            //    Console.WriteLine();
            //}
        }

        private static bool IsValid(char[,] matrix, int row, int col)
        {
            return row >= 0 && row < matrix.GetLength(0) && col >= 0 && col < matrix.GetLength(1);
        }
    }
}
