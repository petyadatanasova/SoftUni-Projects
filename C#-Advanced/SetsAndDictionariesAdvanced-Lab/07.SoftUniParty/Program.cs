using System;
using System.Collections.Generic;

namespace _07.SoftUniParty
{
    class Program
    {
        static void Main(string[] args)
        {
            HashSet<string> reservationNumbersRegular = new HashSet<string>();
            HashSet<string> reservationNumbersVip = new HashSet<string>();

            string input = Console.ReadLine();
            while (input != "PARTY")
            {
                if (Char.IsDigit(input[0]))
                {
                    reservationNumbersVip.Add(input);
                }
                else
                {
                    reservationNumbersRegular.Add(input);
                }

                input = Console.ReadLine();
            }

            string guestNumbers = Console.ReadLine();
            while (guestNumbers != "END")
            {
                if (Char.IsDigit(guestNumbers[0]))
                {
                    reservationNumbersVip.Remove(guestNumbers);
                }
                else
                {
                    reservationNumbersRegular.Remove(guestNumbers);
                }
                guestNumbers = Console.ReadLine();
            }
            Console.WriteLine(reservationNumbersRegular.Count+reservationNumbersVip.Count);
            foreach (var number in reservationNumbersVip)
            {
                Console.WriteLine(number);
            }
            foreach (var number in reservationNumbersRegular)
            {
                Console.WriteLine(number);
            }

        }
    }
}
