using System;

namespace _02._Pascal_Triangle_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            // int[] array = new int[n];
            int[] newArray = new int[n];
            //1 
            //1 1
            //1 2 1
            //1 3 3 1
            for (int i = 0; i < n; i++)
            {
                int[] array = new int[i + 1];
                array[0] = 1;
                array[i] = 1;
              

                for (int j = 1; j < i; j++)
                {

                    array[j] = newArray[j] + newArray[j - 1];
                }
                newArray = array;
                Console.Write(string.Join(" ",array));
    
                Console.WriteLine();
            }



        }

    }
}

