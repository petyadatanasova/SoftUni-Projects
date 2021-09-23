using System;
using System.Collections.Generic;

namespace _08.BalancedParenthesis
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            Stack<char> parantheses = new Stack<char>();
            for (int i = 0; i < input.Length; i++)
            {
                
                if(input[i]=='(' || input[i] == '{' || input[i] == '[')
                {
                    parantheses.Push(input[i]);
                }
                else
                {
                    if(parantheses.Count==0)
                    {
                        Console.WriteLine("NO");
                        return;
                    }
                    char currentElement = parantheses.Peek();
                    if(currentElement=='(' && input[i]==')')
                    {
                        parantheses.Pop();
                    }
                    else if (currentElement=='{' && input[i]=='}')
                    {
                        parantheses.Pop();
                    }
                    else if (currentElement == '[' && input[i] == ']')
                    {
                        parantheses.Pop();
                    }
                    else
                    {
                        Console.WriteLine("NO");
                        return;
                    }
                    
                }
            }
            if(parantheses.Count<=0)
            {
                Console.WriteLine("YES");
            }
        }
    }
}
