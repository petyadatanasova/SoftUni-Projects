using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public class Cat : Feline
    {
        public Cat(string name, double weight, string livingRegion, string breed)
            : base(name, weight, livingRegion, breed)
        {
        }
        public override string ProduceSound()
        {
            return "Meow";
        }
        public override void IncreaseWeight(int foodQuantity)
        {
            this.Weight += foodQuantity * 0.30;
        }
    }
}
