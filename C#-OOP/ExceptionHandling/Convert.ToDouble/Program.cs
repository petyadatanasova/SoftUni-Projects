using System;
using System.Globalization;

namespace ConvertToDouble
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = { "3.14", "12.51", "1.erts", "dgdghjk", "-7.965", "6", "970000000", "Value", "-1.7976931348623157E+308", 
                "1.7976931348623157E+309" };
            for (int i = 0; i < input.Length; i++)
            {
                try
                {

                    if (Convert.ToDouble(input[i]) == double.PositiveInfinity || Convert.ToDouble(input[i]) == double.NegativeInfinity)
                    {
                        throw new OverflowException();
                    }
                    double doubleValue = Convert.ToDouble(input[i]);
                }
                catch (FormatException ex)
                {
                    Console.WriteLine(ex.Message);
                    Console.WriteLine(input[i]);
                }
                catch (OverflowException ex)
                {
                    Console.WriteLine(ex.Message);
                    Console.WriteLine(input[i]);
                }
               // Console.WriteLine(input[i]);
                
            }
           
            
            

        }
    }
}
