using System;
using System.Collections.Generic;
using System.Text;

namespace StreetRacing
{
    public class Car
    {
        public Car(string make, string model, string licencePlate, int horsePower, double weight)
        {
            Make = make;
            Model = model;
            LicensePlate = licencePlate;
            HorsePower = horsePower;
            Weight = weight;
        }
        public string Make { get; set; }
        public string Model { get; set; }
        public string LicensePlate { get; set; }
        public int HorsePower { get; set; }
        public double Weight { get; set; }

        public override string ToString()
        {
            return @$"Make: {Make}
Model: {Model}
License Plate: {LicensePlate}
Horse Power: {HorsePower}
Weight: {Weight}";

        }

    }
}

