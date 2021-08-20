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

            int currentCounter = 0;
            int currentSum = 0;

            int LongestSequence = 0;
            int[] bestSequence = new int[sequenceLenght];
            int bestSequenceIndex = 0;
            int bestSequenceSum = 0;
            int bestSampleIndex = 0;
            int currentSampleIndex = 0;

            while (input != "Clone them!")
            {
                currentSampleIndex++;
                int[] DNA = input.Split("!", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
                //for (int i = 0; i < DNA.Length; i++)
                //{
                //    if (DNA[i] == 1)
                //    {
                //        currentSum++;
                //    }
                //}
                currentSum = DNA.Sum();

                for (int i = 0; i < DNA.Length; i++)
                {

                    if (DNA[i] == 1)
                    {
                        currentCounter++;

                    }
                    else
                    {
                        if (LongestSequence < currentCounter)
                        {

                            LongestSequence = currentCounter;
                            bestSequence = DNA;
                            bestSequenceIndex = i + 1 - currentCounter;
                            bestSequenceSum = currentSum;
                            currentCounter = 0;
                            bestSampleIndex = currentSampleIndex;

                        }
                        else if (LongestSequence == currentCounter)
                        {
                            if (bestSequenceIndex > i + 1 - currentCounter)
                            {

                                bestSequenceIndex = i + 1 - currentCounter;
                                //LongestSequence = currentCounter;
                                bestSequence = DNA;
                                bestSequenceSum = currentSum;
                                currentCounter = 0;
                                bestSampleIndex = currentSampleIndex;

                            }
                            else
                            {
                                if (bestSequenceSum < currentSum)
                                {
                                    bestSequenceIndex = i + 1 - currentCounter;
                                    LongestSequence = currentCounter;
                                    bestSequence = DNA;
                                    bestSequenceSum = currentSum;
                                    currentCounter = 0;
                                    bestSampleIndex = currentSampleIndex;
                                }
                            }
                        }

                    }

                }
                currentCounter = 0;
               
                currentSum = 0;
                input = Console.ReadLine();
            }

            Console.WriteLine($"Best DNA sample {bestSampleIndex} with sum: {bestSequenceSum}.");
            Console.WriteLine(string.Join(" ", bestSequence));

        }
    }
}