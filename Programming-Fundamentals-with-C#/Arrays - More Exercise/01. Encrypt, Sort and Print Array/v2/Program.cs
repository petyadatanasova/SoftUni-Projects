using System;

namespace _01._Encrypt__Sort_and_Print_Array_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[] newArr = new int[n];

            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                int sum = 0;
                for (int j = 0; j < input.Length; j++)
                {
                    if (input[j] == 'a' || input[j] == 'e' || input[j] == 'o' || input[j] == 'i' || input[j] == 'u' ||
                        input[j] == 'A' || input[j] == 'E' || input[j] == 'O' || input[j] == 'I' || input[j] == 'U')
                    {
                        sum += input[j] * input.Length;
                    }
                    else
                    {
                        sum += input[j] / input.Length;
                    }
                }

                newArr[i] = sum;
            }

            Array.Sort(newArr);
            foreach (var item in newArr)
            {
                Console.WriteLine(item);
            }
        }
    }
}