using EasterRaces.Core.Contracts;
using EasterRaces.Models.Cars.Contracts;
using EasterRaces.Models.Cars.Entities;
using EasterRaces.Models.Drivers.Contracts;
using EasterRaces.Models.Drivers.Entities;
using EasterRaces.Models.Races.Contracts;
using EasterRaces.Models.Races.Entities;
using EasterRaces.Repositories.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EasterRaces.Core.Entities
{
    public class ChampionshipController : IChampionshipController
    {
        private DriverRepository drivers;
        private CarRepository cars;
        private RaceRepository races;

        public ChampionshipController()
        {
            drivers = new DriverRepository();
            cars = new CarRepository();
            races = new RaceRepository();

        }
        public string AddCarToDriver(string driverName, string carModel)
        {
            ICar car = cars.GetByName(carModel);
            IDriver driver = drivers.GetByName(driverName);

            if (driver == null)
            {
                throw new InvalidOperationException($"Driver {driverName} could not be found.");
            }
            if (car == null)
            {
                throw new InvalidOperationException($"Car {carModel} could not be found.");
            }
            driver.AddCar(car);
            return $"Driver {driverName} received car {carModel}.";
        }

        public string AddDriverToRace(string raceName, string driverName)
        {
            IRace race = races.GetByName(raceName);
            IDriver driver = drivers.GetByName(driverName);
            if (race == null)
            {
                throw new InvalidOperationException($"Race {raceName} could not be found.");
            }
            if (driver == null)
            {
                throw new InvalidOperationException($"Driver {driverName} could not be found.");
            }
            race.AddDriver(driver);
            return $"Driver {driverName} added in {raceName} race.";
        }

        public string CreateCar(string type, string model, int horsePower)
        {
            ICar car = cars.GetByName(model);
            if (car != null)
            {
                throw new ArgumentException($"Car {model} is already created.");
            }
            if (type == "Muscle")
            {
                car = new MuscleCar(model, horsePower);

            }
            else if (type == "Sports")
            {
                car = new SportsCar(model, horsePower);
            }
            cars.Add(car);
            return $"{type + "Car"} {model} is created.";
        }

        public string CreateDriver(string driverName)
        {
            IDriver driver = drivers.GetByName(driverName);

            if (driver != null)
            {
                throw new ArgumentException($"Driver {driverName} is already created.");
            }
            driver = new Driver(driverName);
            drivers.Add(driver);
            return $"Driver {driverName} is created.";
        }

        public string CreateRace(string name, int laps)
        {
            IRace race = races.GetByName(name);
            if (race != null)
            {
                throw new InvalidOperationException($"Race {name} is already create.");
            }
            race = new Race(name, laps);

            races.Add(race);
            return $"Race {name} is created.";
        }

        public string StartRace(string raceName)
        {
            IRace race = races.GetByName(raceName);
            if (race == null)
            {
                throw new InvalidOperationException($"Race {raceName} could not be found.");
            }
            if (race.Drivers.Count < 3)
            {
                throw new InvalidOperationException($"Race {raceName} cannot start with less than 3 participants.");
            }
            List<IDriver> fastestDrivers = race.Drivers.OrderByDescending(x => x.Car.CalculateRacePoints(race.Laps)).ToList();
            races.Remove(race);

            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Driver {fastestDrivers[0].Name} wins {race.Name} race.");
            sb.AppendLine($"Driver {fastestDrivers[1].Name} is second in {race.Name} race.");
            sb.AppendLine($"Driver {fastestDrivers[2].Name} is third in {race.Name} race.");

            return sb.ToString().TrimEnd();
        }
    }
}

