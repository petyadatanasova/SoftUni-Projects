using System;
using System.Collections.Generic;
using System.IO;

namespace _05.SliceAFile
{
    class Program
    {
        static void Main(string[] args)
        {
            string sourceFile = @"C:\Users\petya\source\repos\Streams,FilesAndDirectories-Lab\05.SliceAFile\Input.txt";

            using (FileStream reader = new FileStream(sourceFile, FileMode.Open))
            {
                long pieceSize = (long)Math.Ceiling((double)reader.Length / 4);
                for (int i = 0; i < 4; i++)
                {
                    long currentPieceSize = 0;
                    using (FileStream creator = new FileStream($"Part-{i+1}.txt", FileMode.OpenOrCreate))
                    {
                        byte[] buffer = new byte[4];
                        while (reader.Read(buffer, 0, buffer.Length) <= buffer.Length)
                        {
                            currentPieceSize += buffer.Length;
                            creator.Write(buffer, 0, buffer.Length);
                            if (currentPieceSize >= pieceSize)
                            {
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
}
