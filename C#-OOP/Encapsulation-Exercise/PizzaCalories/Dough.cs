using System;
using System.Collections.Generic;
using System.Text;

namespace PizzaCalories
{
    public class Dough
    {
        private string flourType;
        private string bakingTechnique;
        private double weight;


        Dictionary<string, double> doughModifiers = new Dictionary<string, double>
        {
            {"white", 1.5},
            {"wholegrain", 1.0},
            {"crispy", 0.9},
            {"chewy", 1.1},
            {"homemade", 1.0}

        };
        
        public Dough(string flourType, string bakingTechnique, double weight)
        {
            this.FlourType = flourType;
            this.BakingTechnique = bakingTechnique;
            this.Weight = weight;
        }

        public string FlourType
        {
            get { return flourType; }
            private set
            {
                CheckIfValidArgument(value.ToLower());
                flourType = value;
            }
        }

        

        public string BakingTechnique
        {
            get { return bakingTechnique; }
            private set 
            {
                CheckIfValidArgument(value.ToLower());
                bakingTechnique = value;
            }
        }

        public double Weight
        {
            get { return weight; }
            private set
            {
                if (value < 1 || value >200)
                {
                    throw new ArgumentException("Dough weight should be in the range [1..200].");
                }
                weight = value;
            }
        }

        private void CheckIfValidArgument(string value)
        {
            if (!doughModifiers.ContainsKey(value))
            {
                throw new ArgumentException("Invalid type of dough.");
            }
        }
        public double DoughCalories => 2 * weight * doughModifiers[flourType.ToLower()] * doughModifiers[bakingTechnique.ToLower()];
        
        
    }
}
