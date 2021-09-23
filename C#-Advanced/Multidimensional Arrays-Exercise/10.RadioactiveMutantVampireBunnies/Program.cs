using System;
using System.Collections.Generic;
using System.Linq;

namespace _10.RadioactiveMutantVampireBunnies
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] size = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();

            char[,] matrix = new char[size[0], size[1]];
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                string input = Console.ReadLine();
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i, j] = input[j];
                }
            }
            string commands = Console.ReadLine();
            int playerRow = 0;
            int playerCol = 0;

            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    if(matrix[i,j]=='P')
                    {
                        playerRow = i;
                        playerCol = j;

                    }
                }
            }
            bool hasWon = false;
            bool hasDied = false;
            for (int c = 0; c < commands.Length; c++)
            {
                char command = commands[c];
                if(command=='U')
                {
                    if(IsValid(matrix, playerRow-1, playerCol) && matrix[playerRow-1, playerCol]=='.')
                    {
                        matrix[playerRow, playerCol] = '.';
                        matrix[playerRow - 1, playerCol] = 'P';
                        playerRow = playerRow - 1;
                    }
                    else if(IsValid(matrix, playerRow - 1, playerCol) && matrix[playerRow - 1, playerCol] == 'B')
                    {
                        hasDied = true;
                        matrix[playerRow, playerCol] = '.';
                        playerRow = playerRow - 1;
                    }
                    else if(!IsValid(matrix, playerRow - 1, playerCol))
                    {
                        hasWon = true;
                        matrix[playerRow, playerCol] = '.';
                    }
                    //Print(matrix);
                    //Console.WriteLine();
                }
                else if (command=='D')
                {
                    if (IsValid(matrix, playerRow + 1, playerCol) && matrix[playerRow + 1, playerCol] == '.')
                    {
                        matrix[playerRow, playerCol] = '.';
                        matrix[playerRow + 1, playerCol] = 'P';
                        playerRow = playerRow + 1;
                    }
                    else if (IsValid(matrix, playerRow + 1, playerCol) && matrix[playerRow + 1, playerCol] == 'B')
                    {
                        hasDied = true;
                        matrix[playerRow, playerCol] = '.';
                        playerRow = playerRow + 1;
                    }
                    else if (!IsValid(matrix, playerRow + 1, playerCol))
                    {
                        hasWon = true;
                        matrix[playerRow, playerCol] = '.';
                    }
                    //Print(matrix);
                    //Console.WriteLine();
                }
                else if (command == 'L')
                {
                    if (IsValid(matrix, playerRow, playerCol-1) && matrix[playerRow, playerCol-1] == '.')
                    {
                        matrix[playerRow, playerCol] = '.';
                        matrix[playerRow, playerCol-1] = 'P';
                        playerCol = playerCol - 1;
                    }
                    else if (IsValid(matrix, playerRow, playerCol-1) && matrix[playerRow, playerCol-1] == 'B')
                    {
                        hasDied = true;
                        matrix[playerRow, playerCol] = '.';
                        playerCol = playerCol - 1;
                    }
                    else if (!IsValid(matrix, playerRow, playerCol-1))
                    {
                        hasWon = true;
                        matrix[playerRow, playerCol] = '.';
                    }
                    //Print(matrix);
                    //Console.WriteLine();
                }
                else if (command == 'R')
                {
                    if (IsValid(matrix, playerRow, playerCol + 1) && matrix[playerRow, playerCol + 1] == '.')
                    {
                        matrix[playerRow, playerCol] = '.';
                        matrix[playerRow, playerCol + 1] = 'P';
                        playerCol = playerCol + 1;
                    }
                    else if (IsValid(matrix, playerRow, playerCol + 1) && matrix[playerRow, playerCol + 1] == 'B')
                    {
                        hasDied = true;
                        matrix[playerRow, playerCol] = '.';
                        playerCol = playerCol + 1;
                    }
                    else if (!IsValid(matrix, playerRow, playerCol + 1))
                    {
                        hasWon = true;
                        matrix[playerRow, playerCol] = '.';
                    }
                    //Print(matrix);
                    //Console.WriteLine();
                }
                List<int[]> bunniesCoordinates = new List<int[]>();
                for (int i = 0; i < matrix.GetLength(0); i++)
                {
                    for (int j = 0; j < matrix.GetLength(1); j++)
                    { 
                        if(matrix[i,j]=='B')
                        {
                            bunniesCoordinates.Add(new int[2] { i, j });
                        }
                    }
                }
                for (int b = 0; b < bunniesCoordinates.Count; b++)
                {
                    int row = bunniesCoordinates[b][0];
                    int col = bunniesCoordinates[b][1];
                
                            if(IsValid(matrix, row-1, col))
                            {
                                if(matrix[row - 1, col] == 'P')
                                {
                                    hasDied = true;
                                }
                                matrix[row - 1, col] = 'B';
                            }
                            if (IsValid(matrix, row + 1, col))
                            {
                                if (matrix[row + 1, col] == 'P')
                                {
                                    hasDied = true;
                                }
                                matrix[row + 1,col] = 'B';
                            }
                            if (IsValid(matrix, row, col-1))
                            {
                                if (matrix[row, col-1] == 'P')
                                {
                                    hasDied = true;
                                }
                                matrix[row, col-1] = 'B';
                            }
                            if (IsValid(matrix,row, col+ 1))
                            {
                                if (matrix[row, col + 1] == 'P')
                                {
                                    hasDied = true;
                                }
                                matrix[row, col + 1] = 'B';
                            }
                            //Print(matrix);
                            //Console.WriteLine();
                        
                    
                }
               
                if(hasWon || hasDied)
                {
                    break;
                }

            }
            if (hasWon)
            {
                Print(matrix);
                Console.WriteLine($"won: {playerRow} {playerCol}");

            }
            else if (hasDied)
            {
                Print(matrix);
                Console.WriteLine($"dead: {playerRow} {playerCol}");

            }

        }

        private static void Print(char[,] matrix)
        {
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    Console.Write(matrix[i,j]);
                }
                Console.WriteLine();
            }
        }

        private static bool IsValid(char[,] matrix, int row, int col)
        {
            return row >= 0 && row < matrix.GetLength(0) && col >= 0 && col < matrix.GetLength(1);
        }
    }
}
