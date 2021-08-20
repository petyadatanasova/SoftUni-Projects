using System;
using System.Linq;

namespace _07._Max_Sequence_of_Equal_Elements_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int longestSequence = 0;
            int longestSeqNum = 0;

            for (int i = 0; i < nums.Length; i++)
            {
                int currentLongest = 1;
                for (int j = i; j < nums.Length; j++)
                {
                    if(nums[i]==nums[j])
                    {
                        currentLongest++;
                    }
                    else
                    {
                        break;
                    }
                }
                if(currentLongest>longestSequence)
                {
                    longestSequence = currentLongest;
                    longestSeqNum = nums[i];
                }
                
            }

            for (int i = 1; i < longestSequence; i++)
            {
                Console.Write(longestSeqNum +" ");
            }


        }
    }
}
