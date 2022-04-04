using Gym.Core.Contracts;
using Gym.Models.Athletes;
using Gym.Models.Athletes.Contracts;
using Gym.Models.Equipment;
using Gym.Models.Equipment.Contracts;
using Gym.Models.Gyms;
using Gym.Models.Gyms.Contracts;
using Gym.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Gym.Core
{
    public class Controller : IController
    {
        private EquipmentRepository equipment;
        private List<IGym> gyms;
        public Controller()
        {
            equipment = new EquipmentRepository();
            gyms = new List<IGym>();
        }
        public string AddAthlete(string gymName, string athleteType, string athleteName, string motivation, int numberOfMedals)
        {
            IAthlete athlete;
            IGym gym;
            if (athleteType=="Boxer")
            {
               gym = gyms.FirstOrDefault(x => x.Name == gymName);
                if (gym.GetType().Name == "BoxingGym")
                {
                    athlete = new Boxer(athleteName, motivation, numberOfMedals);
                }
                else
                {
                    return "The gym is not appropriate.";
                }
            }
            
            else if (athleteType == "Weightlifter" )
            {
                gym = gyms.FirstOrDefault(x => x.Name == gymName);
                if (gym.GetType().Name == "WeightliftingGym")
                {
                    athlete = new Weightlifter(athleteName, motivation, numberOfMedals);  
                }
                else
                {
                    return "The gym is not appropriate.";
                }

            }
            else
            {
                throw new InvalidOperationException("Invalid athlete type.");
            }
            
            gym.AddAthlete(athlete);
            return $"Successfully added {athleteType} to {gymName}.";

        }

        public string AddEquipment(string equipmentType)
        {
            IEquipment equpmentPiece;
            if(equipmentType== "BoxingGloves")
            {
                equpmentPiece = new BoxingGloves();
            }
            else if (equipmentType== "Kettlebell")
            {
                equpmentPiece = new Kettlebell();
            }
            else
            {
                throw new InvalidOperationException("Invalid equipment type.");
            }
            equipment.Add(equpmentPiece);
            return $"Successfully added {equipmentType}.";
        }

        public string AddGym(string gymType, string gymName)
        {
            IGym gym;
            if (gymType== "BoxingGym")
            {
               gym = new BoxingGym(gymName);   
            }
            else if (gymType== "WeightliftingGym")
            {
                gym = new WeightliftingGym(gymName); 
            }
            else
            {
                throw new InvalidOperationException("Invalid gym type.");
            }
            gyms.Add(gym);
            return $"Successfully added {gym.GetType().Name}.";
        }

        public string EquipmentWeight(string gymName)
        {
            IGym gym = gyms.FirstOrDefault(x => x.Name == gymName);

            return $"The total weight of the equipment in the gym {gymName} is {gym.EquipmentWeight:F2} grams.";
        }

        public string InsertEquipment(string gymName, string equipmentType)
        {
            IEquipment equipmentPiece = equipment.FindByType(equipmentType);
            if(equipmentPiece==null)
            {
                throw new InvalidOperationException($"There isn’t equipment of type {equipmentType}.");
            }
            IGym gym = gyms.FirstOrDefault(x => x.Name == gymName);
            gym.AddEquipment(equipmentPiece);
            equipment.Remove(equipmentPiece);
            return $"Successfully added {equipmentType} to {gymName}.";
        }

        public string Report()
        {
            StringBuilder sb = new StringBuilder();

            foreach (var gym in gyms)
            {
                sb.AppendLine(gym.GymInfo());
            }
            return sb.ToString().TrimEnd();
        }

        public string TrainAthletes(string gymName)
        {
            IGym gym = gyms.FirstOrDefault(x => x.Name == gymName);
            foreach (var athlete in gym.Athletes)
            {
                athlete.Exercise();
            }
            return $"Exercise athletes: {gym.Athletes.Count}.";
        }
    }
}
