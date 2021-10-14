using System;

namespace _02.KnightsOfHonor
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] names = Console.ReadLine().Split();
            Action<string> action = n => Console.WriteLine($"Sir {n}");
            
            foreach (var name in names)
            {
                action(name);
            }
        }
    }
}
