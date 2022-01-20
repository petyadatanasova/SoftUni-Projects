using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PizzaCalories
{
    public class Pizza
    {
        private string  pizzaName;
        private List<Topping> toppings;
        private Dough dough;


        public Pizza(string pizzaName, Dough dough)
        {
            this.toppings = new List<Topping>();
            this.PizzaName = pizzaName;
            this.DoughtName = dough;

        }

        public string PizzaName
        {
            get { return pizzaName; }
            private set 
            { 
                if(value.Length<1 || value.Length>15)
                {
                    throw new ArgumentException("Pizza name should be between 1 and 15 symbols.");
                }
                pizzaName = value; 
            }
        }

        public Dough DoughtName
        {
            get { return dough; }
            private set { dough = value; }
        }
        public IReadOnlyCollection<Topping> Toppings => toppings;
        public void AddTopping(Topping topping)
        {
            if (toppings.Count > 10)
            {
                throw new ArgumentException("Number of toppings should be in range [0..10].");
            }
            toppings.Add(topping);

        }
        public double CalculatePizzaCalories() => dough.DoughCalories + toppings.Sum(x => x.ToppingCalories);
        
    }
}
