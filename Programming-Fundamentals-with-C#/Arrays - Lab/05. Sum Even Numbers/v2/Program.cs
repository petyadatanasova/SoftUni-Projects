using System;
using System.Linq;

namespace _05._Sum_Even_Numbers_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int sumEven = 0;
            for (int i = 0; i < nums.Length; i++)
            {
                if (nums[i]%2==0)
                {
                    sumEven += nums[i];
                }
            }
            Console.WriteLine(sumEven);

        }
    }
}
