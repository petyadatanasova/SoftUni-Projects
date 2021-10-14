using System;
using System.Collections.Generic;
using System.Linq;

namespace _05.AppliedArithmetics
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split().Select(int.Parse).ToList();

            string command = Console.ReadLine();
            Func<int, int> add = n => n += 1;
            Func<int, int> multiply = n => n *= 2;
            Func<int, int> subtract = n => n -= 1;
            Action<List<int>> print = n => Console.WriteLine(string.Join(" ", n)); 

            while (command!="end")
            {
                if(command=="add")
                {
                    for (int i = 0; i < numbers.Count; i++)
                    {
                        numbers[i] = add(numbers[i]);
                    }
                }
                else if (command=="multiply")
                {
                    for (int i = 0; i < numbers.Count; i++)
                    {
                        numbers[i] = multiply(numbers[i]);
                    }
                }
                else if (command == "subtract")
                {
                    for (int i = 0; i < numbers.Count; i++)
                    {
                        numbers[i] = subtract(numbers[i]);
                    }
                }
                else if (command == "print")
                {
                    print(numbers);
                }
                command = Console.ReadLine();
            }



        }
    }
}
