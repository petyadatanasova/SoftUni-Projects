using NUnit.Framework;
using System;

namespace Gyms.Tests
{
    [TestFixture]
    public class GymsTests
    {
        [Test]
        public void ConstructorShouldCreateAGymProperly()
        {
            Gym gym = new Gym("Line", 60);
            Assert.AreEqual("Line", gym.Name);
        }
        [Test]
        public void ConstructorShouldCreateAGymAnInstantiateEmptyAthletesList()
        {
            Gym gym = new Gym("Line", 60);
            Assert.AreEqual(0, gym.Count);
        }
        [Test]
        [TestCase(0, 0)]
        [TestCase(60, 60)]
        public void ConstructorShouldCreateAGymAndSetCapacity(int capacity, int result)
        {
            Gym gym = new Gym("Line", capacity);
            Assert.AreEqual(result, gym.Capacity);
        }

        [Test]
        [TestCase("")]
        [TestCase(null)]
        public void ShouldThrowAnExeptionIfNameIsNullOrEmpty(string name)
        {
            Assert.Throws<ArgumentNullException>(()=>new Gym(name, 60));
        }
        [Test]
        [TestCase(-1)]
        [TestCase(-10)]
        public void ShouldThrowAnExeptionIfCapacityIsBelowZero(int capacity)
        {
            Assert.Throws<ArgumentException>(() => new Gym("Line", capacity));
        }

        [Test]
       
        public void AddAthleteMethodShouldAddProperlyAnAthlete()
        {
            Gym gym = new Gym("Line", 2);
            Athlete athlete1 = new Athlete("Mitko");
            Athlete athlete2 = new Athlete("Gosho");

            gym.AddAthlete(athlete1);
            gym.AddAthlete(athlete2);

            Assert.AreEqual(2, gym.Count);
        }
        [Test]
        public void AddAthleteMethodShouldThrowAnExeptionIfGymIsFull()
        {
            Gym gym = new Gym("Line", 2);
            Athlete athlete1 = new Athlete("Mitko");
            Athlete athlete2 = new Athlete("Gosho");
            Athlete athlete3 = new Athlete("Pesho");

            gym.AddAthlete(athlete1);
            gym.AddAthlete(athlete2);

            Assert.Throws<InvalidOperationException>(() => gym.AddAthlete(athlete3));
        }
        [Test]

        public void RemoveAthleteMethodShouldRemoveProperlyAnAthlete()
        {
            Gym gym = new Gym("Line", 2);
            Athlete athlete1 = new Athlete("Mitko");
            Athlete athlete2 = new Athlete("Gosho");

            gym.AddAthlete(athlete1);
            gym.AddAthlete(athlete2);
            gym.RemoveAthlete("Gosho");

            Assert.AreEqual(1, gym.Count);
        }
        [Test]
        public void RemoveAthleteMethodShouldThrowAnExeptionIfAthleteDoesNotExist()
        {
            Gym gym = new Gym("Line", 2);
            Athlete athlete1 = new Athlete("Mitko");
            Athlete athlete2 = new Athlete("Gosho");
            

            gym.AddAthlete(athlete1);
            gym.AddAthlete(athlete2);

            Assert.Throws<InvalidOperationException>(() => gym.RemoveAthlete("Pesho"));
        }
        [Test]
        public void InjureAthleteMethodShouldThrowAnExeptionIfAthleteDoesNotExist()
        {
            Gym gym = new Gym("Line", 2);
            Athlete athlete1 = new Athlete("Mitko");
            Athlete athlete2 = new Athlete("Gosho");


            gym.AddAthlete(athlete1);
            gym.AddAthlete(athlete2);

            Assert.Throws<InvalidOperationException>(() => gym.InjureAthlete("Pesho"));
        }
        [Test]
        public void InjureAthleteMethodShouldChangeInjuredStatus()
        {
            Gym gym = new Gym("Line", 2);
            Athlete athlete1 = new Athlete("Mitko");
            gym.AddAthlete(athlete1);

            gym.InjureAthlete("Mitko");

            Assert.AreEqual(true, athlete1.IsInjured);
        }
        [Test]
        public void InjureAthleteMethodShouldProvideARequestedAthlete()
        {
            Gym gym = new Gym("Line", 2);
            Athlete athlete1 = new Athlete("Mitko");
            gym.AddAthlete(athlete1);
         

            Assert.AreEqual(athlete1, gym.InjureAthlete("Mitko"));
        }
        [Test]
        public void ReportMethodShouldReturnAReportOfNotInjuredAthlete()
        {
            Gym gym = new Gym("Line", 2);
            Athlete athlete1 = new Athlete("Mitko");
            Athlete athlete2 = new Athlete("Gosho");
            gym.AddAthlete(athlete1);
            gym.AddAthlete(athlete2);

            gym.InjureAthlete("Gosho");
            Assert.AreEqual("Active athletes at Line: Mitko", gym.Report());
            
        }
        [Test]
        public void ReportMethodShouldReturnAReportOfNotInjuredAthletes()
        {
            Gym gym = new Gym("Line", 3);
            Athlete athlete1 = new Athlete("Mitko");
            Athlete athlete2 = new Athlete("Gosho");
            Athlete athlete3 = new Athlete("Pesho");
            gym.AddAthlete(athlete1);
            gym.AddAthlete(athlete2);
            gym.AddAthlete(athlete3);

            gym.InjureAthlete("Gosho");
            Assert.AreEqual("Active athletes at Line: Mitko, Pesho", gym.Report());

        }
        [Test]
        public void ReportMethodShouldReturnAnEmptyReport()
        {
            Gym gym = new Gym("Line", 3);
            Athlete athlete1 = new Athlete("Mitko");
            
            gym.AddAthlete(athlete1);
        

            gym.InjureAthlete("Mitko");
            Assert.AreEqual("Active athletes at Line: ", gym.Report());

        }
        [Test]
        public void AthleteConstructorShouldSetInjuredStatusToFalseUponCreation()
        {
            Athlete athlete1 = new Athlete("Mitko");

            Assert.AreEqual(false, athlete1.IsInjured);
        }
        [Test]

        public void AthleteConstructorShouldSetAthleteName()
        {
            Athlete athlete1 = new Athlete("Mitko");

            Assert.AreEqual("Mitko", athlete1.FullName);
        }
        [Test]
        public void ShouldReturnNameOfGym()
        {
            Gym gym = new Gym("Line", 6);

            Assert.AreEqual("Line", gym.Name);
        }
    }
}
