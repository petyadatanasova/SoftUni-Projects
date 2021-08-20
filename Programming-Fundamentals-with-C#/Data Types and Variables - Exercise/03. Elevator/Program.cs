using System;

namespace _03._Elevator
{
    class Program
    {
        static void Main(string[] args)
        {
            int peopleToLift = int.Parse(Console.ReadLine());
            int capacityOfElevator = int.Parse(Console.ReadLine());

            double liftsNeeded = Math.Ceiling((double)peopleToLift /capacityOfElevator);
            Console.WriteLine(liftsNeeded);



        }
    }
}
