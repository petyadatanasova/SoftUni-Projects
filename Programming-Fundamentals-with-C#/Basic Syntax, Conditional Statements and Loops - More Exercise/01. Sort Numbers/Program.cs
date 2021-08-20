using System;

namespace _01._Sort_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int firstNum = int.Parse(Console.ReadLine());
            int secondNum = int.Parse(Console.ReadLine());
            int thirdNum = int.Parse(Console.ReadLine());

            if(firstNum>secondNum && firstNum>thirdNum)
            {
                Console.WriteLine(firstNum);
                if (secondNum > thirdNum)
                {
                    Console.WriteLine(secondNum);
                    Console.WriteLine(thirdNum);
                }
                else
                {
                    Console.WriteLine(thirdNum);
                    Console.WriteLine(secondNum); 
                }
            }
            if (secondNum > firstNum && secondNum > thirdNum)
            {
                Console.WriteLine(secondNum);
                if (firstNum > thirdNum)
                {
                    Console.WriteLine(firstNum);
                    Console.WriteLine(thirdNum);
                }
                else
                {
                    Console.WriteLine(thirdNum);
                    Console.WriteLine(firstNum);
                }
            }
            if (thirdNum > secondNum && thirdNum > firstNum)
            {
                Console.WriteLine(thirdNum);
                if (secondNum > firstNum)
                {
                    Console.WriteLine(secondNum);
                    Console.WriteLine(firstNum);
                }
                else
                {
                    Console.WriteLine(firstNum);
                    Console.WriteLine(secondNum);
                }
            }




            //int maxNum = int.MinValue;
            //int minNum = int.MaxValue;
            //int midNum = 0;

            //if (firstNum>maxNum)
            //{
            //    maxNum = firstNum;
            //}
            //if (secondNum>maxNum)
            //{
            //    maxNum = secondNum;
            //}
            //if (thirdNum>maxNum)
            //{
            //    maxNum = thirdNum;
            //}
            //if (firstNum<minNum)
            //{
            //    minNum = firstNum;
            //}
            //if(secondNum<minNum)
            //{
            //    minNum = secondNum;
            //}
            //if (thirdNum<minNum)
            //{
            //    minNum = thirdNum;
            //}

            //if (firstNum!=minNum && firstNum!=maxNum)
            //{
            //    midNum = firstNum;
            //}
            //if(secondNum!=minNum && secondNum!=maxNum)
            //{
            //    midNum = secondNum;
            //}
            //if (thirdNum!=minNum && thirdNum!=maxNum )
            //{
            //    midNum = thirdNum;
            //}
            //Console.WriteLine(maxNum);
            //Console.WriteLine(midNum);
            //Console.WriteLine(minNum);
        }
    }
}
