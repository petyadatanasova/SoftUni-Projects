using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    interface ISoldier
    {
        public string FirstName { get; }
        public string LastName { get; }
        public int Id { get;  }
    }
}
