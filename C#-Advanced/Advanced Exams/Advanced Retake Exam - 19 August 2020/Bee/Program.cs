using System;

namespace Bee
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            char[,] beeTerritory = new char[n, n];
            int row = -1;
            int col = -1;
            int pollinatedFlowers = 0;
            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                for (int j = 0; j < n; j++)
                {
                    beeTerritory[i, j] = input[j];
                    if (beeTerritory[i, j] == 'B')
                    {
                        row = i;
                        col = j;
                    }
                }
            }

            string command = Console.ReadLine();
            while (command != "End")
            {
                beeTerritory[row, col] = '.';

                row = GetRow(row, command);
                col = GetCol(col, command);
                if (isValid(beeTerritory, row, col))
                {
                    if (beeTerritory[row, col] == 'f')
                    {
                        beeTerritory[row, col] = 'B';
                        pollinatedFlowers++;
                    }
                    else if (beeTerritory[row, col] == 'O')
                    {
                        beeTerritory[row, col] = '.';
                        row = GetRow(row, command);
                        col = GetCol(col, command);
                        if (isValid(beeTerritory, row, col))
                        {
                            if (beeTerritory[row, col] == 'f')
                            {
                                beeTerritory[row, col] = 'B';
                                pollinatedFlowers++;
                            }
                            else
                            {
                                beeTerritory[row, col] = 'B';
                            }
                        }
                    }
                    else
                    {
                        beeTerritory[row, col] = 'B';
                    }
                }
                else
                {
                    Console.WriteLine("The bee got lost!");
                    break;
                }

                command = Console.ReadLine();
            }

            if(pollinatedFlowers<5)
            {
                Console.WriteLine($"The bee couldn't pollinate the flowers, she needed {5-pollinatedFlowers} flowers more");
            }
            else
            {
                Console.WriteLine($"Great job, the bee managed to pollinate {pollinatedFlowers} flowers!");
            }
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    Console.Write(beeTerritory[i,j]);
                }
                Console.WriteLine();
            }

        }

        private static int GetCol(int col, string command)
        {
            if (command == "left")
            {
                return col -= 1;

            }
            else if (command == "right")
            {
                return col += 1;
            }
            return col;
        }

        private static int GetRow(int row, string command)
        {
            if (command == "up")
            {
                return row -= 1;

            }
            else if (command == "down")
            {
                return row += 1;
            }
            return row;
        }

        private static bool isValid(char[,] beeTerritory, int row, int col)
        {
            return row >= 0 && row < beeTerritory.GetLength(0) && col >= 0 && col < beeTerritory.GetLength(1);
        }
    }
}
