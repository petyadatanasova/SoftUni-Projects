using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public class Engineer : SpecialisedSoldier 

    {
        private string corps;
        public Engineer(string firstName, string lastName, int id, decimal salary, string corps) : base(firstName, lastName, id, salary)
        {
            Repairs = new List<Repair>();
            Corps = corps;
        }
        public List<Repair> Repairs { get; set; }

        public string Corps 
        { 
            get
            {
                return corps;
            }

            private set
            {
                if (value == "Airforces" || value == "Marines")
                {
                    corps = value;
                }
            }
        }

        //private void SetCorps(string corpsName)
        //{
        //    if(corpsName=="Airforces" || corpsName=="Marines")
        //    {
        //        Corps = corpsName;
        //    }
        //}

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Name: {FirstName} {LastName} Id: {Id} Salary: {Salary:f2}");
            sb.AppendLine($"Corps: {Corps}");
            sb.AppendLine("Repairs:");
            foreach (var repair in Repairs)
            {
                sb.AppendLine(repair.ToString());
            }
            return sb.ToString().TrimEnd();
        }
        public void AddRepairs(Repair repair)
        {
            Repairs.Add(repair);
        }

    }
}
