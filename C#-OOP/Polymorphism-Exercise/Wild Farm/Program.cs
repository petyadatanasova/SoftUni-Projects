using System;
using System.Collections.Generic;

namespace WildFarm
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] inputAnimal = Console.ReadLine().Split();
            List<Animal> animals = new List<Animal>();

            while (inputAnimal[0] != "End")
            {
                string[] inputFood = Console.ReadLine().Split();
                
                string animalType = inputAnimal[0];
                string name = inputAnimal[1];
                double weight = double.Parse(inputAnimal[2]);
                Animal animal = null;
                string foodType = inputFood[0];
                int foodQuantity = int.Parse(inputFood[1]);
                Food food = null;
                if(foodType=="Meat")
                {
                    food = new Meat(foodQuantity);
                }
                else if (foodType=="Fruit")
                {
                    food = new Fruit(foodQuantity);
                }
                else if (foodType=="Vegetable")
                {
                    food = new Vegetable(foodQuantity);
                }
                else if (foodType=="Seeds")
                {
                    food = new Seeds(foodQuantity);
                }
                if (animalType == "Owl" || animalType == "Hen")
                {
                    double wingSize = double.Parse(inputAnimal[3]);
                    if (animalType == "Owl")
                    {
                        animal = new Owl(name, weight, wingSize);
                        Console.WriteLine(animal.ProduceSound()); 

                        if (food.GetType().Name == "Meat")
                        {
                            animal.FoodEaten += food.Quantity;
                            animal.IncreaseWeight(food.Quantity);
                        }
                        else
                        {
                            Console.WriteLine($"Owl does not eat {foodType}!");
                        }
                    }
                    else
                    {
                        animal = new Hen(name, weight, wingSize);
                        Console.WriteLine(animal.ProduceSound());
                        animal.FoodEaten += food.Quantity;
                        animal.IncreaseWeight(food.Quantity);

                    }

                }
                else if (animalType == "Mouse" || animalType == "Dog")
                {
                    string livingRegion = inputAnimal[3];
                    if (animalType == "Mouse")
                    {
                        animal = new Mouse(name, weight, livingRegion);
                        Console.WriteLine(animal.ProduceSound());
                        if (food.GetType().Name == "Vegetables" || food.GetType().Name== "Fruit")
                        {
                            animal.FoodEaten += food.Quantity;
                            animal.IncreaseWeight(food.Quantity);
                        }
                        else
                        {
                            Console.WriteLine($"Mouse does not eat {foodType}!");
                        }
                    }
                    else
                    {
                        animal = new Dog(name, weight, livingRegion);
                        Console.WriteLine(animal.ProduceSound());
                        if (food.GetType().Name == "Meat")
                        {
                            animal.FoodEaten += food.Quantity;
                            animal.IncreaseWeight(food.Quantity);
                        }
                        else
                        {
                            Console.WriteLine($"Dog does not eat {foodType}!");
                        }
                    }

                }
                else if (animalType == "Cat" || animalType == "Tiger")
                {
                    string livingRegion = inputAnimal[3];
                    string breed = inputAnimal[4];
                    if (animalType == "Cat")
                    {
                        animal = new Cat(name, weight, livingRegion, breed);
                        Console.WriteLine(animal.ProduceSound());
                        if (food.GetType().Name == "Meat" || food.GetType().Name == "Vegetable")
                        {
                            animal.FoodEaten += food.Quantity;
                            animal.IncreaseWeight(food.Quantity);
                        }
                        else
                        {
                            Console.WriteLine($"Cat does not eat {foodType}!");
                        }
                    }
                    else
                    {
                        animal = new Tiger(name, weight, livingRegion, breed);
                        Console.WriteLine(animal.ProduceSound());
                        if (food.GetType().Name == "Meat")
                        {
                            animal.FoodEaten += food.Quantity;
                            animal.IncreaseWeight(food.Quantity);
                        }
                        else
                        {
                            Console.WriteLine($"Tiger does not eat {foodType}!");
                        }
                    }
                }

                animals.Add(animal);
                inputAnimal = Console.ReadLine().Split();
            }
            foreach (var animal in animals)
            {
                Console.WriteLine(animal.ToString()); 
            }
        }
    }
}
