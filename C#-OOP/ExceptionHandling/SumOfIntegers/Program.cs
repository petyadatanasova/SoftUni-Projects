using System;

namespace SumOfIntegers
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split();
            int totalSum = 0;
            for (int i = 0; i < input.Length; i++)
            {
                try
                {
                    if (int.TryParse(input[i], out int integerValue))
                    {
                       
                        totalSum += integerValue;
                    }
                    else
                    {
                        if (long.TryParse(input[i],out long longIntegerValue))
                        {
                            if (longIntegerValue > int.MaxValue || longIntegerValue<int.MaxValue)
                            {
                                throw new IndexOutOfRangeException($"The element '{input[i]}' is out of range!");
                            }
                        }
                        throw new FormatException($"The element '{input[i]}' is in wrong format!");
                    }
                }
                catch (Exception ex)
                {

                    Console.WriteLine(ex.Message);
                }        
                Console.WriteLine($"Element '{input[i]}' processed - current sum: {totalSum}");
            }
            Console.WriteLine($"The total sum of all integers is: {totalSum}");
        }
    }
}
