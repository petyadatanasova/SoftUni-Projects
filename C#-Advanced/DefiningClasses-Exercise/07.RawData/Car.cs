using System;
using System.Collections.Generic;
using System.Text;

namespace RawData
{
    public class Car
    {
        public Car(string model, Engine engine, Cargo cargo, Tire [] tires)
        {
            Model = model;
            EngineOfCar = engine;
            CargoOfCar = cargo;
            Tires = tires;
        }
        public string Model { get; set; }
        public Engine EngineOfCar { get; set; }
        public Cargo CargoOfCar { get; set; }
        public Tire [] Tires { get; set; }
    }
}
//•	Model: a string property
//•	Engine: a class with two properties – speed and power,
//•	Cargo: a class with two properties – type and weight 
//•	Tires: a collection of exactly 4 tires. Each tire should have two properties: age and pressure.
