using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public class Tiger : Feline
    {
        public Tiger(string name, double weight, string livingRegion, string breed) 
            : base(name, weight, livingRegion, breed)
        {
        }
        public override string ProduceSound()
        {
            return "ROAR!!!";
        }
        public override void IncreaseWeight(int foodQuantity)
        {
            this.Weight += foodQuantity;
        }
    }
}
