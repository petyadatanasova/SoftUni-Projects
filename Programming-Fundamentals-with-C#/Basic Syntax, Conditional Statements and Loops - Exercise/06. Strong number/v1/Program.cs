using System;

namespace _06._Strong_number
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());

            string numString = num.ToString();
            int numStringLength = numString.Length;
            //double workingSum = 0;
            double totalSum = 0;

            for (int i = 0; i < numStringLength; i++)
            {
                char digit = numString[i];

                string digitStr = digit.ToString();
                int digitInt = int.Parse(digitStr);

                double workingNum = 0;
                double workingTotal = 1;
                for (int j = 1; j <= digitInt; j++)
                {

                    workingNum = j;
                    workingTotal *= workingNum;
                    workingNum = 0;
                }

                totalSum += workingTotal;
            }
            if (num==totalSum)
            {
                Console.WriteLine("yes");
            }
            else
            {
                Console.WriteLine("no");
            }
        }
    }
}
