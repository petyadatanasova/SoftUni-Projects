using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FootballTeamGenerator
{
    public class Team
    {
        private string name;
        private Dictionary<string, Player> players;

        public Team(string name)
        {
            Name = name;
            players = new Dictionary<string, Player>();
        }

        public string Name
        {
            get { return name; }
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("A name should not be empty.");
                }
                name = value;
            }
        }
        public int GetPlayersCount => players.Count;

        public void AddPlayer(Player player)
        {
            if (!players.ContainsKey(player.Name))
            {
                players.Add(player.Name, player);
            }
        }
        
        public void RemovePlayer(string playerName)
        {
            if (players.ContainsKey(playerName))
            {
                players.Remove(playerName);
            }
            else
            {
                Console.WriteLine($"Player {playerName} is not in {this.Name} team.");
            }
        }
        public double ShowRating()
        {
            double totalSkillLevel = 0.0;
            foreach (var player in players)
            {
                totalSkillLevel += player.Value.SkillLevel();
            }
            double aveSkill = totalSkillLevel / players.Count;

            return Math.Round(aveSkill);
        }
    }
}
