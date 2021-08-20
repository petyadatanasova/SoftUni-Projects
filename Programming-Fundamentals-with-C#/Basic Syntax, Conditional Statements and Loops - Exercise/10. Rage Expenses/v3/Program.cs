using System;

namespace _10._Rage_Expenses_3._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int lostGamesCount = int.Parse(Console.ReadLine());
            double headsetPrice = double.Parse(Console.ReadLine());
            double mousePrice = double.Parse(Console.ReadLine());
            double keyboardPrice = double.Parse(Console.ReadLine());
            double displayPrice = double.Parse(Console.ReadLine());

            double rageExpenses = (lostGamesCount / 2) * headsetPrice + (lostGamesCount / 3) * mousePrice + 
                (lostGamesCount / 6) * keyboardPrice + (lostGamesCount / 12) * displayPrice;
            Console.WriteLine($"Rage expenses: {rageExpenses:f2} lv.");
        }
    }
}
