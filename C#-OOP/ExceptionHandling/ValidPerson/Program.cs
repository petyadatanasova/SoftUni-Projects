using System;
using System.Collections.Generic;

namespace ValidPerson
{
    class Program
    {
        static void Main(string[] args)
        {

            try
            {
                Person person = new Person("John", "Peterson", 45);
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine(ex.Message);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine(ex.Message);
            }
            try
            {
                Person personWithoutFirstName = new Person(string.Empty, "Peterson", 45);
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine(ex.Message);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine(ex.Message);
            }
            try
            {
                Person personWithoutLastName = new Person("John", null, 45);
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine(ex.Message);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine(ex.Message);
            }
            try
            {
                Person personWithNagativeAge = new Person("John", "Peterson", -5);
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine(ex.Message);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine(ex.Message);
            }
            try
            {
                Person personWithTooBigAge = new Person("John", "Peterson", 121);
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine(ex.Message);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine(ex.Message);
            }
            try
            {
                Student student = new Student("P3t3r", "peter@noinfo.com");
            }
            catch (InvalidPersonNameException ex)
            {

                Console.WriteLine(ex.Message);
            }
            try
            {
                Student student = new Student("Peter", "peter@noinfo.com");
            }
            catch (InvalidPersonNameException ex)
            {

                Console.WriteLine(ex.Message);
            }
        }
    }
}
