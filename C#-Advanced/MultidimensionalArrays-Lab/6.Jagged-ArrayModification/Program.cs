using System;
using System.Linq;

namespace _6.Jagged_ArrayModification
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[][] jaggedArray = new int[n][];
            for (int i = 0; i < n; i++)
            {
                int[] rows = Console.ReadLine().Split().Select(int.Parse).ToArray();
                jaggedArray[i] = new int[rows.Length];
                for (int j = 0; j < rows.Length; j++)
                {
                    jaggedArray[i][j] = rows[j];

                }
            }
            string[] command = Console.ReadLine().Split();
            while (command[0]!="END")
            {
                if(command[0]=="Add")
                {
                    int row = int.Parse(command[1]);
                    int col = int.Parse(command[2]);
                    int value = int.Parse(command[3]);

                    if((row>=n || row<0) || (jaggedArray[row].Length <= col || col < 0))
                    {
                        Console.WriteLine("Invalid coordinates");
                        command = Console.ReadLine().Split();
                        continue;
                    }
                    jaggedArray[row][col] += value;

                }
                else if (command[0]=="Subtract")
                {
                    int row = int.Parse(command[1]);
                    int col = int.Parse(command[2]);
                    int value = int.Parse(command[3]);

                    if ((row>= n || row < 0) || (jaggedArray[row].Length <= col || col< 0))
                    {
                        Console.WriteLine("Invalid coordinates");
                        command = Console.ReadLine().Split();
                        continue;
                    }
                    jaggedArray[row][col] -= value;
                }


                command = Console.ReadLine().Split();
            }
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < jaggedArray[i].Length; j++)
                {
                    Console.Write(jaggedArray[i][j]+" ");
                }
                Console.WriteLine();
            }
        }
    }
}
