using System;

namespace _03._Gaming_Store
{
    class Program
    {
        static void Main(string[] args)
        {
            double balance = double.Parse(Console.ReadLine());
            string input = Console.ReadLine();
            double gamePrice = 0;
            double moneySpent = 0;

            while (input != "Game Time")
            {
            
                switch (input)
                {
                    case "OutFall 4":
                        gamePrice = 39.99;
                        break;
                    case "RoverWatch Origins Edition":
                        gamePrice = 39.99;
                        break;
                    case "CS: OG":
                        gamePrice = 15.99;
                        break;
                    case "Zplinter Zell":
                        gamePrice = 19.99;
                        break;
                    case "Honored 2":
                        gamePrice = 59.99;
                        break;
                    case "RoverWatch":
                        gamePrice = 29.99;
                        break;
                    default:
                        Console.WriteLine("Not Found");
                        break; 
                }

                if (gamePrice>0 && gamePrice <= balance)
                {
                    balance -= gamePrice;
                    moneySpent += gamePrice;
                    Console.WriteLine($"Bought {input}");
                    
                }
                else if(gamePrice>0 && gamePrice>balance)
                {
                    Console.WriteLine("Too Expensive");
                   
                }

                if (balance == 0)
                {
                    Console.WriteLine("Out of money!");
                    return;
                }
                input = Console.ReadLine();

            }
            if (balance > 0)
            {
                Console.WriteLine($"Total spent: ${moneySpent:f2}. Remaining: ${balance:f2}");
            }



        }
    }
}
