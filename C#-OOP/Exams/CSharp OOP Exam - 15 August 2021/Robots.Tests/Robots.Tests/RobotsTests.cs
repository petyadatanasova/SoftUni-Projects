namespace Robots.Tests
{
    using NUnit.Framework;
    using System;

    [TestFixture]
    public class RobotsTests
    {
        [Test]
        public void ConstructorShouldCreateAnEmptyListOfRobots()
        {
            RobotManager robotManager = new RobotManager(10);

            Assert.AreEqual(0, robotManager.Count);
        }
        [Test]
        public void ConstructorShouldSetTheCapacitys()
        {
            RobotManager robotManager = new RobotManager(10);

            Assert.AreEqual(10, robotManager.Capacity);
        }

        [Test]
        public void CapacityShouldThrowAnExeptionIfCapacityIsBelowZero()
        {
            Assert.Throws<ArgumentException>(() => new RobotManager(-1));
        }
        [Test]
        public void AddMethodShouldThrowAnExeptionIfRobotWithTheSameNameExists()
        {
            RobotManager robotManager = new RobotManager(2);
            Robot robot = new Robot("R1", 10);
            robotManager.Add(robot);

            Assert.Throws<InvalidOperationException>(() => robotManager.Add(robot));
        }
        [Test]
        public void AddMethodShouldThrowAnExeptionIfNotEnoughCapacity()
        {
            RobotManager robotManager = new RobotManager(2);
            Robot robot1 = new Robot("R1", 10);
            Robot robot2 = new Robot("R2", 10);
            Robot robot3 = new Robot("R3", 10);
            robotManager.Add(robot1);
            robotManager.Add(robot2);

            Assert.Throws<InvalidOperationException>(() => robotManager.Add(robot3));
        }
        [Test]
        public void AddMethodShouldProperlyAddANewRobot()
        {
            RobotManager robotManager = new RobotManager(2);
            Robot robot1 = new Robot("R1", 10);
            Robot robot2 = new Robot("R2", 10);
            
            robotManager.Add(robot1);
            robotManager.Add(robot2);

            Assert.AreEqual(2, robotManager.Count);
        }
        [Test]
        public void RemoveMethodShouldThrowAnExeptionIfRobotDoesNotExist()
        {
            RobotManager robotManager = new RobotManager(2);
            Robot robot1 = new Robot("R1", 10);
       
            robotManager.Add(robot1);

            Assert.Throws<InvalidOperationException>(() => robotManager.Remove("R2"));
            
        }
        [Test]
        public void RemoveMethodShouldProperlyRemoveARobot()
        {
            RobotManager robotManager = new RobotManager(2);
            Robot robot1 = new Robot("R1", 10);

            robotManager.Add(robot1);
            robotManager.Remove("R1");

            Assert.AreEqual(0, robotManager.Count);
           

        }
        [Test]
        public void WorkMethodShouldThrowAnExeptionIfRobotDoesNotExist()
        {
            RobotManager robotManager = new RobotManager(2);
            Robot robot1 = new Robot("R1", 10);

            robotManager.Add(robot1);

            Assert.Throws<InvalidOperationException>(() => robotManager.Work("R2","Job",50));
        }
        [Test]
        public void WorkMethodShouldThrowAnExeptionIfBatteryIsLowerThatBatteryUsage()
        {
            RobotManager robotManager = new RobotManager(2);
            Robot robot1 = new Robot("R1", 10);

            robotManager.Add(robot1);

            Assert.Throws<InvalidOperationException>(() => robotManager.Work("R1", "Job", 50));
        }
        [Test]
        public void WorkMethodShouldWorkProperly()
        {
            RobotManager robotManager = new RobotManager(2);
            Robot robot = new Robot("R1", 10);

            robotManager.Add(robot);
            robotManager.Work("R1", "Job", 5);
            Assert.AreEqual(5, robot.Battery);
        }
        [Test]
        public void ChargeMethodShouldThrowAnExeptionIfRobotDoesNotExist()
        {
            RobotManager robotManager = new RobotManager(2);
            Robot robot1 = new Robot("R1", 10);

            robotManager.Add(robot1);

            Assert.Throws<InvalidOperationException>(() => robotManager.Charge("R2"));
        }
        [Test]
        public void ChargeMethodShouldChargeTheBattery()
        {
            RobotManager robotManager = new RobotManager(2);
            Robot robot = new Robot("R1", 10);

            robotManager.Add(robot);
            robotManager.Work("R1", "Job", 5);
            robotManager.Charge("R1");

            Assert.AreEqual(10, robot.Battery);
        }
        [Test]
        public void NameOfRobotShouldBeSetProperly()
        {
            Robot robot = new Robot("R1", 15);

            Assert.AreEqual("R1", robot.Name);
        }
        [Test]
        public void MaxBatteryShouldBeSetProperly()
        {
            Robot robot = new Robot("R1", 15);

            Assert.AreEqual(15, robot.MaximumBattery);
        }
    }
}
