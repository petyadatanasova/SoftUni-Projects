using System;

namespace _02._Print_Numbers_in_Reverse_Order
{
    class Program
    {
        static void Main(string[] args)
        {
            

            //4. reverse in Console Writeline at the end

            //int n = int.Parse(Console.ReadLine());
            //int[] arrayNums = new int[n];

            //for (int i = 0; i < n; i++)
            //{
            //    arrayNums[i] = int.Parse(Console.ReadLine());
            //}

            //for (int i = 0; i < n; i++)
            //{
            //    Console.Write(arrayNums[n-1-i]+" ");
            //}



            //3.directly reverse upon reading the numbers

            //int n = int.Parse(Console.ReadLine());
            //int[] reverseArray = new int[n];
            //for (int i = 0; i < n; i++)
            //{
            //    int num = int.Parse(Console.ReadLine());
            //    reverseArray[n - 1 - i] = num;
            //    //reverseArray[n - 1 - i] = int.Parse(Console.ReadLine());

            //}

            //Console.WriteLine(string.Join(" ",reverseArray));


            //2. reverse with new array
            //int n = int.Parse(Console.ReadLine());
            //int[] arrayNums = new int[n];
            //int[] reverseArrayNums = new int[n];

            //for (int i = 0; i < n; i++)
            //{
            //    arrayNums[i] = int.Parse(Console.ReadLine());
            //    reverseArrayNums[n - 1 - i] = arrayNums[i];
            //}

            //Console.WriteLine(string.Join(" ",reverseArrayNums));


            // 1. reverse with temp
            int n = int.Parse(Console.ReadLine());
            int[] arrayNums = new int[n];
            for (int i = 0; i < n; i++)
            {
                int num = int.Parse(Console.ReadLine());
                arrayNums[i] = num;
            }

            for (int i = 0; i < n / 2; i++)
            {
                int temp = arrayNums[i];
                arrayNums[i] = arrayNums[n - 1 - i];
                arrayNums[n - 1 - i] = temp;
            }

            foreach (var item in arrayNums)
            {
                Console.Write(item + " ");
            }

        }
    }
}
