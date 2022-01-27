using System;
using System.Collections.Generic;
using System.Text;

namespace Raiding
{
    public interface IBaseHero
    {
        public string Name { get; }
        public int Power { get; }
        public string CastAbility();
    }
}
