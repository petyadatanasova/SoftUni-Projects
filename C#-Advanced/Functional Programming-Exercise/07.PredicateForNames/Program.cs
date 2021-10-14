using System;

namespace _07.PredicateForNames
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            string[] names = Console.ReadLine().Split();

            //Func<int, int, bool> func = (lenghtName,lenghtFilter) => lenghtName <= lenghtFilter;
            Predicate <int> filter = lenghtName => lenghtName <= n;
            foreach (var name in names)
            {
                //if(func(name.Length, n))
                if(filter(name.Length))
                {
                    Console.WriteLine(name);
                }
            }

        }
    }
}
