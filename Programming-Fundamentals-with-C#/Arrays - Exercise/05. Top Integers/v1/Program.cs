using System;
using System.Linq;

namespace _05._Top_Integers
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] array = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int counter = 0;
            
            for (int i = 0; i < array.Length ; i++)
            {
                //bool isBigger =true;
                for (int j = i+1; j < array.Length ; j++)
                {

                    if (array[i] <= array[j])
                    {
                        counter++;
                        // isBigger = false;
                    }
                }
                if (counter == 0) //(isBigger)
                {
                    Console.Write($"{array[i]} ");
                }
                counter = 0;
            }

        }
    }
}
