using NUnit.Framework;
using System;

namespace Skeleton.Tests
{
    [TestFixture]
    public class AxeTests
    {
        [Test]
        public void CheckIfWeaponLosesDurabilityAfterEachAttack()
        {
            //Arrange

            Axe axe = new Axe(10,10);
            Dummy dummy = new Dummy(10,10);

            //Act
            axe.Attack(dummy);
            //Assert
            Assert.AreEqual(axe.DurabilityPoints, 9);
        }

        [Test]

        public void AttackWithBrokenWeaponThrowsAnExeption()
        {
            //Arrange
            Axe axe = new Axe(10,0);
            Dummy dummy = new Dummy(10,10);

            //Act & Assert = 2 versions below
            //Assert.That(() =>  axe.Attack(dummy), Throws.InvalidOperationException);
            Assert.Throws<InvalidOperationException>(() => axe.Attack(dummy));


        }
    }
}