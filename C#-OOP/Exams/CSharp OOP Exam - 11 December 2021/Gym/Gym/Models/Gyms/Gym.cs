using Gym.Models.Athletes.Contracts;
using Gym.Models.Equipment.Contracts;
using Gym.Models.Gyms.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace Gym.Models.Gyms
{
    public abstract class Gym : IGym
    {
        private string name;
        private int capacity;
        private double equipmentWeight;
        private List<IEquipment> equipment;
        private List<IAthlete> athletes;

        public Gym(string name, int capacity)
        {
            this.Name = name;
            this.Capacity = capacity;
            equipment = new List<IEquipment>();
            athletes = new List<IAthlete>();
            equipmentWeight = 0;

        }

        public string Name
        {
            get => name;
            private set
            {
                if(string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Gym name cannot be null or empty.");
                }
                name = value;
            }
        }
        public int Capacity
        {
            get=> capacity;
            private set
            {
                capacity = value;
            }

        }

        public double EquipmentWeight
        {
            get
            {
                foreach (var item in equipment)
                {
                    equipmentWeight += item.Weight;
                }
                return equipmentWeight;
            }

        }
        public ICollection<IEquipment> Equipment => equipment;

        public ICollection<IAthlete> Athletes => athletes;

        public void AddAthlete(IAthlete athlete)
        {
            if(athletes.Count>=Capacity)
            {
                throw new InvalidOperationException("Not enough space in the gym.");
            }
            athletes.Add(athlete);
        }

        public void AddEquipment(IEquipment equipment)
        {
            this.equipment.Add(equipment);
            
        }

        public void Exercise()
        {
            foreach (var athlete in athletes)
            {
                athlete.Exercise();
            }
        }

        public string GymInfo()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"{this.Name} is a {this.GetType().Name}:");
            if(athletes.Count==0)
            {
                sb.AppendLine("Athletes: No athletes");
            }
            else
            {
                List<string> athletesNames = new List<string>();
                foreach (var athlete in athletes)
                {
                    athletesNames.Add(athlete.FullName);
                }
                sb.AppendLine($"Athletes: {string.Join(", ", athletesNames)}");
            }
            sb.AppendLine($"Equipment total count: {this.equipment.Count}");
            sb.AppendLine($"Equipment total weight: {this.EquipmentWeight:f2} grams");
            return sb.ToString().TrimEnd();
        }

        public bool RemoveAthlete(IAthlete athlete)
        {
            return athletes.Remove(athlete);
        }
    }
}
