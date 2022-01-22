using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public class Repair : IRepairs
    {
        public Repair(string name, int hoursWorked)
        {
            Name = name;
            HoursWorked = hoursWorked;
        }

        public string Name { get; set ; }
        public int HoursWorked { get; set ; }

        public override string ToString()
        {
            return $"  Part Name: {Name} Hours Worked: {HoursWorked}";
        }
    }
}
