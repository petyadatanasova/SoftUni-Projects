using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public abstract class Animal
    {
        protected Animal(string name, double weight)
        {
            Name = name;
            Weight = weight;
        }

        public string Name { get; protected set; }
        public double Weight { get; protected set; }
        public int FoodEaten { get; set; }

        public abstract string ProduceSound();
        public abstract void IncreaseWeight(int foodQuantity);

    }
}
