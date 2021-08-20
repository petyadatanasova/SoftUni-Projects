using System;

namespace _08._Condense_Array_to_Number_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            string items = Console.ReadLine();
            string [] splitItems = items.Split();
            int[] numbers = new int[splitItems.Length];
           
            for (int i = 0; i < splitItems.Length; i++)
            {
                numbers[i] = int.Parse(splitItems[i]);
            }


            while (numbers.Length>1)
            {


                int[] condensed = new int[numbers.Length - 1];

                for (int i = 0; i < numbers.Length - 1; i++)
                {
                    condensed[i] = numbers[i] + numbers[i + 1];
                }
                numbers = condensed;

            }
            foreach (var item in numbers)
            {
                Console.WriteLine(item);
            }
        }
    }
}
