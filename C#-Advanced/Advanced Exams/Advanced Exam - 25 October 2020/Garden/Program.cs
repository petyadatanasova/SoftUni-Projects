using System;
using System.Collections.Generic;
using System.Linq;

namespace Garden
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] size = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();


            int[,] garden = new int[size[0], size[1]];

            for (int i = 0; i < size[0]; i++)
            {
                for (int j = 0; j < size[1]; j++)
                {
                    garden[i, j] = 0;
                }
            }
            string flower = Console.ReadLine();
            while (flower != "Bloom Bloom Plow")
            {
                int[] splitted = flower.Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
                int flowerRow = splitted[0];
                int flowerCol = splitted[1];
                if (isValid(garden,splitted[0], splitted[1]))
                {
                    garden[flowerRow, flowerCol]++;
                    //up
                    int workingRow = flowerRow - 1;
                    int workingCol = flowerCol;

                    while (isValid(garden, workingRow, workingCol))
                    {
                        garden[workingRow, workingCol]++;
                        workingRow--;
                    }
                    //down
                    workingRow = flowerRow + 1;
                    workingCol = flowerCol;
                    while (isValid(garden, workingRow, workingCol))
                    {
                        garden[workingRow, workingCol]++;
                        workingRow++;
                    }
                    //left
                    workingRow = flowerRow;
                    workingCol = flowerCol - 1;
                    while (isValid(garden, workingRow, workingCol))
                    {
                        garden[workingRow, workingCol]++;
                        workingCol--;
                    }
                    //right
                    workingRow = flowerRow;
                    workingCol = flowerCol + 1;
                    while (isValid(garden, workingRow, workingCol))
                    {
                        garden[workingRow, workingCol]++;
                        workingCol++;
                    }
                }
                else
                {
                    Console.WriteLine("Invalid coordinates.");
                }

                flower = Console.ReadLine();
            }

            for (int i = 0; i < garden.GetLength(0); i++)
            {
                for (int j = 0; j < garden.GetLength(1); j++)
                {
                    Console.Write(garden[i,j]+" ");    
                }
                Console.WriteLine();
            }

        }

        private static bool isValid(int[,] garden, int row, int col)
        {
            return row >= 0 && row < garden.GetLength(0) && col >= 0 && col < garden.GetLength(1);
        }
    }
}
