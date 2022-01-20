using System;
using System.Collections.Generic;
using System.Text;

namespace Shapes
{
    public class Rectangle : IDrawable
    {
        private int width;
        private int height;
      

        public Rectangle(int width, int height)
        {
            this.width = width;
            this.height = height;
        }

        public int Width { get => width; private set => width = value; }
        public int Height { get => height; private set => height = value; }
        public void Draw()
        {
            Console.WriteLine(new string('*',this.width));
            for (int i = 0; i < this.height-2; i++)
            {
                for (int j = 0; j < this.width; j++)
                {
                    if(j==0 || j==this.width-1)
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
            Console.WriteLine(new string('*', this.width));
        }
    }
}
