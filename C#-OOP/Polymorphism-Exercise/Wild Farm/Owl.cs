using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public class Owl : Bird
    {
        public Owl(string name, double weight, double wingsize)
            : base(name, weight, wingsize)
        {
        }
        public override string ProduceSound()
        {
            return "Hoot Hoot";
        }
        public override void IncreaseWeight(int foodQuantity)
        {
            this.Weight += foodQuantity * 0.25;
        }
    }
}
