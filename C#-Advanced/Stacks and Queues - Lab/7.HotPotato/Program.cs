using System;
using System.Collections.Generic;

namespace _7.HotPotato
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] names = Console.ReadLine().Split();
            int nthToss = int.Parse(Console.ReadLine());
            Queue<string> kids = new Queue<string>();
            foreach (var kid in names)
            {
                kids.Enqueue(kid);
            }

            while (kids.Count>1)
            {
                for (int i = 1; i <= nthToss; i++)
                {
                    if(i==nthToss)
                    {
                        Console.WriteLine("Removed "+ kids.Dequeue());
                    }
                    else
                    {
                        kids.Enqueue(kids.Dequeue());
                    }
                    
                }
            }
            Console.WriteLine("Last is " + kids.Dequeue()); ;
        }
    }
}
