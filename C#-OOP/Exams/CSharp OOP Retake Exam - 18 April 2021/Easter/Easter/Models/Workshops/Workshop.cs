using Easter.Models.Bunnies.Contracts;
using Easter.Models.Eggs.Contracts;
using Easter.Models.Workshops.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Easter.Models.Workshops
{
    public class Workshop : IWorkshop
    {
        public Workshop()
        {

        }
        public void Color(IEgg egg, IBunny bunny)
        {
            while (bunny.Energy > 0 && bunny.Dyes.Count > 0)
            {
                egg.GetColored(); // reduce energy required
                bunny.Work();   // reduce energy of a bunny
                bunny.Dyes.First().Use();    //Reduce power
                if (bunny.Dyes.First().IsFinished())   //If Power==0
                {
                    bunny.Dyes.Remove(bunny.Dyes.First());
                }
                if (egg.IsDone())
                {
                    break;
                }
                
            }
        }
    }
}
