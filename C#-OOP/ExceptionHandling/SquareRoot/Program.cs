using System;

namespace SquareRoot
{
    class Program
    {
        static void Main(string[] args)
        {
           
            try
            {
                int number = int.Parse(Console.ReadLine());
                if(number<0)
                {
                    throw new ArgumentOutOfRangeException("Invalid number");
                }
                double square = Math.Sqrt(number);
                Console.WriteLine(square);

                //string input = Console.ReadLine();
                //if (!int.TryParse(input, out int number) || int.Parse(input) < 0)
                //{
                //    throw new InvalidOperationException("Invalid number");
                //}
                //else
                //{
                //   double square = Math.Sqrt(number);
                //    Console.WriteLine(square);
                //}
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
            }
            finally
            {
                Console.WriteLine("Goodbye.");
            }
        }
    }
}
