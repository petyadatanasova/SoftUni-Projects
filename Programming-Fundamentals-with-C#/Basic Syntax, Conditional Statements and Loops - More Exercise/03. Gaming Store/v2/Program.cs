using System;

namespace _03._Gaming_Store_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            double balance = double.Parse(Console.ReadLine());

            string game = Console.ReadLine();
            double currentPrice = 0;
            double moneySpent = 0;

            while (game != "Game Time")
            {
                if (balance<=0)
                {
                    Console.WriteLine("Out of money!");
                    return;
                }
                switch (game)
                {
                    case "OutFall 4":
                        currentPrice = 39.99;
                        break;
                    case "RoverWatch Origins Edition":
                        currentPrice = 39.99;
                        break;
                    case "CS: OG":
                        currentPrice = 15.99;
                        break;
                    case "Zplinter Zell":
                        currentPrice = 19.99;
                        break;
                    case "Honored 2":
                        currentPrice = 59.99;
                        break;
                    case "RoverWatch":
                        currentPrice = 29.99;
                        break;
                    default:
                        Console.WriteLine("Not Found");
                        game = Console.ReadLine();
                        break;
                }
                if (currentPrice<=balance)
                {
                    Console.WriteLine($"Bought {game}");
                    balance -= currentPrice;
                    if (balance==0)
                    {
                        Console.WriteLine("Out of money!");
                        return;
                    }
                    moneySpent += currentPrice;
                }
                else
                {
                    Console.WriteLine("Too Expensive");
                }
                game = Console.ReadLine();
            }
            Console.WriteLine($"Total spent: ${moneySpent:f2}. Remaining: ${balance:f2}");
        }
    }
}
