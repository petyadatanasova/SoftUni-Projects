using System;

namespace _02._Pascal_Triangle
{
    class Program
    {
        static void Main(string[] args)
        {
            int row = int.Parse(Console.ReadLine());
            int arrayLenght = row / row;
            int[] oldArray = new int[arrayLenght];
            for (int i = 0; i < row; i++)
            {
                int[] newArray = new int[arrayLenght];
                
                
                for (int j = 0; j < arrayLenght; j++)
                {
                    if(j == 0 || j ==arrayLenght-1)
                    {
                        newArray[j] = 1;
                    }
                    else
                    {
                        newArray[j] = oldArray[j] + oldArray[j - 1];
                    }

                }
                oldArray = newArray;
                arrayLenght++;
                foreach (var item in oldArray)
                {
                    Console.Write($"{item} ");
                    
                }
                Console.WriteLine();
            }




        }
    }
}
