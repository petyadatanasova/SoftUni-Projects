﻿using Formula1.Models.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace Formula1.Models
{
    public class Race : IRace
    {
        private string raceName;
        private int numberOfLaps;
        private bool tookPlace;
        private List<IPilot> pilots;
        public Race(string raceName, int numberOfLaps)
        {
            this.RaceName = raceName;
            this.NumberOfLaps = numberOfLaps;
            tookPlace = false;
            pilots = new List<IPilot>();
        }
        public string RaceName
        {
            get => raceName;
            private set
            {
                if(string.IsNullOrWhiteSpace(value) || value.Length<5)
                {
                    throw new ArgumentException($"Invalid race name: {value}.");
                }
                raceName = value;

            }
        }

        public int NumberOfLaps
        {
            get => numberOfLaps;
            private set
            {
                if(value<1)
                {
                    throw new ArgumentException($"Invalid lap numbers: {value}.");
                }
                numberOfLaps = value;
            }
        }

        public bool TookPlace 
        {
            get => tookPlace;
            set => tookPlace=value;
        }

        public ICollection<IPilot> Pilots => pilots;

        public void AddPilot(IPilot pilot)
        {
            pilots.Add(pilot);

        }

        public string RaceInfo()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"The {RaceName} race has:");
            sb.AppendLine($"Participants: {pilots.Count}");
            sb.AppendLine($"Number of laps: {numberOfLaps}");
            if(TookPlace)
            {
                sb.AppendLine($"Took place: Yes");
            }
            else
            {
                sb.AppendLine($"Took place: No");
            }

            return sb.ToString().TrimEnd();
            
        }
    }
}
