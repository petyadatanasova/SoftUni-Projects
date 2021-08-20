using System;
using System.Linq;

namespace _06._Equal_Sum_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int sumRight = 0;
            int sumLeft = 0;

            for (int i = 0; i < nums.Length; i++)
            {
                 sumRight = 0;
                sumLeft = 0;

                //left
                for (int j = 0; j < i; j++)
                {
                    if(i==0)
                    {
                        sumLeft = 0;
                        break;
                    }
                    sumLeft += nums[j];
                }

                //right
                for (int k = i+1; k < nums.Length; k++)
                {
                    if (i == nums.Length-1)
                    {
                        sumRight = 0;
                        break;
                    }
                    sumRight += nums[k];
                }

                if(sumLeft==sumRight)
                {
                    Console.WriteLine(i);
                    return;
                }
            }
            
            Console.WriteLine("no");
        }
    }
}
