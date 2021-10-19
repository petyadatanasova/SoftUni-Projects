using System;

namespace Selling
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            char[,] bakery = new char[n, n];
            int row = -1;
            int col = -1;
            int rowFirstPillar = -1;
            int colFirstPillar = -1;
            int rowSecondPillar = -1;
            int colSecondPillar = -1;
            int collectedMoney = 0;
            bool hasEnoghtMoney = false;
            for (int i = 0; i < n; i++)
            {
                char[] input = Console.ReadLine().ToCharArray();

                for (int j = 0; j < n; j++)
                {
                    bakery[i, j] = input[j];
                    if(bakery[i,j]=='S')
                    {
                        row = i;
                        col = j;
                    }
                    else if (bakery[i, j] == 'O')
                    {
                        if(rowFirstPillar==-1 && colFirstPillar==-1)
                        {
                            rowFirstPillar = i;
                            colFirstPillar = j;
                        }
                        else
                        {
                            rowSecondPillar = i;
                            colSecondPillar = j;
                        }
                    }
                }
            }

            string command = Console.ReadLine();

            while (collectedMoney<50)
            {
                bakery[row, col] = '-';
                if(command=="up")
                {
                    row -= 1;
                }
                else if (command=="down")
                {
                    row += 1;
                }
                else if (command == "right")
                {
                    col += 1;
                }
                else if (command == "left")
                {
                    col -= 1;
                }
                if(isValid(bakery, row, col))
                {

                    if(Char.IsDigit(bakery[row, col]))
                    {
                        collectedMoney += int.Parse(bakery[row, col].ToString());
                        bakery[row, col] = 'S';
                    }
                    else if(bakery[row, col]=='O')
                    {
                        if(row==rowFirstPillar && col==colFirstPillar)
                        {
                            bakery[row, col] = '-';
                            row = rowSecondPillar;
                            col = colSecondPillar;
                            bakery[row, col] = 'S';
                        }
                        else
                        {
                            bakery[row, col] = '-';
                            row = rowFirstPillar;
                            col = colFirstPillar;
                            bakery[row, col] = 'S';
                        }
                    }
                    else
                    {
                        bakery[row, col] = 'S';
                    }

                }
                else
                {
                    Console.WriteLine("Bad news, you are out of the bakery.");
                    Console.WriteLine($"Money: {collectedMoney}");
                    break;
                }
                if(collectedMoney>=50)
                {
                    hasEnoghtMoney = true;
                    break;
                }
                command = Console.ReadLine();
            }
            if(hasEnoghtMoney)
            {
                Console.WriteLine("Good news! You succeeded in collecting enough money!");
                Console.WriteLine($"Money: {collectedMoney}");
            }
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    Console.Write(bakery[i,j]);
                }
                Console.WriteLine();
            }




        }

        private static bool isValid(char[,] bakery, int row, int col)
        {
            return row >= 0 && row < bakery.GetLength(0) && col >= 0 && col < bakery.GetLength(1);

        }
    }
}
