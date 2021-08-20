using System;
using System.Linq;

namespace _09._Kamino_factory_3._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int maxSeq = 0;
            int bestSeq = 0;

            int bestIndex = 1;

            int bestSum = 0;
            int[] bestArr = new int[n];
            int count = 0;
            int bestCount = 0;

            string command = Console.ReadLine();

            while (command != "Clone them!")
            {
                int sum = 0;
                count++;
                int[] dnaSequence = command.Split("!", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
                int firstIndex = 0;
                int lastIndex = 0;
                int currentSeq = 0;
                // sum
                for (int i = 0; i < dnaSequence.Length; i++)
                {
                    sum += dnaSequence[i];
                }
                // sum = dnaSequence.Sum();
                //sequence
                for (int i = 0; i < dnaSequence.Length; i++)
                {
                    if (dnaSequence[i] == 1)
                    {
                        currentSeq++;
                    }
                    else if(dnaSequence[i] == 0)
                    {
                        currentSeq = 0;
                        continue;
                    }

                    if (currentSeq >= maxSeq)
                    {
                        maxSeq = currentSeq;
                        lastIndex = i + 1;
                        firstIndex = lastIndex - maxSeq;
                    }
                }
                //
                if (maxSeq > bestSeq)
                {
                    bestSeq = maxSeq;
                    bestIndex = firstIndex;
                    bestSum = sum;
                    bestArr = dnaSequence;
                    bestCount = count;
                }
                else if (maxSeq == bestSeq && firstIndex < bestIndex || maxSeq == bestSeq && firstIndex == bestIndex && sum > bestSum)
                {

                    bestSeq = maxSeq;
                    bestIndex = firstIndex;
                    bestSum = sum;
                    bestArr = dnaSequence;
                    bestCount = count;

                }

                command = Console.ReadLine();
            }
            Console.WriteLine($"Best DNA sample {bestCount} with sum: {bestSum}.");
            Console.WriteLine(string.Join(" ", bestArr));

        }
    }
}
