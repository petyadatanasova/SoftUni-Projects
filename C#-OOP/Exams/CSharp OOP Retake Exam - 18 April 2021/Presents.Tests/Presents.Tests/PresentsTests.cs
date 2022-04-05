namespace Presents.Tests
{
    using NUnit.Framework;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    [TestFixture]
    public class PresentsTests
    {
        [Test]
        public void PresentConstructorShouldCreateAPresent()
        {
            Present present = new Present("Present", 3.5);

            Assert.AreEqual("Present", present.Name);
            Assert.AreEqual(3.5, present.Magic);
        }
        [Test]
        public void BagConstructorShouldInstantiateAListOfPresents()
        {
            Bag bag = new Bag();

            List<Present> presents = bag.GetPresents().ToList();
            Assert.AreEqual(0, presents.Count);
        }
        [Test]
        public void CreateMethodShouldAddAPresentToCollection()
        {
            Present present = new Present("Present", 3.5);
            Bag bag = new Bag();
            bag.Create(present);

            List<Present> presents = bag.GetPresents().ToList();
            Assert.AreEqual(1, presents.Count);
        }
        [Test]
        [TestCase("Present", 32.5)]
        [TestCase("Barbie Doll", 6)]
        [TestCase("Truck", 0)]
        [TestCase("Car", 1.2)]
        public void CreateMethodShouldAddAPresentToCollection2(string name, double magic)
        {
            Present present = new Present(name, magic);
            Bag bag = new Bag();
            bag.Create(present);

            Assert.AreEqual(1, bag.GetPresents().Count);
        }
        [Test]
        [TestCase("Present", 32.5, "Barbie Doll", 6, "Truck", 0)]

        public void CreateMethodShouldAddAPresentsToCollection(string name, double magic, string name1, double magic1,
            string name2, double magic2)
        {
            Present present = new Present(name, magic);
            Present present1 = new Present(name1, magic1);
            Present present2 = new Present(name2, magic2);
            Bag bag = new Bag();
            bag.Create(present);
            bag.Create(present1);
            bag.Create(present2);

            Assert.AreEqual(3, bag.GetPresents().Count);
        }
        [Test]
        public void CreateMethodShouldReturnAMessageWhenAddingAPresent()
        {
            Present present = new Present("Present", 3.5);
            Bag bag = new Bag();
            

            Assert.AreEqual("Successfully added present Present.", bag.Create(present));
        }
        [Test]
        public void CreatheMethodSHouldThrowAnExeptionIfPresentIsNull()
        {
            Bag bag = new Bag();
            Assert.Throws<ArgumentNullException>(() => bag.Create(null));
        }
        [Test]
        public void CreatheMethodSHouldThrowAnExeptionIfPresentExists()
        {
            Bag bag = new Bag();
            Present present = new Present("Present", 3.5);
            bag.Create(present);
            Assert.Throws<InvalidOperationException>(() => bag.Create(present));
        }

        [Test]
        public void RemoveMethodShouldRemoveAPresent()
        {
            Bag bag = new Bag();
            Present present = new Present("Present", 3.5);
            bag.Create(present);
            bag.Remove(present);

            List<Present> presents = bag.GetPresents().ToList();
            Assert.AreEqual(0, presents.Count);
        }
        [Test]
        public void RemoveMethodShouldRemoveAPresent2()
        {
            Bag bag = new Bag();
            Present present = new Present("Present", 8);
            bag.Create(present);
            bag.Remove(present);

            Assert.AreEqual(0, bag.GetPresents().Count);
        }
        [Test]
        public void RemoveMethodShouldRemoveAPresentAndReturnTrue()
        {
            Bag bag = new Bag();
            Present present = new Present("Present", 3.5);
            bag.Create(present);

            Assert.IsTrue(bag.Remove(present));
        }
        [Test]
        public void RemoveMethodShouldReturFalseIfNotAbleToRemovePresent()
        {
            Bag bag = new Bag();
            Present present = new Present("Present", 3.5);

            Assert.IsFalse(bag.Remove(present));
        }
        [Test]
        public void GetPresentWithLeastMagicMethodShouldWorkProperly()
        {
            Bag bag = new Bag();
            Present present1 = new Present("Present", 1.2);
            Present present2 = new Present("Present2", 3.5);
            bag.Create(present1);
            bag.Create(present2);

            Assert.AreEqual(present1.Magic, bag.GetPresentWithLeastMagic().Magic);
        }
        [Test]
        public void GetPresentWithLeastMagicMethodShouldReturnPresent()
        {
            Bag bag = new Bag();
            Present present1 = new Present("Present", 1);
            Present present2 = new Present("Present2", 3.5);
            bag.Create(present1);
            bag.Create(present2);

            Assert.AreEqual(present1, bag.GetPresentWithLeastMagic());
        }
        [Test]
        public void GetPresentMethodShouldReturnPresentByName()
        {
            Bag bag = new Bag();
            Present present1 = new Present("Present", 1.2);
            Present present2 = new Present("Present2", 3.5);
            bag.Create(present1);
            bag.Create(present2);

            Assert.AreEqual("Present2", bag.GetPresent("Present2").Name);
        }
        [Test]
        public void GetPresentMethodShouldReturnPresent()
        {
            Bag bag = new Bag();
            Present present1 = new Present("Present", 1.2);
            Present present2 = new Present("Present2", 3.5);
            bag.Create(present1);
            bag.Create(present2);

            Assert.AreEqual(present2, bag.GetPresent("Present2"));
        }
    }
}
