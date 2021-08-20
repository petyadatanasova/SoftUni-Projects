using System;

namespace _02._Sum_Digits
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            //string numStr = num.ToString();

            int sumDigits = 0;
            while (num>0)
            {
                sumDigits += (num % 10);
                num = num / 10;
            }

            Console.WriteLine(sumDigits);
        }
    }
}
