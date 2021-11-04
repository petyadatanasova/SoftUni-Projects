using System;
using System.Collections.Generic;
using System.Text;

namespace ClassBoxData
{
    public class Box
    {

        private double length;
        private double width;
        private double height;

        public Box(double length, double width, double height)
        {
            Length = length;
            Width = width;
            Height = height;
        }

        public double Length
        {
            get { return length; }
             set
            {
                //if (value <= 0)
                //{
                    
                //    throw new ArgumentException($"Length cannot be zero or negative.");
                //}
                ValidateValue(nameof(Length), value);
                length = value;
                
            }
        }


        public double Width
        {
            get { return width; }
             set
            {
                //if (value <= 0)
                //{
                    
                //    throw new ArgumentException($"Width cannot be zero or negative.");
                //}
                ValidateValue(nameof(Width), value);
                width = value;
                
            }
        }


        public double Height
        {
            get { return height; }
             set
            {
                //if (value <= 0)
                //{
                //    
                //    throw new ArgumentException($"Height cannot be zero or negative.");
                //}
                ValidateValue(nameof(Height), value);
                height = value;
                
            }
        }

        //Volume = lwh
        //Lateral Surface Area = 2lh + 2wh
        //Surface Area = 2lw + 2lh + 2wh
        public double SurfaceArea()
        {
            return 2 * Length * Width + 2 * Length * Height + 2 * Width * Height;
        }

        public double LateralSurfaceArea()
        {
            return 2 * Length * Height + 2 * Width * Height;
        }

        public double Volume()
        {
            return Length * Width * Height;
        }


        private static void ValidateValue(string varName, double value)
        {
            if (value <= 0)
            {
                throw new ArgumentException($"{varName} cannot be zero or negative.");
            }
        }

    }
}
