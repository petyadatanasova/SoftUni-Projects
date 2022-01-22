using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public class Commando : SpecialisedSoldier 

    {
        public Commando(string firstName, string lastName, int id, decimal salary, string corps) : base(firstName, lastName, id, salary)
        {
            Missions = new List<Mission>();
            Corps = corps;
        }
        public List<Mission> Missions { get; set; }
        public string Corps { get; private set; }

        private void SetCorps(string corpsName)
        {
            if (corpsName == "Airforces" || corpsName == "Marines")
            {
                Corps = corpsName;
            }
        }
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Name: {FirstName} {LastName} Id: {Id} Salary: {Salary:f2}");
            sb.AppendLine($"Corps: {Corps}");
            sb.AppendLine("Missions:");
            foreach (var mission in Missions)
            {
                sb.AppendLine(mission.ToString());
            }
            return sb.ToString().TrimEnd();
        }
    }
}
