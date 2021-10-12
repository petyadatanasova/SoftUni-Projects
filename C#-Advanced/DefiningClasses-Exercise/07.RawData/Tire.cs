using System;
using System.Collections.Generic;
using System.Text;

namespace RawData
{
   public class Tire
    {
      public Tire()
        {

        }
        public Tire(int age, double pressure)
        {
            Age = age;
            Pressure = pressure;
        }
        public int Age { get; set; }
        public double Pressure { get; set; }
    }
}
//•	Tires: a collection of exactly 4 tires. Each tire should have two properties: age and pressure.
