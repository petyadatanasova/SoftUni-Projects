using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public abstract class Soldier : ISoldier
    {
        protected Soldier(string firstName, string lastName, int id)
        {
            FirstName = firstName;
            LastName = lastName;
            Id = id;
        }

        public string FirstName { get; private set; }

        public string LastName { get; private set; }

        public int Id { get; private set; }
    }
}
