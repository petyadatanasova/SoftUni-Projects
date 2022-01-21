using System;

namespace Telephony
{
   public class Program
    {
        static void Main(string[] args)
        {
            string[] phoneNumbers = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            string[] webSites = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);

            foreach (var number in phoneNumbers)
            {
                ICallable icallable = null;
                bool isNumberValid = true;
                for (int i = 0; i < number.Length; i++)
                {
                    if (!char.IsDigit(number[i]))
                    {
                        isNumberValid = false;
                    }
                }
                if(isNumberValid)
                {
                    if(number.Length==10)
                    {
                       icallable  = new Smartphone(); 
                    }
                    else if (number.Length==7)
                    {
                        icallable = new StationaryPhone();
                    }
                    else
                    {
                        Console.WriteLine("Invalid number!");
                        continue;

                    }
                    Console.WriteLine(icallable.Calling(number));
                }
                else
                {
                    Console.WriteLine("Invalid number!");
                }
               
            }

            foreach (var site in webSites)
            {
                IBrowsable ibrowsable = null;
                bool isWebSiteValid = true;
                for (int i = 0; i < site.Length; i++)
                {
                    if (char.IsDigit(site[i]))
                    {
                        isWebSiteValid = false;
                        continue;
                    }
                }
                if (isWebSiteValid)
                {
                    ibrowsable = new Smartphone();
                    Console.WriteLine(ibrowsable.Browsing($"{site}!"));
                }
                else
                {
                    Console.WriteLine("Invalid URL!");
                }
               
            }
        }
    }
}
