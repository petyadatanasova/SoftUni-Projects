﻿using System;

namespace _04._Reverse_String_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
          
            for (int i = input.Length-1; i >= 0; i--)
            {
                Console.Write(input[i]);
            }
            
        }
    }
}
