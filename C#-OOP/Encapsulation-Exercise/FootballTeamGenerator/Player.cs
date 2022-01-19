using System;
using System.Collections.Generic;
using System.Text;

namespace FootballTeamGenerator
{
    public class Player
    {
        private string name;
        private int endurance;
        private int sprint;
        private int dribble;
        private int passing;
        private int shooting;

        public Player(string name, int endurance, int sprint, int dribble, int passing, int shooting)
        {
            Name = name;
            Endurance = endurance;
            Sprint = sprint;
            Dribble = dribble;
            Passing = passing;
            Shooting = shooting;
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

        public int Endurance
        {
            get { return endurance; }
            private set
            {
                ValidateStats(value, nameof(Endurance));
                endurance = value;
            }
        }

        public int Sprint
        {
            get { return sprint; }
            private set
            {
                ValidateStats(value, nameof(Sprint));
                sprint = value;
            }
        }
        public int Dribble
        {
            get { return dribble; }
            private set
            {
                ValidateStats(value, nameof(Dribble));
                dribble = value;
            }
        }
        public int Passing
        {
            get { return passing; }
            private set
            {
                ValidateStats(value, nameof(Passing));
                passing = value;
            }
        }

        public int Shooting
        {
            get { return shooting; }
            private set
            {
                ValidateStats(value, nameof(Shooting));
                shooting = value;
            }
        }

        public double SkillLevel()
        {
            return (endurance + sprint + dribble + passing + shooting) / 5.0;
        }



        private void ValidateStats(int value, string statsName)
        {
            if (value < 0 || value > 100)
            {
                throw new ArgumentException($"{statsName} should be between 0 and 100.");
            }
        }
    }
}
