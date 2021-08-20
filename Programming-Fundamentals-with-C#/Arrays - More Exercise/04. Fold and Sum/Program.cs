using System;
using System.Linq;

namespace _04._Fold_and_Sum
{
    class Program
    {
        static void Main(string[] args)
        {

            int[] numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();

            int[] firstRow = new int[numbers.Length / 2];
            int[] secondRow = new int[numbers.Length / 2];
            int k = numbers.Length / 4;
            //1. First part of top row - working
            for (int i = 0; i < firstRow.Length/2; i++)
            {
                for (int j = firstRow.Length / 2; j >= firstRow.Length / 2-(i+1); j--)   // (int j = i; j < i+1; j++)
                {
                    firstRow[i] = numbers[j];
                }
            }
            //2. Middle part - bottow row  - working
            for (int i = 0; i < firstRow.Length ; i++)
            {
                
                    secondRow[i] = numbers[numbers.Length / 4 + i];
                
            }
            //3. second part of top row
            int step = 1;
            
            for (int i = k; i < k*2; i++)
            {
               
                for (int j = (k*4)-step; j >= (k * 4) -step; j--)
                {
                    firstRow[i] = numbers[j];
                }
                step++;
            }

            int[] result = new int[firstRow.Length];
            for (int i = 0; i < firstRow.Length; i++)
            {
                result[i] = firstRow[i] + secondRow[i];
            }
            Console.WriteLine(string.Join(" ",result));
            //Console.WriteLine(string.Join(" ",secondRow));



        }
    }
}
