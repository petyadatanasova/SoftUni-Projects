using NUnit.Framework;
using System;
using TheRace;

namespace TheRace.Tests
{
    public class RaceEntryTests
    {

        [SetUp]
        public void Setup()
        {
            UnitCar car = new UnitCar("Audi", 200, 2000);
            UnitDriver driver = new UnitDriver("Michael", car);
        }

        [Test]
        public void ConstructorShouldCreateAnEmptyDriverDrictionary()
        {
            RaceEntry drivers = new RaceEntry();

            Assert.AreEqual(0, drivers.Counter);
        }
        [Test]
        public void AddDriverMethodShouldAddDriverToDictionary()
        {
            RaceEntry drivers = new RaceEntry();
            UnitCar car = new UnitCar("Audi", 200, 2000);
            UnitDriver driver = new UnitDriver("Michael", car);
            drivers.AddDriver(driver);
            Assert.AreEqual(1, drivers.Counter);
          
        }
        [Test]
        public void AddDriverMethodShouldThrowAnExeptionIfDriverIsNull()
        {
            RaceEntry drivers = new RaceEntry();
            UnitDriver driver = null;

            Assert.Throws<InvalidOperationException>(() => drivers.AddDriver(driver));

        }
        [Test]
        public void AddDriverMethodShouldThrowAnExeptionIfDriverAlreadyExists()
        {
            RaceEntry drivers = new RaceEntry();
            UnitCar car = new UnitCar("Audi", 200, 2000);
            UnitDriver driver = new UnitDriver("Michael", car);
            drivers.AddDriver(driver);
            Assert.Throws<InvalidOperationException>(() => drivers.AddDriver(driver));

        }
        [Test]
        public void CalculateAverageHorsePowerMethodShoudlWorkProperly()
        {
            RaceEntry drivers = new RaceEntry();
            UnitCar car = new UnitCar("Audi", 200, 2000);
            UnitCar car1 = new UnitCar("Audi", 100, 6000);
            UnitCar car2 = new UnitCar("Audi", 300, 3000);
            UnitDriver driver = new UnitDriver("Michael", car);
            UnitDriver driver1 = new UnitDriver("Peter", car1);
            UnitDriver driver2 = new UnitDriver("Brian", car2);

            drivers.AddDriver(driver);
            drivers.AddDriver(driver1);
            drivers.AddDriver(driver2);

            Assert.AreEqual(200, drivers.CalculateAverageHorsePower());
        }
         [Test]
        public void CalculateAverageHorsePowerMethodShouldThrowaAnExeptionIfLessThanMinParticipants()
        {
            RaceEntry drivers = new RaceEntry();
            UnitCar car = new UnitCar("Audi", 200, 2000);

            UnitDriver driver = new UnitDriver("Michael", car);
         
            drivers.AddDriver(driver);

            Assert.Throws<InvalidOperationException>(() => drivers.CalculateAverageHorsePower());
        }
    }
}