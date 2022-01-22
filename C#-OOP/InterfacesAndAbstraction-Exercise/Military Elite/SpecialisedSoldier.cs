using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public abstract class SpecialisedSoldier : Private, ISpecialisedSoldier
    {
        protected SpecialisedSoldier(string firstName, string lastName, int id, decimal salary) : base(firstName, lastName, id, salary)
        {

        }
        //public enum Corps { Airforces, Marines };

    }
}
