using System;
using System.Collections.Generic;
using System.Text;

namespace _09.SimpleTextEditor
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Stack<string> prevousTexts = new Stack<string>();
            StringBuilder text = new StringBuilder();
            for (int i = 0; i < n; i++)
            {
                string[] command = Console.ReadLine().Split();

                if(command[0]=="1")
                {
                    prevousTexts.Push(text.ToString());
                    text.Append(command[1]);
                }
                else if (command[0]=="2")
                {
                    int count = int.Parse(command[1]);
                    prevousTexts.Push(text.ToString());
                    for (int j = 0; j < count; j++)
                    {
                        text.Remove(text.Length - 1, 1);
                    }
                   
                }
                else if (command[0] == "3")
                {
                    int index = int.Parse(command[1]);

                    Console.WriteLine(text[index-1]);

                }
                else if (command[0] == "4")
                {
                    text.Clear();
                    text.Append(prevousTexts.Pop());
                }
            }
        }
    }
}
