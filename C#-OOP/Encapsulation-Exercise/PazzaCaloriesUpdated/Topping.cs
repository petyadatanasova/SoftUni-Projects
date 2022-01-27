using System;
using System.Collections.Generic;
using System.Text;

namespace PizzaCalories2._0
{
    public class Topping
    {
        private Dictionary<string, double> toppingModifiers = new Dictionary<string, double>
        {
            {"meat",1.2},
            {"veggies",0.8},
            {"cheese",1.1},
            {"sauce",0.9}

        };

        private int weightMinRange = 1;
        private int weightMaxRange = 50;

        private string toppingType;
        private double weight;

        public Topping(string toppingType, double weight)
        {
            this.ToppingType = toppingType;
            this.Weight = weight;
        }

        public string ToppingType
        {
            get { return toppingType; }
           private set 
            {
                if(!toppingModifiers.ContainsKey(value.ToLower()))
                {
                    throw new ArgumentException($"Cannot place {value} on top of your pizza.");
                }
                toppingType = value;
            }
        }
    
        public double Weight
        {
            get { return weight; }
            private set 
            { 
                if(value<weightMinRange || value >weightMaxRange)
                {
                    throw new ArgumentException($"{toppingType} weight should be in the range [{weightMinRange}..{weightMaxRange}].");
                }
                weight = value; 
            }
        }
        public double ToppingCalories()
        {
            return 2 * weight * toppingModifiers[toppingType.ToLower()];
        }
    }
}
