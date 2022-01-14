using System;
using System.Collections.Generic;

namespace CustomStack
{
   public class StartUp
    {
        static void Main(string[] args)
        {
            StackOfStrings stack = new StackOfStrings();
            List<string> list = new List<string>();

            list.Add("1");
            list.Add("2");
            list.Add("3");
            list.Add("4");
            list.Add("5");


            Console.WriteLine($"{string.Join(" ", stack)}");

            Console.WriteLine(stack.IsEmpty()); 
            stack.AddRange(list);
            Console.WriteLine(stack.IsEmpty());
            Console.WriteLine($"{string.Join(" ", stack)}");
        }
    }
}
