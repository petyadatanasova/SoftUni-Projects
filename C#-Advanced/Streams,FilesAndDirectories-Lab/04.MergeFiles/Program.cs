using System;
using System.Collections.Generic;
using System.IO;

namespace _04.MergeFiles
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input1 = File.ReadAllLines(@"../../../Input1.txt");
            string[] input2 = File.ReadAllLines(@"../../../Input2.txt");

            List <string> result = new List<string>();

            for (int i = 0; i < (input1.Length>input2.Length ? input1.Length : input2.Length); i++)
            {
                if(i>=0 && i<input1.Length)
                {
                    result.Add(input1[i]);
                }
                if (i >= 0 && i < input2.Length)
                {
                    result.Add(input2[i]);
                }
            }
            foreach (var item in result)
            {
                File.AppendAllText("Output.txt", $"{item}{Environment.NewLine}");
            }
        }
    }
}
