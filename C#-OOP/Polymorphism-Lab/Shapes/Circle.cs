using System;
using System.Collections.Generic;
using System.Text;

namespace Shapes
{
    public class Circle : Shape
    {
        
        public Circle(double radius)
        {
            Radius = radius;
        }

        public double Radius { get; private set; }

        public override double CalculateArea()
        {
            return Math.PI * Math.Pow(Radius, 2);
        }

        public override double CalculatePerimeter()
        {
            return 2 * Math.PI * Radius;
        }

        public override string Draw()
        {
            return "Drawing Circle";
        }
    }
}
