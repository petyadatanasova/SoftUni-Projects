using System;

namespace PizzaCalories
{
    public class Program
    {
        static void Main(string[] args)
        {
            
            try
            {
                string[] pizzaInfo = Console.ReadLine().Split();
                string[] DoughInfo = Console.ReadLine().Split();

                string pizzaName = pizzaInfo[1];
                string flourType = DoughInfo[1];
                string bakingTechnique = DoughInfo[2];
                double weight = double.Parse(DoughInfo[3]);
                
                Dough dough = new Dough(flourType, bakingTechnique, weight);
                Pizza pizza = new Pizza(pizzaName, dough);

                string[] toppingInfo = Console.ReadLine().Split();

                while (toppingInfo[0] != "END")
                {

                    string toppingName = toppingInfo[1];
                    double toppingWeight = double.Parse(toppingInfo[2]);

                    Topping topping = new Topping(toppingName, toppingWeight);

                    pizza.AddTopping(topping);

                    toppingInfo = Console.ReadLine().Split();
                }

                Console.WriteLine($"{pizza.PizzaName} - {pizza.CalculatePizzaCalories():f2} Calories.");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }



        }
    }
}
