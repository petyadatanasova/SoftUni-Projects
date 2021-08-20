using System;

namespace _01._Convert_Meters_to_Kilometers
{
    class Program
    {
        static void Main(string[] args)
        {
            int meters = int.Parse(Console.ReadLine());

            decimal kilometers = meters / 1000.0M;
            //float kilometers = meters / 1000.0f;
            // double kilometers = meter / 1000.0; 
           
            Console.WriteLine($"{kilometers:f2}");
           

        }
    }
}
