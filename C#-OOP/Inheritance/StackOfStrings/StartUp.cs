using System;
using System.Collections;
using System.Collections.Generic;

namespace CustomStack
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            StackOfStrings str = new StackOfStrings();

            str.Push("1");

            Console.WriteLine(str.isEmpty());
            str.Pop();
            Console.WriteLine(str.isEmpty());
            str.Push("1");
            Stack<string> list = new Stack<string>();

            list.Push("one");
            list.Push("two");
            list.Push("three");

            str.AddRange(list);
            foreach (var st in str)
            {
                Console.WriteLine(st);
            }

        }

    }
}
