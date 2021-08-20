using System;
using System.Linq;

namespace _09._Kamino_Factory
{
    class Program
    {
        static void Main(string[] args)
        {
            int sequenceLenght = int.Parse(Console.ReadLine());
            string input = Console.ReadLine();

            int[] currentSequence = new int[sequenceLenght];

            int[] bestSequence = new int[sequenceLenght];
            int bestSequenceIndex = 0;
            int bestSampleIndex = 0;
            int bestSequenceSum = 0;

            int bestLength = -1;
            int currentStartIndex = -1;
            int currentSampleIndex = 0;
           


            while (input != "Clone them!")
            {
                int[] DNA = input.Split("!", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();

                
                int currentLenght = 0;
                int LongestLenght = 0;
                int currentEndIndex = 0;

                for (int i = 0; i < DNA.Length; i++)
                {
                  
                    if (DNA[i] == 1)
                    {
                        currentLenght++;
                        if (currentLenght  > LongestLenght)
                        {
                            currentEndIndex = i;
                            LongestLenght = currentLenght;

                        }
                        
                    }
                    else
                    {
                        currentLenght = 0;
                    }
                }

                currentStartIndex = currentEndIndex - LongestLenght + 1;
                bool isCurrentDNABetter = false;
                int currentSum = DNA.Sum();

                if (LongestLenght > bestLength)
                {
                    isCurrentDNABetter = true;
                }
                else if (LongestLenght == bestLength)
                { 
                    if(currentStartIndex<bestSequenceIndex)
                    {
                        isCurrentDNABetter = true;
                    }
                    else if (currentStartIndex== bestSequenceIndex)
                    {
                        if(currentSum> bestSequenceSum)
                        {
                            isCurrentDNABetter = true;
                        }
                    }
                }
                 currentSampleIndex++;

                if (isCurrentDNABetter)
                {
                    bestSequence = DNA;
                    bestLength = LongestLenght;
                    bestSequenceIndex = currentStartIndex;
                    bestSequenceSum=currentSum;
                    bestSampleIndex= currentSampleIndex;
                }
                
                input = Console.ReadLine();
            }
            Console.WriteLine($"Best DNA sample {bestSampleIndex} with sum: {bestSequenceSum}.");
            Console.WriteLine(string.Join(" ", bestSequence));
        }

    }

}





