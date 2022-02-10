using System;
using System.Collections.Generic;
using System.Text;

namespace ValidPerson
{
    public class Person
    {
        private string firstName;
        private string lastName;
        private int age;

        public Person(string firstName, string lastName, int age)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Age = age;
        }

        public string FirstName 
        { 
            get => firstName;
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException(value, "The first name cannot be null or empty." );
                }
                firstName = value;
            }
        }


        public string LastName
        { 
            get => lastName;
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException(value, "The last name cannot be null or empty.");
                }
                firstName = value;
            }
        }
        public int Age
        { 
            get => age;
            set
            {
                if(value>120 || value <0)
                {
                    throw new ArgumentOutOfRangeException("Age", "Age should be in the range [0 .. 120].");
                }
                age = value;
            }
        }
    }
}
