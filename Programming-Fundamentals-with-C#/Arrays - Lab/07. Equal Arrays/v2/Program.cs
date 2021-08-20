using System;
using System.Linq;

namespace _07._Equal_Arrays_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums1 = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int[] nums2 = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int sum = 0;

            for (int i = 0; i < nums1.Length; i++)
            {
                if(nums1[i]!=nums2[i])
                {
                    Console.WriteLine($"Arrays are not identical. Found difference at {i} index");
                    return;
                }
                sum += nums1[i];
            }

            Console.WriteLine($"Arrays are identical. Sum: {sum}");
        }
    }
}
