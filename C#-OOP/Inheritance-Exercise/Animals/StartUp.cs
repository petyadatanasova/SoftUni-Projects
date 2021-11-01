using System;
using System.Collections.Generic;

namespace Animals
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            string type = Console.ReadLine();
            List<Animal> animals = new List<Animal>();
            while (type != "Beast!")
            {
                string[] input = Console.ReadLine().Split();
                if (input.Length != 3 || int.Parse(input[1]) < 0)
                {
                    Console.WriteLine("Invalid input!");
                }
                else
                {
                    string name = input[0];
                    int age = int.Parse(input[1]);
                    string gender = input[2];

                    if (type == "Dog")
                    {
                        Dog dog = new Dog(name, age, gender);
                        animals.Add(dog);
                    }
                    else if (type == "Cat")
                    {
                        Cat cat = new Cat(name, age, gender);
                        animals.Add(cat);
                    }
                    else if (type == "Frog")
                    {
                        Frog frog = new Frog(name, age, gender);
                        animals.Add(frog);
                    }
                    else if (type == "Kitten")
                    {
                        Kitten kitten = new Kitten(name, age);
                        animals.Add(kitten);
                    }
                    else if (type == "Tomcat")
                    {
                        Tomcat tomcat = new Tomcat(name, age);
                        animals.Add(tomcat);
                    }

                }

                type = Console.ReadLine();
            }
            foreach (var animal in animals)
            {
                Console.WriteLine(animal.GetType().Name);
                Console.WriteLine($"{animal.Name} {animal.Age} {animal.Gender}");
                Console.WriteLine(animal.ProduceSound());
            }

        }
    }
}
