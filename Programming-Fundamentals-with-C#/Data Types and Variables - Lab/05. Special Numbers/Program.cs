using System;

namespace _05._Special_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int sum = 0;
            
            for (int i = 1; i <= num; i++)
            {
                int digits = i;
                while (digits>0)
                {

                    sum += digits % 10;
                   
                    digits = digits / 10;
                }
                if (sum==5 || sum==7 ||sum==11)
                {
                    Console.WriteLine($"{i} -> True");
                }
                else
                {
                    Console.WriteLine($"{i} -> False");
                }
               
                sum = 0;
            }

        }
    }
}
