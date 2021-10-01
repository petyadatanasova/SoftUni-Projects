using System;
using System.IO;

namespace _01.OddLines
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] lines = File.ReadAllLines(@"../../../input.txt");
            for (int i = 0; i < lines.Length; i++)
            {
                if(i%2==1)
                {
                    File.AppendAllText(@"../../../output.txt", $"{lines[i]}{Environment.NewLine}");
                }
            }
        }
    }
}
