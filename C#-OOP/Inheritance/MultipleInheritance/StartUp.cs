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

            Puppy puppy = new Puppy();

            puppy.Eat();
            puppy.Bark();
            puppy.Weep();
        }
    }
}
