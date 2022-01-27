using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles
{
    public interface IVehicle
    {
        public double FuelQuantity { get;}
        public double FuelConsumption  { get;}
        public bool IsEmpty { get; set; }

        public bool CanDrive(double distance);
        public void Drive(double distance);
        public bool CanRefuel(double distance);
        public void Refuel(double fuelAmount);
        

    }
}
