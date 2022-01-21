

using System;

namespace Telephony
{
    public class Smartphone : ICallable, IBrowsable
    {
        public string Calling(string phoneNumber)
        {
            
                return $"Calling... { phoneNumber}";

        }


        public string Browsing(string webSiteName)
        {

            return $"Browsing: { webSiteName}";

        }

       
    }
}
