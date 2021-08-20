using System;

namespace _07._Vending_Machine
{
    class Program
    {
        static void Main(string[] args)
        {
            string moneyInput = Console.ReadLine();
            double totalMoney = 0;
            while (moneyInput != "Start")
            {
                double money = double.Parse(moneyInput);
                if (money == 1||money== 2 || money == 0.5|| money== 0.2|| money== 0.1)
                {
                    totalMoney += money;
                }
                else
                {
                    Console.WriteLine($"Cannot accept {money}");
                }
                moneyInput = Console.ReadLine();
            }

            string product = Console.ReadLine();
            while (product!="End")
            {
                if (product =="Nuts")
                {
                    if(totalMoney>=2.00)
                    {
                        Console.WriteLine($"Purchased {product.ToLower()}");
                        totalMoney -= 2.00;
                    }
                    else
                    {
                        Console.WriteLine("Sorry, not enough money");
                    }
                }
                else if(product == "Water")
                {
                    if (totalMoney >= 0.70)
                    {
                        Console.WriteLine($"Purchased {product.ToLower()}");
                        totalMoney -= 0.70;
                    }
                    else
                    {
                        Console.WriteLine("Sorry, not enough money");
                    }
                }
                else if (product == "Crisps")
                {
                    if (totalMoney >= 1.50)
                    {
                        Console.WriteLine($"Purchased {product.ToLower()}");
                        totalMoney -= 1.50;
                    }
                    else
                    {
                        Console.WriteLine("Sorry, not enough money");
                    }
                }
                else if (product == "Soda")
                {
                    if (totalMoney >= 0.80)
                    {
                        Console.WriteLine($"Purchased {product.ToLower()}");
                        totalMoney -= 0.80;
                    }
                    else
                    {
                        Console.WriteLine("Sorry, not enough money");
                    }
                }
                else if (product == "Coke")
                {
                    if (totalMoney >= 1.00)
                    {
                        Console.WriteLine($"Purchased {product.ToLower()}");
                        totalMoney -= 1.00;
                    }
                    else
                    {
                        Console.WriteLine("Sorry, not enough money");
                    }
                }
                else
                {
                    Console.WriteLine("Invalid product");
                }


                product = Console.ReadLine();

            }
            Console.WriteLine($"Change: {totalMoney:f2}");
        }
    }
}
