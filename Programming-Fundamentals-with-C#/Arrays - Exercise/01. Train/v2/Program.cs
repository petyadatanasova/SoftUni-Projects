using System;

namespace _01._Train_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int numWagons = int.Parse(Console.ReadLine());
            int sumPeople = 0;
            int[] peopleInTrain = new int[numWagons];
            for (int i = 0; i < numWagons; i++)
            {
                peopleInTrain[i] = int.Parse(Console.ReadLine());

                sumPeople += peopleInTrain[i];
            }

            foreach (var item in peopleInTrain)
            {
                Console.Write(item + " ");
            }
            Console.WriteLine();
            Console.WriteLine(sumPeople);
        }
    }
}
