using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles
{
    public abstract class Vehicle : IVehicle

    {
        private double fuelConsumption;
        private double fuelQuantity;
        private double tankCapacity;

        public Vehicle(double fuelQuantity, double fuelConsumption, double tankCapacity)
        {

            TankCapacity = tankCapacity;
            FuelConsumption = fuelConsumption;
            FuelQuantity = fuelQuantity;
        }


        public virtual double FuelConsumption
        {
            get => fuelConsumption;
            protected set => fuelConsumption = value;
        }
        public double TankCapacity
        {
            get => tankCapacity;
            set => tankCapacity = value;
        }
        public double FuelQuantity
        {
            get => fuelQuantity;
             set
            {
                if (value > TankCapacity)
                {
                    value = 0;
                }
                fuelQuantity = value;


            }
        }
        public bool IsEmpty { get; set; }

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
            if (!CanDrive(distance))
            {
                return;
            }

            this.FuelQuantity -= this.FuelConsumption * distance;

        }
        public bool CanRefuel(double fuelAmount)
        {
            if (tankCapacity < fuelQuantity + fuelAmount)
            {
                throw new InvalidOperationException($"Cannot fit {fuelAmount} fuel in the tank");
            }
            return true;
        }
        public virtual void Refuel(double fuelAmount)
        {
            if (tankCapacity < fuelQuantity + fuelAmount)
            {
                return;
            }
            FuelQuantity += fuelAmount;
        }

        
    }
}
