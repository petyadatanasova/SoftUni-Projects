using System;
using System.Collections.Generic;
using System.Text;

namespace PizzaCalories2._0
{
    public class Dough
    {
        private Dictionary<string, double> flourTypeModifiers = new Dictionary<string, double>
        {
            {"white", 1.5},
            {"wholegrain", 1.0}
        };
        private Dictionary<string, double> bakingTechniqueModifiers = new Dictionary<string, double>
        {
            {"crispy", 0.9},
            {"chewy", 1.1},
            {"homemade", 1.0}
        };
        private int weightMinRange = 1;
        private int weightMaxRange = 200;

        private string message = "Invalid type of dough.";
        private string flourType;
        private string bakingTechnique;
        private double weight;

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
                if (!flourTypeModifiers.ContainsKey(value.ToLower()))
                {
                    throw new ArgumentException(message);
                }
                flourType = value;
            }
        }

        public string BakingTechnique
        {
            get { return bakingTechnique; }
            private set
            {
                if (!bakingTechniqueModifiers.ContainsKey(value.ToLower()))
                {
                    throw new ArgumentException(message);
                }
                bakingTechnique = value;
            }
        }

        public double Weight
        {
            get { return weight; }
            private set
            {
                if (value < weightMinRange || value > weightMaxRange)
                {
                    throw new ArgumentException($"{nameof(Dough)} weight should be in the range[{weightMinRange}..{weightMaxRange}].");
                }
                weight = value;
            }
        }
        public double DoughCalories()
        {
            return (2 * weight) * flourTypeModifiers[flourType.ToLower()] * bakingTechniqueModifiers[bakingTechnique.ToLower()];
        }

    }
}
