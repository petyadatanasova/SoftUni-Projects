using System;

namespace Snake
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            char[,] territory = new char[n, n];
            int row = -1;
            int col = -1;
            int foodQuantity = 0;
            int rowBurrow1 = -1;
            int colBurrow1 = -1;
            int rowBurrow2 = -1;
            int colBurrow2 = -1;
            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                for (int j = 0; j < n; j++)
                {
                    territory[i, j] = input[j];
                    if(territory[i,j]=='S')
                    {
                        row = i;
                        col = j;
                    }
                    if(territory[i, j] == 'B' && rowBurrow1==-1 && colBurrow1==-1)
                    {
                        rowBurrow1 = i;
                        colBurrow1 = j;
                    }
                    if (territory[i, j] == 'B' && rowBurrow1 != -1 && colBurrow1 != -1)
                    {
                        rowBurrow2 = i;
                        colBurrow2 = j;
                    }
                }
            }
            string direction = Console.ReadLine();
            while (true)
            {
                territory[row, col] = '.';

                row = GetRow(row, direction);
                col = GetCol(col, direction);

                if(isValid(territory, row, col))
                {
                    if(territory[row,col]=='*')
                    {
                        territory[row, col] = 'S';
                        foodQuantity++;
                    }
                    else if (territory[row, col]=='B')
                    {
                        if(row==rowBurrow1 && col==colBurrow1)
                        {
                            territory[row, col] = '.';
                            territory[rowBurrow2, colBurrow2] = 'S';
                            row = rowBurrow2;
                            col = colBurrow2;
                        }
                        else if (row == rowBurrow2 && col == colBurrow2)
                        {
                            territory[row, col] = '.';
                            territory[rowBurrow1, colBurrow1] = 'S';
                            row = rowBurrow1;
                            col = colBurrow1;
                        }
                    }
                    else
                    {
                        territory[row, col] = 'S';
                    }
                }
                else
                {
                    Console.WriteLine("Game over!");
                    break;
                }
                if(foodQuantity >=10)
                {
                    Console.WriteLine("You won! You fed the snake.");
                    break;
                }

                direction = Console.ReadLine();

            }
            
            Console.WriteLine($"Food eaten: {foodQuantity}");
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    Console.Write(territory[i, j]);
                }
                Console.WriteLine();
            }
        }

        private static bool isValid(char[,] territory, int row, int col)
        {
            return row >= 0 && row < territory.GetLength(0) && col >= 0 && col < territory.GetLength(1);
        }

        private static int GetCol(int col, string direction)
        {
            if (direction == "left")
            {
                col -= 1;

            }
            else if (direction == "right")
            {
                col += 1;

            }
            return col;
        }

        private static int GetRow(int row, string direction)
        {
            if(direction=="up")
            {
                row -= 1;
                
            }
            else if (direction=="down")
            {
                row += 1;
               
            }
            return row;
        }
    }
}
