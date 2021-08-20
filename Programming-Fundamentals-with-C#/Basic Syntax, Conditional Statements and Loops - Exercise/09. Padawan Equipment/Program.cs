using System;

namespace _09._Padawan_Equipment
{
    class Program
    {
        static void Main(string[] args)
        {
            double money = double.Parse(Console.ReadLine());
            int numStudents = int.Parse(Console.ReadLine());
            double priceLightSabers = double.Parse(Console.ReadLine());
            double priceRobes = double.Parse(Console.ReadLine());
            double priceBelts = double.Parse(Console.ReadLine());
            

            double discountBelts = Math.Floor(numStudents / 6.00);
            double totalSabersCost =(priceLightSabers * (numStudents + Math.Ceiling(numStudents * 0.10)));
            double totalRobesCost = (priceRobes * numStudents);
            double totalBeltsCost = (priceBelts * (numStudents-discountBelts));

            double totalCost = totalSabersCost + totalRobesCost + totalBeltsCost;

            if (totalCost<=money)
            {
                Console.WriteLine($"The money is enough - it would cost {totalCost:f2}lv.");
            }
            else
            {
                Console.WriteLine($"John will need {Math.Abs(totalCost-money):f2}lv more.");
            }
        }
    }
}
