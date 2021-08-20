using System;
using System.Linq;

namespace _04._Reverse_Array_of_Strings
{
    class Program
    {
        static void Main(string[] args)
        {
            //1.
            string[] items = Console.ReadLine().Split().ToArray();


            for (int i = 0; i < items.Length; i++)
            {
                Console.Write(items[items.Length-1-i] + " ");
            }



            // 2. Another way of solving it

            //var array = Console.ReadLine().Split(" ").ToArray();

            //for (int i = 0; i < array.Length / 2; i++)
            //{
            //    var oldElement = array[i];
            //    array[i] = array[array.Length - 1 - i];
            //    array[array.Length - 1 - i] = oldElement;

            //}
            //Console.WriteLine(string.Join(" ", array));

        }
    }
}
