using System;
using System.Collections.Generic;

namespace EnterNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            
            List<int> numbers = new List<int>();
              int startRange = 1;
              int endRange = 100;
            while (numbers.Count<10)
            {
                try
                {
                    ReadNumber(startRange, endRange, numbers);
                }
                catch (Exception ex)
                {

                    Console.WriteLine(ex.Message);
                }
                if (numbers.Count > 0)
                {
                    startRange = numbers[numbers.Count - 1];
                }
            }

            Console.WriteLine($"{string.Join(", ", numbers)}");
        }
        public static void ReadNumber(int start, int end, List<int>numbers)
        {
            string input = Console.ReadLine();

            if(!int.TryParse(input, out int number))
            {
                throw new ArgumentException("Invalid Number!");
            }
            else if (int.Parse(input)<=start || int.Parse(input)>=end)
            {
                throw new ArgumentException($"Your number is not in range {start} - 100!");
            }
            numbers.Add(int.Parse(input));
            
        }
    }
}
