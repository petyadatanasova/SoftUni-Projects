using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;

namespace StreamsFilesAndDirectories_Exercise
{
    class Program
    {
        static void Main(string[] args)
        {

            CopyBinaryFile();
        }

        private static void ZipAndExtract()
        {
            string sourceDirectory = @"C:\Users\petya\source\repos\StreamsFilesAndDirectories-Exercise\StreamsFilesAndDirectories-Exercise\MyFolder\sourceDirectory";
            string targetDirectory = @"C:\Users\petya\source\repos\StreamsFilesAndDirectories-Exercise\StreamsFilesAndDirectories-Exercise\MyFolder\result.zip";
            string extractionDirectory = @"C:\Users\petya\source\repos\StreamsFilesAndDirectories-Exercise\StreamsFilesAndDirectories-Exercise\MyFolder\result";
            ZipFile.CreateFromDirectory(sourceDirectory, targetDirectory);
            ZipFile.ExtractToDirectory(targetDirectory, extractionDirectory);
        }

        private static void DirectoryTraversal()
        {
            string[] allFiles = Directory.GetFiles($"../../../", ".");
            Dictionary<string, Dictionary<string, double>> groupFiles = new Dictionary<string, Dictionary<string, double>>();
            foreach (var file in allFiles)
            {
                FileInfo fileInfo = new FileInfo(file);
                if (!groupFiles.ContainsKey(fileInfo.Extension))
                {
                    groupFiles.Add(fileInfo.Extension, new Dictionary<string, double>());
                }
                if (!groupFiles[fileInfo.Extension].ContainsKey(fileInfo.Name))
                {
                    groupFiles[fileInfo.Extension].Add(fileInfo.Name, (double)fileInfo.Length / 1024);
                }

            }
            var sortedFiles = groupFiles.OrderByDescending(x => x.Value.Count).ThenBy(x => x.Key);
            string path = Environment.GetFolderPath(Environment.SpecialFolder.Desktop) + "/report.txt";
            foreach (var file in sortedFiles)
            {
                File.AppendAllText(path, file.Key + Environment.NewLine);
                foreach (var item in file.Value)
                {
                    File.AppendAllText(path, $"--{item.Key} - {item.Value:f3}kb{Environment.NewLine}");
                }
            }
        }

        private static void CopyBinaryFile()
        {
            using (FileStream fileReader = new FileStream(@"../../../copyMe.png", FileMode.Open))
            {
                using (FileStream fileWriter = new FileStream(@"../../../copyMeCopy.png", FileMode.Create))
                {
                    byte[] buffer = new byte[256];
                    int currentBytes = fileReader.Read(buffer);
                    while (currentBytes != 0)
                    {
                        fileWriter.Write(buffer);

                        currentBytes = fileReader.Read(buffer);
                    }
                    Console.WriteLine("Done");
                }
            }
        }

        private static void WordCount()
        {
            string[] words = File.ReadAllLines(@"../../../words.txt");
            Dictionary<string, int> wordsCount = new Dictionary<string, int>();
            foreach (var word in words)
            {
                if (!wordsCount.ContainsKey(word))
                {
                    wordsCount.Add(word, 0);
                }
            }
            string[] textLines = File.ReadAllLines(@"../../../text.txt");

            foreach (var line in textLines)
            {
                string[] splittedLine = line.Split(new char[] { '-', ',', '!', '.', '?', ' ' }, StringSplitOptions.RemoveEmptyEntries);
                foreach (var wordInLine in splittedLine)
                {
                    foreach (var word in words)
                    {
                        if (wordInLine.ToLower() == word)
                        {
                            wordsCount[word]++;
                        }
                    }
                }
            }
            foreach (var word in wordsCount.OrderByDescending(x => x.Value))
            {
                File.AppendAllText(@"../../../actualResult.txt", $"{word.Key} - {word.Value}{Environment.NewLine}");
            }
        }

        private static void LineNumbers()
        {
            string[] lines = File.ReadAllLines(@"../../../text.txt");

            for (int i = 0; i < lines.Length; i++)
            {

                File.AppendAllText(@"../../../output.txt", $"Line {i + 1}: {lines[i]} ({lines[i].Count(x => char.IsLetter(x))})({lines[i].Count(x => char.IsPunctuation(x))}){Environment.NewLine}");

            }
        }

        private static void EvenLines()
        {
            using (StreamReader streamReader = new StreamReader("text.txt"))
            {
                string[] specialSymbols = new string[] { "-", ",", ".", "!", "?" };
                string result = streamReader.ReadLine();
                int counterLines = 0;
                while (result != null)
                {

                    foreach (var symbol in specialSymbols)
                    {
                        result = result.Replace(symbol, "@");
                    }
                    if (counterLines % 2 == 0)
                    {
                        string[] resultArray = result.Split();
                        resultArray = resultArray.Reverse().ToArray();
                        Console.WriteLine(string.Join(" ", resultArray));
                    }
                    counterLines++;
                    result = streamReader.ReadLine();
                }
            }
        }
    }
}
