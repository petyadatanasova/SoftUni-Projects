using AquaShop.Models.Aquariums.Contracts;
using AquaShop.Models.Decorations.Contracts;
using AquaShop.Models.Fish.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AquaShop.Models.Aquariums
{
    public abstract class Aquarium : IAquarium
    {
        private string name;
        private int capacity;
        private List<IDecoration> decorations;
        private List<IFish> fish;

        public Aquarium(string name, int capacity)
        {
            this.Name = name;
            this.Capacity = capacity;
            decorations = new List<IDecoration>();
            fish = new List<IFish>();
        }
        public string Name
        { 
            get=>name;
            private set
            {
                if(string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Aquarium name cannot be null or empty.");
                }
                name = value;
            }
        }
        public int Capacity
        {
            get => capacity;
            private set
            {
                capacity = value;
            }
        }
        public int Comfort => decorations.Sum(x => x.Comfort);
         

        public ICollection<IDecoration> Decorations => decorations;

        public ICollection<IFish> Fish => fish;

        public void AddDecoration(IDecoration decoration)
        {
            this.decorations.Add(decoration);
        }

        public void AddFish(IFish fish)
        {
            if(capacity==this.fish.Count)
            {
                throw new InvalidOperationException("Not enough capacity.");
            }
            this.fish.Add(fish);
            
        }

        public void Feed()
        {
            foreach (var singleFish in this.fish)
            {
                singleFish.Eat();
            }
        }

        public string GetInfo()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"{Name} ({this.GetType().Name}):");
            if(this.fish.Count==0)
            {
                sb.AppendLine($"Fish: none");
            }
            else
            {
                List<string> fishNames = new List<string>();
                foreach (var singleFish in fish)
                {
                    fishNames.Add(singleFish.Name);
                }
                sb.AppendLine($"Fish: {string.Join(", ", fishNames)}");
            }
            sb.AppendLine($"Decorations: {decorations.Count}");
            sb.AppendLine($"Comfort: {Comfort}");

            return sb.ToString().TrimEnd();
        }

        public bool RemoveFish(IFish fish)
        {
            return this.fish.Remove(fish);
        }
    }
}
