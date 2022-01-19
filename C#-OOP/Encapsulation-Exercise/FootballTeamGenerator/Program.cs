using System;
using System.Collections.Generic;

namespace FootballTeamGenerator
{
    public class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            Dictionary<string, Team> teams = new Dictionary<string, Team>();
            while (input!="END")
            {
                try
                {
                    string[] inputSplit = input.Split(";", StringSplitOptions.RemoveEmptyEntries);
                    string teamName = inputSplit[1];
                    if (inputSplit[0] == "Team")
                    {

                        Team team = new Team(teamName);
                        teams.Add(teamName, team);
                    }
                    else if (inputSplit[0] == "Add")
                    {
                        if (!teams.ContainsKey(teamName))
                        {
                            Console.WriteLine($"Team {teamName} does not exist.");
                            input = Console.ReadLine();
                            continue;
                        }
                        string playerName = inputSplit[2];
                        int endurance = int.Parse(inputSplit[3]);
                        int sprint = int.Parse(inputSplit[4]);
                        int dribble = int.Parse(inputSplit[5]);
                        int passing = int.Parse(inputSplit[6]);
                        int shooting = int.Parse(inputSplit[7]);
                        Player player = new Player(playerName, endurance, sprint, dribble, passing, shooting);
                        teams[teamName].AddPlayer(player);

                    }
                    else if (inputSplit[0] == "Remove")
                    {
                        if (!teams.ContainsKey(teamName))
                        {
                            Console.WriteLine($"Team {teamName} does not exist.");
                            input = Console.ReadLine();
                            continue;
                        }
                        string playerName = inputSplit[2];
                        teams[teamName].RemovePlayer(playerName);

                    }
                    else if (inputSplit[0] == "Rating")
                    {
                        if (!teams.ContainsKey(teamName))
                        {
                            Console.WriteLine($"Team {teamName} does not exist.");
                            input = Console.ReadLine();
                            continue;
                        }
                        int rating = (int) teams[teamName].ShowRating();
                        if (teams[teamName].GetPlayersCount==0)
                        {
                            rating = 0;
                        }
                        Console.WriteLine($"{teams[teamName].Name} - {rating}");
                    }
                }
                catch (Exception ex)
                {

                    Console.WriteLine(ex.Message);
                }

                input = Console.ReadLine();
            }
            

        }
    }
}
