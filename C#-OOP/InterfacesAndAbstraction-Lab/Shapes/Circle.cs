﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Shapes
{
    public class Circle : IDrawable
    {
        private int radius;
        
        public Circle(int radius)
        {
            this.radius = radius;
        }

        public int Radius { get => radius; set => radius = value; }

        public void Draw()
        {

            double rIn = this.radius - 0.4;
            double rOut = this.radius + 0.4;

            for (double i = this.radius; i >=-this.radius; --i)
            {
                for (double j = -this.radius; j < rOut; j+=0.5)
                {
                    double value = j * j + i * i;
                    if(value>=rIn*rIn && value <=rOut*rOut)
                    {
                        Console.Write('*');
                    }
                    else
                    {
                        Console.Write(' ');
                    }
                }
                Console.WriteLine();
            }
        }
    }
}
