using System;

namespace PizzaCalories2._0
{
    public class Program
    {
        static void Main(string[] args)
        {
            string[] inputPizza = Console.ReadLine().Split();
            string[] inputDough = Console.ReadLine().Split();

            string flourType = inputDough[1];
            string bakingTechnique = inputDough[2];
            double doughtWeight = double.Parse(inputDough[3]);

            string pizzaName = inputPizza[1];

            try
            {
                Dough dough = new Dough(flourType, bakingTechnique, doughtWeight);
                Pizza pizza = new Pizza(pizzaName, dough);

                string[] toppingInput = Console.ReadLine().Split();

                while (toppingInput[0]!="END")
                {
                    string toppingType = toppingInput[1];
                    double toppingWight = double.Parse(toppingInput[2]);

                    Topping topping = new Topping(toppingType, toppingWight);

                    pizza.AddTopping(topping);


                    toppingInput = Console.ReadLine().Split();
                }
                Console.WriteLine($"{pizza.PizzaName} - {pizza.PizzaCalories():f2} Calories.");
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
            }
        }
    }
}
