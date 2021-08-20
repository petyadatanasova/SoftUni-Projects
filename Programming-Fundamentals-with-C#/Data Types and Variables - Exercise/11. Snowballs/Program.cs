using System;
using System.Numerics;

namespace _11._Snowballs
{
    class Program
    {
        static void Main(string[] args)
        {
            int numSnowballs = int.Parse(Console.ReadLine());
            BigInteger snowballValue = 0;
            BigInteger highestValue = int.MinValue;
            int highestSnowballSnow = 0;
            int highestSnowballTime = 0;
            int highestSnowballQuality = 0;
            for (int i = 1; i <= numSnowballs; i++)
            {
                int snowballSnow = int.Parse(Console.ReadLine());
                int snowballTime = int.Parse(Console.ReadLine());
                int snowballQuality = int.Parse(Console.ReadLine());
                //int index = 1;
                //for (int j = 1; j <= snowballQuality; j++)
                //{
                    snowballValue = BigInteger.Pow((snowballSnow / snowballTime),snowballQuality);
                    //snowballValue = index;
                //}
                if(snowballValue>highestValue)
                {
                    highestValue = snowballValue;
                    highestSnowballSnow = snowballSnow;
                    highestSnowballTime = snowballTime;
                    highestSnowballQuality = snowballQuality;

                }
                snowballValue = 0;

            }

            Console.WriteLine($"{highestSnowballSnow} : {highestSnowballTime} = {highestValue} ({highestSnowballQuality})");


        }
    }
}
