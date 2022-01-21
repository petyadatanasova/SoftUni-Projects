using System;

namespace PersonInfo
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            int age = int.Parse(Console.ReadLine());
            string id = Console.ReadLine();
            string birthdate = Console.ReadLine();

            IIdentifiable iidentifiable = new Citizen(name, age, id, birthdate);
            IBirthable ibirthable = new Citizen(name, age, id, birthdate);

            Console.WriteLine(iidentifiable.Id);
            Console.WriteLine(ibirthable.Birthdate);

        }
    }
}
