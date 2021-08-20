using System;

namespace _01._Integer_Operations
{
    class Program
    {
        static void Main(string[] args)
        {
            int firstInt = int.Parse(Console.ReadLine());
            int secondInt = int.Parse(Console.ReadLine());
            int thirdInt = int.Parse(Console.ReadLine());
            int forthInt = int.Parse(Console.ReadLine());

            Console.WriteLine(((firstInt+secondInt)/(int)thirdInt)*forthInt);

        }
    }
}
