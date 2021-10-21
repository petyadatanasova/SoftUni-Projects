using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ClassroomProject
{
    public class Classroom
    {
        public Classroom(int capacity)
        {
            Capacity = capacity;
            Students = new List<Student>();
        }
        public int Capacity { get; set; }
        public int Count => Students.Count;
        public List<Student> Students { get; set; }

        public string RegisterStudent(Student student)
        {
            if(Students.Count<Capacity)
            {
                Students.Add(student);
                return $"Added student {student.FirstName} {student.LastName}";
            }
            else
            {
               return "No seats in the classroom";
            }
        }

        public string DismissStudent(string firstName, string lastName)
        {
            Student student = Students.FirstOrDefault(x => x.FirstName == firstName && x.LastName == lastName);
            if(student!=null)
            {
                Students.Remove(student);
                return $"Dismissed student {firstName} {lastName}";
            }
            else
            {
                return "Student not found";
            }
        }

        public string GetSubjectInfo(string subject)
        {
            var filteredStudents = Students.Where(x => x.Subject == subject);
            if(filteredStudents.Any())
            {
                StringBuilder sb = new StringBuilder();

                sb.AppendLine($"Subject: {subject}");
                sb.AppendLine("Students:");

                foreach (var student in filteredStudents)
                {
                    sb.AppendLine($"{student.FirstName} {student.LastName}");
                }
                return sb.ToString().TrimEnd();
            }
            return $"No students enrolled for the subject";
        }

        public int GetStudentsCount()
        {
            return Students.Count;
        }

        public Student GetStudent(string firstName, string lastName)
        {
            var student = Students.FirstOrDefault(x => x.FirstName == firstName && x.LastName == lastName);
            if(student!=null)
            {
                return student;
            }
            return null;
        }
    }
}
