using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BakeryOpenning
{
    public class Bakery
    {
        public Bakery(string name, int capacity)
        {
            Name = name;
            Capacity = capacity;
            Employees = new List<Employee>();
        }
        public string Name { get; set; }
        public int Capacity { get; set; }
        public List<Employee> Employees { get; set; }

        public void Add(Employee employee)
        {
            if(Employees.Count<Capacity)
            {
                Employees.Add(employee);
            }
        }

        public bool Remove(string name)
        {
            Employee employee = Employees.Where(x => x.Name == name).FirstOrDefault();
            if (employee!=null)
            {
                
                Employees.Remove(employee);
                return true;
            }
            return false;
        }
        public Employee GetOldestEmployee()
        {
            if (Employees.Count > 0)
            {
                int oldestAge = Employees.Select(x => x.Age).Max();

                Employee oldestEmployee = Employees.Where(x => x.Age == oldestAge).FirstOrDefault();
                return oldestEmployee;
            }
            return null;
        }

        public Employee GetEmployee(string name)
        {
            if (Employees.Count > 0)
            {
                Employee employee = Employees.Where(x => x.Name == name).FirstOrDefault();
                return employee;
            }
            return null;
        }

        public int Count => Employees.Count();

        public string Report()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Employees working at Bakery {Name}:");
            foreach (var employee in Employees)
            {
                sb.AppendLine($"{employee.ToString()}");
            }
            return sb.ToString().TrimEnd();
        }



    }
}
