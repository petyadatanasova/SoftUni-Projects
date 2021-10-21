using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace VetClinic
{
   public class Clinic
    {
        public Clinic(int capacity)
        {
            Capacity = capacity;
            Pets = new List<Pet>();
        }

        public List<Pet> Pets { get; set; }
        public int Capacity { get; set; }

        public int Count => Pets.Count;
        public void Add(Pet pet)
        {
            if(Pets.Count<Capacity)
            {
                Pets.Add(pet);
            }
        }

        public bool Remove(string name)
        {
            Pet pet = Pets.FirstOrDefault(x => x.Name == name);
            if(pet!=null)
            {
                Pets.Remove(pet);
                return true;
            }
            return false;
        }
        public Pet GetPet(string name, string owner)
        {
            Pet pet = Pets.FirstOrDefault(x => x.Name == name && x.Owner==owner);
            if (pet != null)
            {
                return pet;
            }
            return null;

        }

        public Pet GetOldestPet()
        {
            int oldestAge = Pets.Select(x => x.Age).Max();
            Pet pet = Pets.FirstOrDefault(x => x.Age == oldestAge);
            if(pet!=null)
            {
                return pet;
            }
            return null;
        }

        public string GetStatistics()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("The clinic has the following patients:");
            foreach (var pet in Pets)
            {
                sb.AppendLine($"Pet {pet.Name} with owner: {pet.Owner}");
            }
            return sb.ToString().TrimEnd();
        }


    }
}
