using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace CommandPattern.Core.Contracts
{
    public class CommandInterpreter : ICommandInterpreter
    {
        public string Read(string args)
        {
            string[] cmdArgs = args.Split();
            string result = string.Empty;
            string commandType = cmdArgs[0] + "Command";

            Type typeOfCommand = Assembly.GetCallingAssembly().GetTypes().Where(c => c.Name == commandType).FirstOrDefault();
            ICommand executable = (Activator.CreateInstance(typeOfCommand)) as ICommand;
            result = executable.Execute(cmdArgs.Skip(1).ToArray());

            return result;

        }

    }
}
