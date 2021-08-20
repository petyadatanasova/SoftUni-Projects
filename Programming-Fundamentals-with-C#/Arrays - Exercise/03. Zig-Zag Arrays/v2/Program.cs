using System;
using System.Linq;

namespace _03._Zig_Zag_Arrays_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int[] arr1 = new int[n];
            int[] arr2 = new int[n];


            for (int i = 0; i < n; i++)
            {
                int[] numArr = Console.ReadLine().Split().Select(int.Parse).ToArray();

                if(i%2==0)
                {
                    arr1[i] = numArr[0];
                    arr2[i] = numArr[1];
                }
                if(i%2==1)
                {
                    arr1[i] = numArr[1];
                    arr2[i] = numArr[0];
                }
            }

            Console.WriteLine(string.Join(" ",arr1));
            Console.WriteLine(string.Join(" ",arr2));



        }
    }
}
