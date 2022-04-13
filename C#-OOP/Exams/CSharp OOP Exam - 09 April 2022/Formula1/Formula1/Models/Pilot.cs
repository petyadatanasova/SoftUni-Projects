using Formula1.Models.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace Formula1.Models
{
    public class Pilot : IPilot
    {
        private string fullName;
        private bool canRace;
        private IFormulaOneCar car;
        private int numberOfWins;
        public Pilot(string fullName)
        {
            this.FullName = fullName;
            this.CanRace = false;
            

        }
        public string FullName
        {
            get => fullName;
            private set
            {
                if (string.IsNullOrWhiteSpace(value) || value.Length < 5)
                {
                    throw new ArgumentException($"Invalid pilot name: { value }.");
                }
                fullName = value;
            }
        }

        public IFormulaOneCar Car
        {
            get => car;
            private set
            {
                if(value == null)
                {
                    throw new NullReferenceException("Pilot car can not be null.");
                }
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

        public bool CanRace
        {
            get => canRace;
            private set
            {
                canRace = value;
            }
        }
        //TODO
        public void AddCar(IFormulaOneCar car)
        {
            this.Car = car;
            CanRace = true;
        }

        public void WinRace()
        {
            NumberOfWins++;
        }
        public override string ToString()
        {
            return $"Pilot {FullName} has {NumberOfWins} wins.";
        }
    }
}
