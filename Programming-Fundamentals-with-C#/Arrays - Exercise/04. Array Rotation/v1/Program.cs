using System;
using System.Linq;

namespace _04._Array_Rotation
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] array = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int numberOfRotations = int.Parse(Console.ReadLine());
            

            for (int i = 0; i < numberOfRotations; i++)
            {
                var temp = array[0];
                for (int j = 0; j < array.Length - 1; j++)
                {


                    array[j] = array[j + 1];


                }
                array[array.Length - 1] = temp;

                
            }
            Console.WriteLine(string.Join(" ", array));

        }
    }
}
