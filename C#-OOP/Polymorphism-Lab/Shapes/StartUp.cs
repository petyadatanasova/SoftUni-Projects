using System;

namespace Shapes
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            double height = double.Parse(Console.ReadLine());
            double width = double.Parse(Console.ReadLine());
            double radius = double.Parse(Console.ReadLine());

            Rectangle rectangle = new Rectangle(height, width);
            Circle circle = new Circle(radius);

            Console.WriteLine(rectangle.CalculateArea());
            Console.WriteLine(rectangle.CalculatePerimeter());
            Console.WriteLine(rectangle.Draw());

            Console.WriteLine(circle.CalculateArea());
            Console.WriteLine(circle.CalculatePerimeter());
            Console.WriteLine(circle.Draw()); 

        }
    }
}
