using System;
using System.Linq;
using System.Numerics;

namespace _02._From_Left_to_The_Right
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberLines = int.Parse(Console.ReadLine());
            long sum = 0;

            for (int i = 0; i < numberLines; i++)
            {
                long[] nums = Console.ReadLine().Split().Select(long.Parse).ToArray();
                long leftNum = nums[0];
                long rightNum = nums[1];
                if (leftNum >= rightNum)
                {
                    leftNum = Math.Abs(leftNum);
                    rightNum = Math.Abs(rightNum);
                    while (leftNum >0)
                    {

                        long digit = Math.Abs(leftNum) % 10;
                        sum += digit;
                        leftNum /= 10;
                    }
                    Console.WriteLine(sum);

                }
                else
                {
                    leftNum = Math.Abs(leftNum);
                    rightNum = Math.Abs(rightNum);
                    while (rightNum > 0)
                    {

                        long digit = Math.Abs(rightNum) % 10;
                        sum += digit;
                        rightNum /= 10;
                    }
                    Console.WriteLine(sum);
                }
                sum = 0;
            }
            
        }
    }
}
