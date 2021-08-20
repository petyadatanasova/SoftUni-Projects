
            using System;
            using System.Linq;

namespace _08._Condense_Array_to_Number
    {
        class Program
        {
            static void Main(string[] args)
            {
                int[] num = Console.ReadLine().Split().Select(int.Parse).ToArray();
                int sum = 0;
                if (num.Length == 1)
                {
                    Console.WriteLine(num[0]);
                    return;
                }
                while (num.Length > 1)

                {
                    int[] condensed = new int[num.Length - 1];

                    for (int i = 0; i < num.Length - 1; i++)
                    {

                        condensed[i] = num[i] + num[i + 1];
                        sum += condensed[i];

                    }
                    num = condensed;

                    if (num.Length == 1)
                    {
                        Console.WriteLine(num[0]);
                        return;
                    }
                }
                Console.WriteLine(num[0]);
            }
        }
    }

