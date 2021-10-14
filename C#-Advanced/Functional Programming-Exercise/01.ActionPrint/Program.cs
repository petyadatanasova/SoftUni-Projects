using System;

namespace _01.ActionPrint
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] names = Console.ReadLine().Split();
            Action<string> print = p => Console.WriteLine(p);
            foreach (var name in names)
            {
                print(name);
            }
        }
    }
}
