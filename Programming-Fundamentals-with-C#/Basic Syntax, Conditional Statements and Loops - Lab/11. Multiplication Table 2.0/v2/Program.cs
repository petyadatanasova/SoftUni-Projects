﻿using System;

namespace _11._Multiplication_Table_3._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int multiplier = int.Parse(Console.ReadLine());

            do
            {

                Console.WriteLine($"{num} X {multiplier} = {num*multiplier}");

                multiplier++;
            } while (multiplier<=10);


        }
    }
}
