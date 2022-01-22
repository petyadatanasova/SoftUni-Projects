using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public class Private : Soldier, IPrivate
    {
        public Private(string firstName, string lastName, int id, decimal salary) : base(firstName, lastName, id)
        {
            Salary = salary;
        }

        public decimal Salary { get; private set; }
        public override string ToString()
        {
            return $"Name: {FirstName} {LastName} Id: {Id} Salary: {Salary:f2}";
        }
    }
}
