using System;
using System.Collections.Generic;
using System.Linq;

namespace _07.TheV_Logger
{
    class Program
    {
        static void Main(string[] args)
        {
            string command = Console.ReadLine();
            Dictionary<string, Dictionary<string, HashSet<string>>> vloggers = new Dictionary<string, Dictionary<string, HashSet<string>>>();
            while (command!="Statistics")
            {
                string[] splitCommand = command.Split(" ", StringSplitOptions.RemoveEmptyEntries);
                if(splitCommand[1]=="joined")
                {
                    string vloggerName = splitCommand[0];
                    if(!vloggers.ContainsKey(vloggerName))
                    {
                        vloggers.Add(vloggerName, new Dictionary<string, HashSet<string>>());
                        vloggers[vloggerName].Add("following", new HashSet<string>());
                        vloggers[vloggerName].Add("followers", new HashSet<string>());
                    }
                }
                else if (splitCommand[1]=="followed")
                {
                    string follower = splitCommand[0];
                    string vloggerName = splitCommand[2];
                    //Saffrona followed EmilConrad
                    if (vloggers.ContainsKey(follower) && vloggers.ContainsKey(vloggerName) && follower!=vloggerName)
                    {
                        vloggers[vloggerName]["followers"].Add(follower);
                        vloggers[follower]["following"].Add(vloggerName);
                    }
                }

                command = Console.ReadLine();
            }
            Console.WriteLine($"The V-Logger has a total of {vloggers.Count} vloggers in its logs.");
            var orderedVloggers = vloggers.OrderByDescending(x => x.Value["followers"].Count).ThenBy(x => x.Value["following"].Count);
            int counter = 1;
            foreach (var vlogger in orderedVloggers)
            {
                Console.WriteLine($"{counter}. {vlogger.Key} : {vlogger.Value["followers"].Count} followers, {vlogger.Value["following"].Count} following");
                if(counter==1)
                {
                    foreach (var item in vlogger.Value["followers"].OrderBy(x => x))
                    {
                        Console.WriteLine($"*  {item}");
                    }
                }
                counter++;
            }

        }
    }
}
