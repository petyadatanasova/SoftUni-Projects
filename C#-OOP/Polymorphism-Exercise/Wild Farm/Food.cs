using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public abstract class Food
    {
        public int Quantity { get; set; }

        protected Food(int quantity)
        {
            Quantity = quantity;
        }
    }
}
