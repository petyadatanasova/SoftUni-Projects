using System;
using System.Collections.Generic;
using System.Text;

namespace PizzaCalories2._0
{
    public class Pizza
    {
        private int minSymbols = 1;
        private int maxSymbols = 15;


        private string pizzaName;
        private Dough dough;
        private List<Topping> toppings;

        public Pizza(string pizzaName, Dough dough)
        {
            this.PizzaName = pizzaName;
            this.Dough = dough;
            this.toppings = new List<Topping>();
        }

        public string PizzaName
        {
            get { return pizzaName; }
            private set 
            { 
                if(value.Length<minSymbols || value.Length>maxSymbols || string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException($"Pizza name should be between {minSymbols} and {maxSymbols} symbols.");
                }
                pizzaName = value;
            }
        }
                
        public Dough Dough
        {
            get { return dough; }
            private set { dough = value; }
        }  

        public IReadOnlyCollection<Topping> Toppings
        {
            get { return toppings; }
        }

        public void AddTopping(Topping topping)
        {
            if(toppings.Count>=10)
            {
                throw new InvalidOperationException("Number of toppings should be in range [0..10].");
            }
            toppings.Add(topping);
        }

        public double PizzaCalories()
        {
            double totalCalories = dough.DoughCalories();
            foreach (var topping in toppings)
            {
                totalCalories += topping.ToppingCalories();
            }
            return totalCalories;
        }

    }
}
