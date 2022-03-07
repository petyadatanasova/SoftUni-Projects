using NUnit.Framework;
using System;

namespace Skeleton.Tests
{
    [TestFixture]
    public class DummyTests
    {
        [Test]
        public void DummyLosesHEalthIfAttacked()
        {
           //Arrange
            Dummy dummy = new Dummy(11,10);
            Axe axe = new Axe(10,10);
            //Act
            axe.Attack(dummy);
            //Assert
            Assert.AreEqual(dummy.Health, 1);
        }
        [Test]
        public void DeadDummyThrowsAnExeptionIfAttacked()
        {
            //Arrange
            Dummy dummy = new Dummy(0, 10);
            Axe axe = new Axe(10, 10);
            //Act & Assert

            Assert.Throws<InvalidOperationException>(() => axe.Attack(dummy), "Dummy is dead.");
        }
        
        [Test]
        public void DeadDummyCanGiveXP()
        {
            //Arrange
            Dummy dummy = new Dummy(0, 10);

            //Act 
            //dummy.GiveExperience();

            //Act & Assert
            Assert.AreEqual(dummy.GiveExperience(), 10);

        }
        [Test]
        public void AliveDummyCantGiveXPAndThrowsAndExeption()
        {
            //Arrange
            Dummy dummy = new Dummy(10, 10);

            //Act & Assert
            Assert.Throws<InvalidOperationException>(() => dummy.GiveExperience(), "Target is not dead.");
           

        }

    }
}