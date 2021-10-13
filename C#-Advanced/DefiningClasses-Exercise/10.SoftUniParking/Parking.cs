using System;
using System.Collections.Generic;
using System.Text;

namespace SoftUniParking
{
    public class Parking
    {
        public Parking(int capacity)
        {
            this.capacity = capacity;
            this.cars = new Dictionary<string, Car>();

        }

        private Dictionary<string, Car> cars;
        private int capacity;

        


        public string AddCar(Car car)
        {
            if(cars.ContainsKey(car.RegistrationNumber))
            {
                return "Car with that registration number, already exists!";
            }
            else
            {
                if(capacity<=0)
                {
                    return "Parking is full!";
                }
                else
                {
                    capacity--;
                    cars.Add(car.RegistrationNumber, car);
                   return $"Successfully added new car {car.Make} {car.RegistrationNumber}";
                }
            }
        }
        public string RemoveCar(string RegistrationNumber)
        {
            if(!cars.ContainsKey(RegistrationNumber))
            {
                return $"Car with that registration number, doesn't exist!";
            }
            else
            {
                capacity++;
                cars.Remove(RegistrationNumber);
                return $"Successfully removed {RegistrationNumber}";
            }
        }
        public Car GetCar(string RegistrationNumber)
        {
            return cars[RegistrationNumber];
        }
        public void RemoveSetOfRegistrationNumber(List<string> RegistrationNumbers)
        {
            foreach (var reg in RegistrationNumbers)
            {
                if(cars.ContainsKey(reg))
                {
                    cars.Remove(reg);
                }
            }
        }
        public int Count=>
       
             cars.Count;
        
    }
}
