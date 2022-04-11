﻿using EasterRaces.Models.Cars.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace EasterRaces.Models.Cars.Entities
{
    public abstract class Car : ICar
    {
        private string model;
        private int horsePower;
        private double cubicCentimetres;
        private int minHorsePower;
        private int maxHorsePower;

        public Car(string model, int horsePower, 
            double cubicCentimeters, int minHorsePower, int maxHorsePower)
        {
            this.Model = model;
            this.minHorsePower = minHorsePower;
            this.maxHorsePower = maxHorsePower;
            this.HorsePower = horsePower;
            this.CubicCentimeters = cubicCentimeters;
            
        }
        public string Model
        {
            get => model;
            private set
            {
                if(string.IsNullOrWhiteSpace(value) || value.Length<4)
                {
                    throw new ArgumentException($"Model {value} cannot be less than 4 symbols.");
                }
                model = value;
            }
        }
        public int HorsePower
        {
            get => horsePower;
            private set
            {
                if(value<minHorsePower || value>maxHorsePower)
                {
                    throw new ArgumentException($"Invalid horse power: {value}.");
                }
                horsePower = value;
            }
        }

        public double CubicCentimeters
        {
            get => cubicCentimetres;
            private set
            {
                cubicCentimetres = value;
            }
        }

        public double CalculateRacePoints(int laps)
        {
            return CubicCentimeters / HorsePower * laps;
        }
    }
}
