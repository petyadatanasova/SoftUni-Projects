using System;
using System.IO;

namespace _02.LineNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            using (StreamReader reader = new StreamReader("input.txt"))
            {
                int counter = 1;
                
                using(StreamWriter writer = new StreamWriter("output.txt"))
                {
                    string line = reader.ReadLine();
                    while (line!=null)
                    {
                        writer.WriteLine($"{counter}. {line}");

                        counter++;
                        line = reader.ReadLine();
                    }
                }
            }
        }
    }
}
