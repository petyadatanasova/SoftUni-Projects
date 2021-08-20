using System;

namespace _06._Strong_Number_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int digits = num;
            int factoriel = 1;
            int factorielSum = 0;
            while (digits>0)
            {
                int currentDigit = digits;
                currentDigit = currentDigit % 10;
                
                for (int i = 1; i <= currentDigit; i++)
                {

                    factoriel *= i;
                }
                factorielSum += factoriel;
                factoriel = 1;
                digits = digits / 10;
            }
            if (factorielSum==num)
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
