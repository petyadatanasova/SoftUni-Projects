using System;
using System.Collections.Generic;
using System.Text;

namespace CommandPattern.Core.Contracts
{
    public class Engine : IEngine
    {
        private readonly ICommandInterpreter commandInterpreter;

        public Engine(ICommandInterpreter commandInterpreter)
        {
            this.commandInterpreter = commandInterpreter;
        }

        public void Run()
        {
            string engineCondition;
            while (true)
            {
                engineCondition = commandInterpreter.Read(Console.ReadLine());
                if(engineCondition==null)
                {
                    break;
                }
                Console.WriteLine(engineCondition);
            }
        }
    }
}
