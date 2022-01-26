using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles
{
    public abstract class Vehicle : IVehicle

    {
        private double fuelConsumption;
        private double fuelQuantity;

        public Vehicle(double fuelQuantity, double fuelConsumption)
        {
            FuelQuantity = fuelQuantity;
            FuelConsumption = fuelConsumption;
        }

        public double FuelQuantity
        {
            get => fuelQuantity;
            set => fuelQuantity = value;
        }
        public virtual double FuelConsumption
        {
            get => fuelConsumption;
            set => fuelConsumption = value;
        }


        public bool CanDrive(double distance)
        {
            if (this.FuelQuantity < this.FuelConsumption * distance)
            {
                return false;
            }
            return true;
        }
        public void Drive(double distance)
        {
            if(!CanDrive(distance))
            {
                return;
            }
                
            this.FuelQuantity -= this.FuelConsumption * distance;
        
        }
        
        public virtual void Refuel(double fuelAmount)
        {
            FuelQuantity += fuelAmount;
        }
        

        
    }
}
