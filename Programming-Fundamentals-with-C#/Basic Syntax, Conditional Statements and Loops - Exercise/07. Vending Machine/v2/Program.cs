using System;

namespace _07._Vending_Machine_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            double money = 0;
            while (input !="Start")
            {
                double coins = double.Parse(input);

                if (coins == 0.1 || coins == 0.2 || coins == 0.5 || coins ==1 || coins ==2)
                {
                    money += coins;
                }
                else
                {
                    Console.WriteLine($"Cannot accept {coins}" );
                }

                input = Console.ReadLine();
            }

            // "Nuts", "Water", "Crisps", "Soda", "Coke".The prices are: 2.0, 0.7, 1.5, 0.8, 1.0
            input = Console.ReadLine();
            
            while (input!="End")
            {
                double price = 0;
                
                if (input == "Nuts")
                {
                    price = 2;
                }
                else if (input == "Water")
                {
                    price = 0.7;
                }
                else if (input == "Crisps")
                {
                    price = 1.5;
                }
                else if (input == "Soda")
                {
                    price = 0.8;
                }
                else if (input == "Coke")
                {
                    price = 1;
                }
                else
                {
                    Console.WriteLine("Invalid product");
                }

                if (price != 0)
                {


                    if (price <= money)
                    {
                        Console.WriteLine($"Purchased {input.ToLower()}");
                        money -= price;

                    }
                    else
                    {
                        Console.WriteLine("Sorry, not enough money");
                    }
                }

                input = Console.ReadLine();
            }
            Console.WriteLine($"Change: {money:f2}");



        }
    }
}
