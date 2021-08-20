using System;
using System.Linq;

namespace _08._Magic_Sum_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int num = int.Parse(Console.ReadLine());


            for (int i = 0; i < nums.Length; i++)
            {
                for (int j = i+1; j < nums.Length; j++)
                {
                    if(nums[i]+nums[j] == num)
                    {
                        Console.WriteLine($"{nums[i]} {nums[j]}");
                    }
                }
            }



        }
    }
}
