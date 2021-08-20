using System;
using System.Linq;

namespace _05._Longest_Increasing_Subsequence_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split().Select(int.Parse).ToArray();

            int[] lis;
            int[] len = new int[nums.Length];
            int[] prev = new int[nums.Length];
            int maxLenght = int.MinValue;
            int lastIndex = 0;
            //int[] result = new int[maxLenght];
            //for (int i = 0; i < len.Length; i++)                - one alternative == len[i] = 1;
            //{
            //    len[i] = 1;
            //}

            for (int i = 0; i < nums.Length; i++)
            {
                 len[i] = 1;
                prev[i] = -1;
                for (int j = 0; j < i; j++)
                {
                     if (nums[i] > nums[j] && len[j] >= len[i])
                    {
                        
                        len[i] += 1;
                        prev[i] = j;
                       
                       
                    }

                }
                if (len[i] > maxLenght)
                {
                    maxLenght = len[i];
                    lastIndex = i;
                   
                }
            }
            lis = new int[maxLenght];
            for (int i = maxLenght-1; i >= 0; i--)
            {
                lis[i] = nums[lastIndex];
                lastIndex = prev[lastIndex];

            }

           Console.WriteLine(string.Join(" ",lis));
      


        }
    }
}
