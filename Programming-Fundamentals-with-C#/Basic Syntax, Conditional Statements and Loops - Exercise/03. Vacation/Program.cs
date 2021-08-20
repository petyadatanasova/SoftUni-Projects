using System;

namespace _03._Vacation
{
   class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            string type = Console.ReadLine();
            string day = Console.ReadLine();
            double price = 0;
            double sum = 0;
            double totalPrice = 0;
            if (type == "Students")
            {
                switch (day)
                {
                    case "Friday":
                        price = 8.45;
                        break;
                    case "Saturday":
                        price = 9.80;
                        break;
                    case "Sunday":
                        price = 10.46;
                        break;
                }
                sum = num * price;
                if (num >=30)
                {
                    totalPrice = sum * 0.85;
                }
                else
                {
                    totalPrice = sum;
                }
            }
            else if (type =="Business")
            {
                switch (day)
                {
                    case "Friday":
                        price = 10.90;
                        break;
                    case "Saturday":
                        price = 15.60;
                        break;
                    case "Sunday":
                        price = 16.00;
                        break;
                }
                sum = num * price;
                if (num >= 100)
                {
                    totalPrice = sum -(10*price);
                }
                else
                {
                    totalPrice = sum;
                }
            }
            else if (type =="Regular")
            {
                switch (day)
                {
                    case "Friday":
                        price = 15.00;
                        break;
                    case "Saturday":
                        price = 20.00;
                        break;
                    case "Sunday":
                        price = 22.50;
                        break;
                }
                sum = num * price;
                if (num >= 10 && num<=20)
                {
                    totalPrice = sum *0.95;
                }
                else
                {
                    totalPrice = sum;
                }
            }
            Console.WriteLine($"Total price: {totalPrice:f2}");
           
        }
    }
}
