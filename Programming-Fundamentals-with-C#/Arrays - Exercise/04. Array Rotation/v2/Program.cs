using System;
using System.Linq;

namespace _04._Array_Rotation_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int rotations = int.Parse(Console.ReadLine());
            int[] newNums = new int[nums.Length];

            for (int i = 0; i < rotations; i++)
            {
                int temp = nums[0];
                for (int j = 0; j < nums.Length-1; j++)
                {
                   
                    newNums[j] = nums[j + 1];
                }
                newNums[nums.Length-1] = temp;
                nums = newNums;
            }
            Console.WriteLine(string.Join(" ",nums));


        }
    }
}
