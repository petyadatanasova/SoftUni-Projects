using System;
using System.Linq;

namespace _07._Max_Sequence_of_Equal_Elements
{
    class Program
    {
        static void Main(string[] args)
        {

            int[] arr = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int workingCounter = 0;
            int workingLongestSequenceNum = 0;

            int counter = 0;
            int longestSequenceNum = 0;



            for (int i = 0; i < arr.Length; i++)
            {
                for (int j = i; j < arr.Length; j++)
                {
                    if (arr[i]==arr[j])
                    {
                        workingCounter++;
                        workingLongestSequenceNum = arr[i];
                        if (counter < workingCounter)
                        {

                            counter = workingCounter;
                            longestSequenceNum = workingLongestSequenceNum;

                        }
                    }
                    else
                    {
                        if (counter < workingCounter)
                        {

                            counter = workingCounter;
                            longestSequenceNum = workingLongestSequenceNum;

                        }
                        
                        workingCounter = 0;
                        workingLongestSequenceNum = 0;
                        break;
                    }
                    
                }
                //if (counter < workingCounter)
                //{

                   // counter = workingCounter;
                   // longestSequenceNum = workingLongestSequenceNum;
                    workingCounter = 0;
                    workingLongestSequenceNum = 0;

                //}
                

            }
            int[] output = new int[counter];
            for (int i = 0; i < counter; i++)
            {
                output[i] = longestSequenceNum;
            }
            Console.WriteLine(string.Join(" ", output));
        }
    }
}
