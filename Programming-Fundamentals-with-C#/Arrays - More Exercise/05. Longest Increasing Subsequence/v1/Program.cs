using System;
using System.Collections.Generic;
using System.Linq;

namespace _05._Longest_Increasing_Subsequence
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split().Select(int.Parse).ToArray();

            int[] solutions = new int[nums.Length];
            int[] prev = new int[nums.Length];

            int maxSolution = 0;
            int maxSolutionIndex = 0;

            for (int currentIndex = 0; currentIndex < nums.Length; currentIndex++) //ok
            {
                int solution = 1; //ok
                int prevIndex =-1;
                int currentNumber = nums[currentIndex]; //ok
                for (int solutionIndex = 0; solutionIndex < currentIndex; solutionIndex++) //ok
                {
                    int prevNumber = nums[solutionIndex]; //ok
                    int prevSolution = solutions[solutionIndex];//ok
    
                    if(currentNumber> prevNumber && solution<=prevSolution)//ok
                    {
                        solution = prevSolution + 1;//ok
                        prevIndex = solutionIndex;
         
                    }
                }
                solutions[currentIndex] = solution; //ok
                prev[currentIndex] = prevIndex;

                if (solution>maxSolution) //if >= it gives us the next result
                {
                    maxSolution = solution;
                    maxSolutionIndex = currentIndex;
                }
            }

           
            int index = maxSolutionIndex;
            var result = new List<int>();

            while (index!=-1)
            {
                int currentNumber = nums[index];
                result.Add(currentNumber);
                index = prev[index];
            }

            result.Reverse();

            Console.WriteLine(string.Join(" ", result));
        }
    }
}
