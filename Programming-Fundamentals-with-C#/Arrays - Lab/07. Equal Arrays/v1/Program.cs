using System;
using System.Linq;

namespace _07._Equal_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] firstArr = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int[] secondArr = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int index = 0;
            int sum = 0;

            for (int i = 0; i < firstArr.Length; i++)
            {
                if (firstArr[i]==secondArr[i])
                {
                    sum += firstArr[i];
                }
                else
                {
                    Console.WriteLine($"Arrays are not identical. Found difference at {i} index");
                    index++;
                    break;
                }
            }
            if (index==0)
            {
                Console.WriteLine($"Arrays are identical. Sum: {sum}");
            }
            

        }
    }
}
