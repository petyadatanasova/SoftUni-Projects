using System;

namespace Stealer
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            Spy spy = new Spy();
            string result = spy.StealFieldInfo("Stealer.Hacker", "username", "password");
            Console.WriteLine(result);

            Spy spy1 = new Spy();
            string result1 = spy.AnalyzeAccessModifiers("Stealer.Hacker");
            Console.WriteLine(result1);
        }
    }
}
