using System;
using System.Collections.Generic;
using System.Text;

namespace PizzaCalories
{
    public class Topping
    {
        Dictionary<string, double> toppingModifiers = new Dictionary<string, double>
        {
            {"meat", 1.2},
            {"veggies", 0.8},
            {"cheese", 1.1},
            {"sauce", 0.9}
        };

        private string toppingName;
        private double weight;
       

        public Topping(string toppingName, double weight)
        {
            this.ToppingName = toppingName;
            this.Weight = weight;
           
        }

        public string ToppingName
        {
            get { return toppingName; }
            private set 
            { 
                if(!toppingModifiers.ContainsKey(value.ToLower()))
                {
                    throw new ArgumentException($"Cannot place {value} on top of your pizza.");
                }
                toppingName = value;
            }
        }
        

        public double Weight
        {
            get { return weight; }
            private set
            {
                if (value < 1 || value >50)
                {
                    throw new ArgumentException($"{toppingName} weight should be in the range[1..50].");
                }
                weight = value;
            }
        }

        public double ToppingCalories => 2 * weight * toppingModifiers[toppingName.ToLower()];



      



    }
}
