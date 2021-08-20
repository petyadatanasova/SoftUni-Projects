using System;

namespace _01._Day_of_Week_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());

            string[] weekdays = { "Monday", "Tuesday", "Wednesday", "Thusrday", "Friday", "Saturday", "Sunday" };

            for (int i = 1; i <= weekdays.Length; i++)
            {
                if (num==i)
                {
                    Console.WriteLine(weekdays[i-1]);
                    return;
                }
                
            }
            
                Console.WriteLine("Invalid day!");
            


        }
    }
}
