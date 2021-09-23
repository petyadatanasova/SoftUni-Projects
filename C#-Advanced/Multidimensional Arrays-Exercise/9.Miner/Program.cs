using System;
using System.Linq;

namespace _9.Miner
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            char[,] matrix = new char[n, n];
            string[] commands = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);

            for (int i = 0; i < n; i++)
            {
                char[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(char.Parse).ToArray();
                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = input[j];
                }
            }
            int totalCoalInMine = 0;
            int startRow = 0;
            int startCol = 0;
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    if(matrix[i,j]=='c')
                    {
                        totalCoalInMine++;
                    }
                    if(matrix[i,j]=='s')
                    {
                        startRow = i;
                        startCol = j;
                    }
                }
            }
            int coalCollected = 0;
            for (int c = 0; c < commands.Length; c++)
            {
                string command = commands[c];

                if(command=="up")
                {
                    if(IsValid(matrix, startRow-1, startCol))
                    {
                        if(matrix[startRow - 1, startCol] == 'c')
                        {
                            coalCollected++;
                        }
                        else if (matrix[startRow - 1, startCol] == 'e')
                        {
                            Console.WriteLine($"Game over! ({startRow - 1}, {startCol})");
                            Environment.Exit(0);
                        }
                        matrix[startRow, startCol] = '*';
                        matrix[startRow - 1, startCol] = 's';
                        startRow = startRow - 1;
                    }
                }
                else if (command=="down")
                {
                    if (IsValid(matrix, startRow + 1, startCol))
                    {
                        if (matrix[startRow + 1, startCol] == 'c')
                        {
                            coalCollected++;
                        }
                        else if (matrix[startRow + 1, startCol] == 'e')
                        {
                            Console.WriteLine($"Game over! ({startRow + 1}, {startCol})");
                            Environment.Exit(0);
                        }
                        matrix[startRow, startCol] = '*';
                        matrix[startRow + 1, startCol] = 's';
                        startRow = startRow + 1;
                    }
                }
                else if (command=="left")
                {
                    if (IsValid(matrix, startRow, startCol-1))
                    {
                        if (matrix[startRow, startCol-1] == 'c')
                        {
                            coalCollected++;
                        }
                        else if (matrix[startRow, startCol-1] == 'e')
                        {
                            Console.WriteLine($"Game over! ({startRow}, {startCol-1})");
                            Environment.Exit(0);
                        }
                        matrix[startRow, startCol] = '*';
                        matrix[startRow, startCol-1] = 's';
                        startCol = startCol - 1;
                    }
                }
                else if (command=="right")
                {
                    if (IsValid(matrix, startRow, startCol + 1))
                    {
                        if (matrix[startRow, startCol + 1] == 'c')
                        {
                            coalCollected++;
                        }
                        else if (matrix[startRow, startCol + 1] == 'e')
                        {
                            Console.WriteLine($"Game over! ({startRow}, {startCol + 1})");
                            Environment.Exit(0);
                        }
                        matrix[startRow, startCol] = '*';
                        matrix[startRow, startCol + 1] = 's';
                        startCol = startCol + 1;
                    }
                }

                if(coalCollected==totalCoalInMine)
                {
                    Console.WriteLine($"You collected all coals! ({startRow}, {startCol})");
                    Environment.Exit(0);
                }

            }
            Console.WriteLine($"{totalCoalInMine-coalCollected} coals left. ({startRow}, {startCol})");
           
        }
        private static bool IsValid(char[,] matrix, int row, int col)
        {
            return row >= 0 && row < matrix.GetLength(0) && col >= 0 && col < matrix.GetLength(1);
        }
    }
}
