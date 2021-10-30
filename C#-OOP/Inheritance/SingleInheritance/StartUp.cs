using System;

namespace Farm
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            Animal animal = new Animal();
            Dog dog = new Dog();

            animal.Eat();
            dog.Bark();
            dog.Eat();

        }
    }
}
