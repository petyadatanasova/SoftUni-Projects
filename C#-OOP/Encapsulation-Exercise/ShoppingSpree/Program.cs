using System;
using System.Collections.Generic;

namespace ShoppingSpree
{
    public class Program
    {
        static void Main(string[] args)
        {
            string[] peopleInput = Console.ReadLine().Split(";");
            Dictionary<string, Person> people = new Dictionary<string, Person>();
            try
            {
                for (int i = 0; i < peopleInput.Length; i++)
                {
                    string[] peopleInfo = peopleInput[i].Split("=", StringSplitOptions.RemoveEmptyEntries);

                    string name = peopleInfo[0];
                    decimal money = decimal.Parse(peopleInfo[1]);
                    Person person = new Person(name, money);
                    people.Add(name, person);

                }
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
                return;
            }
            string[] productsInput = Console.ReadLine().Split(";", StringSplitOptions.RemoveEmptyEntries);
            Dictionary<string, Product> products = new Dictionary<string, Product>();
            try
            {
                for (int i = 0; i < productsInput.Length; i++)
                {
                    string[] productsInfo = productsInput[i].Split("=");
                    string nameProduct = productsInfo[0];
                    decimal cost = decimal.Parse(productsInfo[1]);
                    Product product = new Product(nameProduct, cost);
                    products.Add(nameProduct, product);

                }
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
                return;
                
            }

            string [] commandInput = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            while (commandInput[0]!="END")
            {
                string namePerson = commandInput[0];
                string nameProductToBuy = commandInput[1];

                if(people.ContainsKey(namePerson))
                {
                    try
                    {
                        people[namePerson].AddProduct(products[nameProductToBuy]);
                    }
                    catch (Exception ex)
                    {

                        Console.WriteLine(ex.Message);
                       
                    }
                }

                commandInput = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            }
            foreach (var person in people)
            {
                Console.WriteLine(person.Value);
                
            }

        }
    }
}
