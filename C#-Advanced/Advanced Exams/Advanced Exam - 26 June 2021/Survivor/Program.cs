using System;

namespace Survivor
{
    class Program
    {
        static void Main(string[] args)
        {
            int rows = int.Parse(Console.ReadLine());
            string[][] beach = new string[rows][];

            for (int i = 0; i < rows; i++)
            {
                beach[i] = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            }
            string[] command = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            int countOfCollected = 0;
            int countOfOpponentsTokens = 0;
            while (command[0] != "Gong")
            {
                if (command[0] == "Find")
                {
                    int row = int.Parse(command[1]);
                    int col = int.Parse(command[2]);
                    if (isValid(beach, row, col))
                    {
                        if (beach[row][col] == "T")
                        {
                            countOfCollected++;
                            beach[row][col] = "-";
                        }
                    }


                }
                else if (command[0] == "Opponent")
                {
                    int row = int.Parse(command[1]);
                    int col = int.Parse(command[2]);
                    string direction = command[3];
                    if (isValid(beach, row, col))
                    {
                        if (beach[row][col] == "T")
                        {
                            countOfOpponentsTokens++;
                            beach[row][col] = "-";
                        }
                        for (int i = 0; i < 3; i++)
                        {
                            if(direction=="up" && isValid(beach, row-1, col))
                            {
                                row -= 1;
                                if (beach[row][col] == "T")
                                {
                                    countOfOpponentsTokens++;
                                    beach[row][col] = "-";
                                }
                            }
                            else if (direction == "down" && isValid(beach, row + 1, col))
                            {
                                row += 1;
                                if (beach[row][col] == "T")
                                {
                                    countOfOpponentsTokens++;
                                    beach[row][col] = "-";
                                }
                            }
                            else if (direction == "right" && isValid(beach, row, col+1))
                            {
                                col += 1;
                                if (beach[row][col] == "T")
                                {
                                    countOfOpponentsTokens++;
                                    beach[row][col] = "-";
                                }
                            }
                            else if (direction == "left" && isValid(beach, row, col - 1))
                            {
                                col -= 1;
                                if (beach[row][col] == "T")
                                {
                                    countOfOpponentsTokens++;
                                    beach[row][col] = "-";
                                }
                            }
                        }
                    }
                }

                command = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            }
            for (int i = 0; i < beach.Length; i++)
            {
                for (int j = 0; j < beach[i].Length; j++)
                {
                    Console.Write(beach[i][j]+" ");
                }
                Console.WriteLine();
            }
            Console.WriteLine($"Collected tokens: {countOfCollected}");
            Console.WriteLine($"Opponent's tokens: {countOfOpponentsTokens}");
        }

        private static bool isValid(string[][] beach, int row, int col)
        {
            return row >= 0 && row < beach.Length && col >= 0 && col < beach[row].Length;
        }
    }
}
