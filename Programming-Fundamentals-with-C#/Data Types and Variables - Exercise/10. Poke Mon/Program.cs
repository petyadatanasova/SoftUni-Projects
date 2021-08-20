using System;

namespace _10._Poke_Mon
{
    class Program
    {
        static void Main(string[] args)
        {
            int pokePower = int.Parse(Console.ReadLine());
            int startPower = pokePower;
            int distanceTarget = int.Parse(Console.ReadLine());
            int exhaustionFactor = int.Parse(Console.ReadLine());
            int countPokes = 0;

            while (pokePower>=distanceTarget)
            {

                if (pokePower == (startPower / 2) && exhaustionFactor!=0)
                {
                    
                        pokePower /= exhaustionFactor;
                    
                }
                if (pokePower >= distanceTarget)
                {
                    countPokes++;
                    pokePower -= distanceTarget;
                }
                
            }
            Console.WriteLine(pokePower);
            Console.WriteLine(countPokes);


        }
    }
}
