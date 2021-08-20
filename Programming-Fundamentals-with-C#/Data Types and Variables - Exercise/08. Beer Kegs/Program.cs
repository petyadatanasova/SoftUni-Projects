using System;

namespace _08._Beer_Kegs
{
    class Program
    {
        static void Main(string[] args)
        {
            int numKegs = int.Parse(Console.ReadLine());
            double biggestKeg = double.MinValue;
            string biggestKegModel = string.Empty;

            for (int i = 0; i < numKegs; i++)
            {

                string modelOfKeg = Console.ReadLine();
                double radiusKeg = double.Parse(Console.ReadLine());
                int heightKeg = int.Parse(Console.ReadLine());

                double volumeKeg = Math.PI * radiusKeg * radiusKeg * heightKeg;
                //double volumeKeg = Math.PI * Math.Pow(radiusKeg, 2) * heightKeg;

                if (volumeKeg>biggestKeg)
                {
                    biggestKeg = volumeKeg;
                    biggestKegModel = modelOfKeg;
                }
            }
            Console.WriteLine(biggestKegModel);



        }
    }
}
