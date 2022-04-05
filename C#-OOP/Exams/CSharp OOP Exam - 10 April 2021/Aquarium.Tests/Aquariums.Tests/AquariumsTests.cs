namespace Aquariums.Tests
{
    using NUnit.Framework;
    using System;

    [TestFixture]
    public class AquariumsTests
    {
        [Test]
        public void FishConstructorShouldCreateAFish()
        {
            Fish fish = new Fish("Nemo");
            Assert.AreEqual("Nemo", fish.Name);
        }
        [Test]
        public void FishConstructorShouldCreateAnAvailableFish()
        {
            Fish fish = new Fish("Nemo");
            Assert.IsTrue(fish.Available);
        }
        [Test]
        public void AquariumConstructorShouldCreateAnAquarium()
        {
            Aquarium aquarium = new Aquarium("Fresh Water", 60);

            Assert.AreEqual("Fresh Water", aquarium.Name);
            Assert.AreEqual(60, aquarium.Capacity);
        }
        [Test]
        public void AquariumConstructorShouldInstanciateAListOfFish()
        {
            Aquarium aquarium = new Aquarium("Fresh Water", 60);

            Assert.AreEqual(0, aquarium.Count);
            
        }
        [Test]
        [TestCase(null)]
        [TestCase("")]
        public void ShouldThrowAnExeptionIfNameIsNullOrEmpty(string name)
        {
            Assert.Throws<ArgumentNullException>(() => new Aquarium(name, 60));
        }
        [Test]
        [TestCase(-2)]
        public void ShouldThrowAnExeptionIfCapacityIsLessThanZero(int capacity)
        {
            Assert.Throws<ArgumentException>(() => new Aquarium("Fresh Water", capacity));
        }

        [Test]
        public void AddMethodShouldAddAFishProperly()
        {
            Aquarium aquarium = new Aquarium("Fresh Water", 60);
            Fish fish = new Fish("Nemo");

            aquarium.Add(fish);
            Assert.AreEqual(1, aquarium.Count);
            
        }

        [Test]
        public void ShouldThrowAnExeptionIfNotEnoughCapacityToAddAFish()
        {
            Aquarium aquarium = new Aquarium("Fresh Water", 1);
            Fish fish = new Fish("Nemo");
            Fish fish1 = new Fish("Dori");
            aquarium.Add(fish);

            Assert.Throws<InvalidOperationException>(() => aquarium.Add(fish1));
        }
        [Test]
        public void RemoveMethodShouldRemoveAFishProperly()
        {
            Aquarium aquarium = new Aquarium("Fresh Water", 60);
            Fish fish = new Fish("Nemo");

            aquarium.Add(fish);
            aquarium.RemoveFish("Nemo");
            Assert.AreEqual(0, aquarium.Count);

        }
        [Test]
        public void ShouldThrowAnExeptionIfTryingToRemoveAFishThatDoesNotExists()
        {
            Aquarium aquarium = new Aquarium("Fresh Water", 1);
            Fish fish = new Fish("Nemo");
           
            aquarium.Add(fish);

            Assert.Throws<InvalidOperationException>(() => aquarium.RemoveFish("Dori"));
        }
        [Test]
        public void SellFishMethodShouldReturnAFish()
        {
            Aquarium aquarium = new Aquarium("Fresh Water", 1);
            Fish fish = new Fish("Nemo");
            aquarium.Add(fish);
            
            Assert.AreEqual(fish, aquarium.SellFish("Nemo"));
        }
        [Test]
        public void SellFishMethodShouldSetFishToUnavailable()
        {
            Aquarium aquarium = new Aquarium("Fresh Water", 1);
            Fish fish = new Fish("Nemo");
            aquarium.Add(fish);

            Assert.IsFalse(aquarium.SellFish("Nemo").Available);
        }

        [Test]
        public void ShouldThrowAnExeptionIfTryingToSellAFishThatDOesNotExists()
        {
            Aquarium aquarium = new Aquarium("Fresh Water", 1);
            Fish fish = new Fish("Nemo");
            aquarium.Add(fish);

            Assert.Throws<InvalidOperationException>(() => aquarium.SellFish("Dori"));
        }
        [Test]
        public void ReportShouldReturnAvailableFish()
        {
            Aquarium aquarium = new Aquarium("Fresh Water", 2);
            Fish fish = new Fish("Nemo");
            Fish fish1 = new Fish("Dori");
            aquarium.Add(fish);
            aquarium.Add(fish1);

            Assert.AreEqual("Fish available at Fresh Water: Nemo, Dori", aquarium.Report());
        }
    }
}
