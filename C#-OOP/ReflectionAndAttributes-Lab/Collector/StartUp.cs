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

            Console.WriteLine();
            Console.WriteLine(new string ('*', 60 ));
            Console.WriteLine();

            Spy spy1 = new Spy();
            string result1 = spy.AnalyzeAccessModifiers("Stealer.Hacker");
            Console.WriteLine(result1);

            Console.WriteLine();
            Console.WriteLine(new string('*', 60));
            Console.WriteLine();

            Spy spy2 = new Spy();
            string result2 = spy.RevealPrivateMethods("Stealer.Hacker");
            Console.WriteLine(result2);

            Console.WriteLine();
            Console.WriteLine(new string('*', 60));
            Console.WriteLine();

            Spy spy3 = new Spy();
            string result3 = spy.CollectGettersAndSetters("Stealer.Hacker");
            Console.WriteLine(result3);
        }
    }
}
