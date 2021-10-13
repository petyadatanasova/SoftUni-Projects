using System;
using System.Collections.Generic;
using System.Text;

namespace CarSalesman
{
    public class Car
    {
        public Car()
        {

        }
        public Car(string model, Engine engine)
        {
            Model = model;
            EngineOfCar = engine;
        }
        public string Model { get; set; }
        public Engine EngineOfCar { get; set; }
        public string Weight { get; set; } = "n/a";
        public string Color { get; set; }= "n/a";

        public override string ToString()
        {
            return $"{Model}:{Environment.NewLine}" +
                $"{EngineOfCar.Model}:{Environment.NewLine}" +
                $"    Power: {EngineOfCar.Power}{Environment.NewLine}" +
                $"    Displacement: {EngineOfCar.Displacement}{Environment.NewLine}" +
                $"    Efficiency: {EngineOfCar.Efficiency}{Environment.NewLine}" +
                $"  Weight: {Weight}{Environment.NewLine}" +
                $"  Color: {Color}";
        }


    }

}

//FordFocus:
//V4 - 33:
//    Power: 140
//    Displacement: 28
//    Efficiency: B
//  Weight: 1300
//  Color: Silver

//•	Model: a string property.
//•	Engine: a property holding the engine object.
//•	Weight: an int property, it is optional.
//•	Color: a string property, it is optional.
