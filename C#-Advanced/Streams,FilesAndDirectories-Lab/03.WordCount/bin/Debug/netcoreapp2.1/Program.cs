using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace _03.WordCount
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] words = File.ReadAllText("words.txt").Split();
            Dictionary<string, int> wordCount = new Dictionary<string, int>();

            foreach (var word in words)
            {
                if (!wordCount.ContainsKey(word))
                {
                    wordCount.Add(word, 0);
                }
            }
            string[] lines = File.ReadAllLines(@"../../../input.txt");
            foreach (var line in lines)
            {
                foreach (var word in words)
                {
                    if (line.Contains(word, StringComparison.OrdinalIgnoreCase))
                    {
                        wordCount[word]++;
                    }
                }
            }
            foreach (var word in wordCount.OrderByDescending(x=>x.Value))
            {
                string result = $"{word.Key} - {word.Value}{Environment.NewLine}";
                File.AppendAllText("Output.txt", result);
            }

        }
    }
}
