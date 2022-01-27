using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public class Hen : Bird
    {
        public Hen(string name, double weight, double wingsize) 
            : base(name, weight, wingsize)
        {
        }
        public override string ProduceSound()
        {
            return "Cluck";
        }
        public override void IncreaseWeight(int foodQuantity)
        {
            this.Weight += foodQuantity * 0.35;
        }
    }
}
