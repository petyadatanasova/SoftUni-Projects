using System;
using System.Collections.Generic;
using System.Text;

namespace CarManufacturer
{
   public class Car
    {
        private string make;
        private string model;
        private int year;
        private double fuelQuantity;
        private double fuelConsumption;

        public string Make
        {
            get
            {
                return make;
            }
            set
            {
                make = value;
            }
        }

       

        public string Model
        {
            get
            {
                return model;
            }
            set
            {
                model = value;
            }
        }
        public int Year
        {
            get
            {
                return year;
            }
            set
            {
                year = value;
            }
        }
        public double FuelQuantity
        {
            get
            {
                return fuelQuantity;
            }
            set
            {
                fuelQuantity = value;
            }
        }
        public double FuelConsumption
        {
            get
            {
                return fuelConsumption;
            }
            set
            {
                fuelConsumption = value;
            }
        }
        public string WhoAmI()
        {
            return $"Make: {Make}\nModel: {Model}\nYear: {Year}\nFuel: {FuelQuantity:f2}";
        }

        public void Drive(double distance)
        {
           if(fuelQuantity>=distance*fuelConsumption)
            {
                fuelQuantity = distance * fuelConsumption;
            }
            else
            {
                Console.WriteLine("Not enough fuel to perform this trip!");
            }
        }
    }
}
