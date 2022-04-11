using EasterRaces.Models.Cars.Contracts;
using EasterRaces.Models.Cars.Entities;
using EasterRaces.Models.Drivers.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace EasterRaces.Models.Drivers.Entities
{
    public class Driver : IDriver
    {
        private string name;
        private ICar car;
        private int numberOfWins;
        private bool canParticipate = false;
        public Driver(string name)
        {
            this.Name = name;
           
        }
        public string Name
        {
            get => name;
            private set
            {
                if (string.IsNullOrEmpty(value) || value.Length < 5)
                {
                    throw new ArgumentException($"Name {value} cannot be less than 5 symbols.");
                }
                name = value;
            }
        }

        public ICar Car
        {
            get => car;
            private set
            {

                car = value;
            }
        }

        public int NumberOfWins
        {
            get => numberOfWins;
            private set
            {
                numberOfWins = value;
            }
        }

        public bool CanParticipate
        {
            get => canParticipate;
            private set
            {
                if(car!=null)
                {
                    value = true;
                }
                canParticipate = value;
            }
        }

        public void AddCar(ICar car)
        {
            if(car==null)
            {
                throw new ArgumentNullException("Car cannot be null.");
            }
            Car = car;
            CanParticipate = true;
        }

        public void WinRace()
        {
            numberOfWins++;
        }
    }
}
