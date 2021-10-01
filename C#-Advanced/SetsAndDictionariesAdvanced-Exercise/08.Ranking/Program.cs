using System;
using System.Collections.Generic;
using System.Linq;

namespace _08.Ranking
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, string> contests = new Dictionary<string, string>();

            string[] command = Console.ReadLine().Split(":");
            while (command[0]!= "end of contests")
            {
                if(!contests.ContainsKey(command[0]))
                {
                    contests.Add(command[0], command[1]);
                }

                command = Console.ReadLine().Split(":");
            }

            string[] input = Console.ReadLine().Split("=>");
            Dictionary<string, Dictionary<string, int>> users = new Dictionary<string, Dictionary<string, int>>();
            while (input[0]!= "end of submissions")
            {
                string contest = input[0];
                string pass = input[1];
                string user = input[2];
                int point = int.Parse(input[3]);

                if(contests.ContainsKey(contest) && contests[contest]==pass)
                {
                    if(!users.ContainsKey(user))
                    {
                        users.Add(user, new Dictionary<string, int>());
                    }
                    if(!users[user].ContainsKey(contest))
                    {
                        users[user].Add(contest, 0);
                    }
                    if(users[user][contest]<point)
                    {
                        users[user][contest] = point;
                    }
                }

                input = Console.ReadLine().Split("=>");
            }
            string bestUser = "";
            int bestPoints = 0;
            foreach (var user in users)
            {
                int currentSum = 0;
                foreach (var contest in user.Value)
                {
                    currentSum += contest.Value;
                }
                if(currentSum>bestPoints)
                {
                    bestPoints = currentSum;
                    bestUser = user.Key;
                }
            }
            Console.WriteLine($"Best candidate is {bestUser} with total {bestPoints} points.");
            Console.WriteLine("Ranking:");

            foreach (var user in users.OrderBy(x=>x.Key))
            {
                Console.WriteLine(user.Key);
                foreach (var contest in user.Value.OrderByDescending(x=>x.Value))
                {
                    Console.WriteLine($"#  {contest.Key} -> {contest.Value}");
                }
            }
        }
    }
}
