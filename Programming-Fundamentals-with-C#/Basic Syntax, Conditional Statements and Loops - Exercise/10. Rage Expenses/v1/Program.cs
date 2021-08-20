using System;

namespace _10._Rage_Expenses
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

            //int headsetCount = lostGamesCount / 2;
            //int mouseCount = lostGamesCount / 3;
            int headsetCount = 0;
            int mouseCount = 0;
            int keyboardCount = 0;
            int displayCount = 0; 

            for (int i = 1; i <= lostGamesCount; i++)
            {
                if (i % 2 == 0)
                {
                    headsetCount++;
                }
                if(i%3==0)
                {
                    mouseCount++;
                }
                if (i%2==0 && i%3==0)
                {
                    keyboardCount++;
                    if(keyboardCount>0)
                    {
                        if(keyboardCount%2==0)
                        {
                            displayCount++;
                        }
                    }
                }

                
            }
            double totalCost = headsetCount * headsetPrice + mouseCount * mousePrice + keyboardCount * keyboardPrice + displayCount * displayPrice;
            Console.WriteLine($"Rage expenses: {totalCost:f2} lv.");
        }
    }
}
