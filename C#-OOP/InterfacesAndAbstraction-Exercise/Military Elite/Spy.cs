using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public class Spy : Soldier, ISpy
    {
        public Spy(string firstName, string lastName, int id, int codeNumber) : base(firstName, lastName, id)
        {
            CodeNumber = codeNumber;
        }

        public int CodeNumber { get ; set ; }

        public override string ToString()
        {
            return $"Name: {FirstName} {LastName} Id: {Id}{Environment.NewLine}Code Number: {CodeNumber}";
        }
    }
}
