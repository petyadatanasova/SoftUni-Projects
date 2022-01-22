using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public class Mission : IMission
    {
        private string state;

        public Mission(string codeName, string state)
        {
            CodeName = codeName;
            State = state;
           
        }

        public string CodeName { get; set; }
        public string State
        { 
            get
            {
                return state;
            }
            private set
            {
                if(value =="inProgress" || value == "Finished")
                {
                    state = value;
                }
                else
                {
                    //mission should be skipped
                }
            }
        }

        public void CompleteMission()
        {
            if(state =="inProgress")
            {
                state = "Finished";
            }
        }
        public override string ToString()
        {
            return $"  Code Name: {CodeName} State: {state}";
        }
    }
}
