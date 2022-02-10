using System;
using System.Collections.Generic;
using System.Linq;

namespace PlayCatch
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> input = Console.ReadLine().Split().Select(int.Parse).ToList();
            int numExeptions = 0;

            while (numExeptions < 3)
            {

                try
                {
                    string[] command = Console.ReadLine().Split();
                    if (command[0] == "Replace")
                    {
                        if (!int.TryParse(command[1], out int ParsedIndex) || !int.TryParse(command[2], out int ParsedElement))
                        {
                            throw new FormatException("The variable is not in the correct format!");
                        }
                        int index = int.Parse(command[1]);
                        int element = int.Parse(command[2]);

                        if (index > input.Count - 1 || index < 0)
                        {
                            throw new IndexOutOfRangeException("The index does not exist!");
                        }
                        input.RemoveAt(index);
                        input.Insert(index, element);
                    }
                    else if (command[0] == "Print")
                    {
                        if (!int.TryParse(command[1], out int ParsedStartIndex) || !int.TryParse(command[2], out int ParsedEndIndex))
                        {
                            throw new FormatException("The variable is not in the correct format!");
                        }
                        int startIndex = int.Parse(command[1]);
                        int endIndex = int.Parse(command[2]);
                        if (startIndex < 0 || endIndex > input.Count - 1)
                        {
                            throw new IndexOutOfRangeException("The index does not exist!");
                        }
                        List<int> newInput = new List<int>();
                        for (int i = startIndex; i <= endIndex; i++)
                        {
                            newInput.Add(input[i]);
                        }
                        Console.WriteLine($"{string.Join(", ", newInput)}");
                    }
                    else if (command[0] == "Show")
                    {
                        if (!int.TryParse(command[1], out int ParsedIndex))
                        {
                            throw new FormatException("The variable is not in the correct format!");
                        }
                        int index = int.Parse(command[1]);
                        if (index > input.Count - 1 || index < 0)
                        {
                            throw new IndexOutOfRangeException("The index does not exist!");
                        }
                        Console.WriteLine(input[index]);
                    }
                }
                catch (IndexOutOfRangeException ex)
                {
                    numExeptions++;
                    Console.WriteLine(ex.Message);
                }
                catch (FormatException ex)
                {
                    numExeptions++;
                    Console.WriteLine(ex.Message);
                }
            }
            Console.WriteLine($"{string.Join(", ", input)}");
        }
    }
}
