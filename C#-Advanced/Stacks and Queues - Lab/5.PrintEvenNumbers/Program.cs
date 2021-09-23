using System;
using System.Collections.Generic;
using System.Linq;

namespace _5.PrintEvenNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
           
            Queue<int> nums = new Queue<int>(Console.ReadLine().Split().Select(int.Parse));
            Queue<int> evenNums = new Queue<int>();
           

            while (nums.Count>=1)
            {

                if(nums.Peek()%2==0)
                {
                    evenNums.Enqueue(nums.Dequeue());
                    
                }
                else
                {
                    nums.Dequeue();
                    
                }
            }

            Console.WriteLine(string.Join(", ", evenNums));


        }
    }
}
