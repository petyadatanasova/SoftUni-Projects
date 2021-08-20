using System;
using System.Linq;

namespace _05._Top_Integers_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int countLower = 0;

            for (int i = 0; i < nums.Length; i++)
            {
                countLower = 0;
                for (int j = i+1; j < nums.Length; j++)
                {
                    if(nums[i] <= nums[j])
                    {
                        countLower++;
                    }
                }
                if(countLower==0)
                {
                    Console.Write(nums[i] +" ");
                }
            }
        }
    }
}
