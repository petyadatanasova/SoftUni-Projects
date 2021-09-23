using System;
using System.Collections.Generic;
using System.Text;

namespace _06.SongsQueue
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<string> songs = new Queue<string>(Console.ReadLine().Split(", "));

            while (songs.Count>0)
            {
                string [] command = Console.ReadLine().Split();
                if(command[0]=="Play")
                {
                    songs.Dequeue();
                }
                else if (command[0]=="Add")
                {
                    StringBuilder songName = new StringBuilder();
                    for (int i = 1; i < command.Length; i++)
                    {
                        songName.Append(command[i]);
                        if(i!=command.Length-1)
                        {
                            songName.Append(" ");
                        }
                        
                    }
                    if(!songs.Contains(songName.ToString()))
                    {
                        songs.Enqueue(songName.ToString());
                    }
                    else
                    {
                        Console.WriteLine($"{songName.ToString()} is already contained!");
                    }
                }
                else if (command[0]=="Show")
                {
                    Console.WriteLine(string.Join(", ", songs));
                }
            }
            Console.WriteLine("No more songs!");
        }
    }
}
