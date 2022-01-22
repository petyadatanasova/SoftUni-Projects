using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public class LieutenantGeneral : Private, ILieutenantGeneral
    {
        public LieutenantGeneral(string firstName, string lastName, int id, decimal salary) : base(firstName, lastName, id, salary)
        {
            Privates = new List<IPrivate>();
        }
        //public List<Private> myPrivates { get; set; }

        public List<IPrivate> Privates { get; set; }
        

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Name: {FirstName} {LastName} Id: {Id} Salary: {Salary:f2}");
            sb.AppendLine("Privates:");

            foreach (var myPrivate in Privates)
            {
                sb.AppendLine("  "+ myPrivate.ToString());
            }
            return sb.ToString().TrimEnd();
        }
    }
}
