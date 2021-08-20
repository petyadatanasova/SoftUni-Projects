using System;

namespace _09._Spice_Must_Flow
{
    class Program
    {
        static void Main(string[] args)
        {
            int startingYield = int.Parse(Console.ReadLine());
            int countDaysMineOperated = 0;
            double totalAmountSpice = 0;


            while (startingYield>=100)
            {
                totalAmountSpice += startingYield;
               
                countDaysMineOperated++;
                startingYield -= 10;

            }
            int workersConsumed = (countDaysMineOperated+1) * 26;
            if (totalAmountSpice >= workersConsumed)
            {
                totalAmountSpice -= workersConsumed;
            }
            else
            {
                totalAmountSpice =0;
            }

            Console.WriteLine(countDaysMineOperated);
            Console.WriteLine(totalAmountSpice);

        }
    }
}
