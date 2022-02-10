using System;
using System.Collections.Generic;
using System.Text;

namespace ValidPerson
{
    public class Student
    {
        private string name;
        private string email;

        public Student(string name, string email)
        {
            this.Name = name;
            this.Email = email;
        }

        public string Name
        {
            get => name;
            set
            {
                for (int i = 0; i < value.Length; i++)
                {
                    if (!char.IsLetter(value[i]))
                    {
                        throw new InvalidPersonNameException("Name should contain only letters");
                    }
                }
                //if (value.Any(c => !char.IsLetter(c)))
                //{
                //    throw new InvalidPersonNameException("Name should contain only letters.");
                //}
            }
        }
        public string Email { get => email; set => email = value; }
    }
}
