using NUnit.Framework;
using System;

namespace SmartphoneShop.Tests
{
    [TestFixture]
    public class SmartphoneShopTests
    {
        [Test]
        public void ShopConstructorShouldWorkProperly()
        {
            Shop shop = new Shop(8);

            Assert.AreEqual(0, shop.Count);
            Assert.AreEqual(8, shop.Capacity);
        }
        [Test]
        public void CapacityShouldThrowAnExeptionIFCapacityIsLessThanZero()
        {
            Assert.Throws<ArgumentException>(() => new Shop(-1));
        }
        [Test]
        public void AddMethodShouldWorkProperly()
        {
            Shop shop = new Shop(2);
            Smartphone phone = new Smartphone("MI", 2000);

            shop.Add(phone);
            Assert.AreEqual(1, shop.Count);
        }
        [Test]
        public void AddMethodShouldThrowAnExeprionIfPhoneAlreadyInShop()
        {
            Shop shop = new Shop(4);
            Smartphone phone = new Smartphone("MI", 2000);

            shop.Add(phone);
            Assert.Throws<InvalidOperationException>(() => shop.Add(phone));
        }
        [Test]
        public void AddMethodShouldThrowAnExeprionIfShopIsFull()
        {
            Shop shop = new Shop(1);
            Smartphone phone = new Smartphone("MI", 2000);
            Smartphone phone1 = new Smartphone("Xiomi", 2000);

            shop.Add(phone);
            Assert.Throws<InvalidOperationException>(() => shop.Add(phone1));
        }
        [Test]
        public void RemoveMethodShouldWorkProperly()
        {
            Shop shop = new Shop(4);
            Smartphone phone = new Smartphone("MI", 2000);

            shop.Add(phone);
            shop.Remove("MI");
            Assert.AreEqual(0, shop.Count);
        }
        [Test]
        public void RemoveMethodShouldThrowAnExeptionInPhoneNotFound()
        {
            Shop shop = new Shop(4);
            Smartphone phone = new Smartphone("MI", 2000);

            shop.Add(phone);
            Assert.Throws<InvalidOperationException>(() => shop.Remove("Xiomi"));
        }
        [Test]
        public void TestPhoneMethodShouldWorkProperly()
        {
            Shop shop = new Shop(4);
            Smartphone phone = new Smartphone("MI", 2000);

            shop.Add(phone);
            shop.TestPhone("MI", 1000);
            Assert.AreEqual(1000, phone.CurrentBateryCharge);
        }
        [Test]
        public void TestPhoneMethodShouldThrowAnExeptionIFPhoneIsMIssing()
        {
            Shop shop = new Shop(4);
            Smartphone phone = new Smartphone("MI", 2000);

            shop.Add(phone);

            Assert.Throws<InvalidOperationException>(() => shop.TestPhone("Xiomi", 1000));
        }
        [Test]
        public void TestPhoneMethodShouldThrowAnExeptionIfBatteryIsLow()
        {
            Shop shop = new Shop(4);
            Smartphone phone = new Smartphone("MI", 1000);

            shop.Add(phone);

            Assert.Throws<InvalidOperationException>(() => shop.TestPhone("MI", 2000));
        }
        [Test]
        public void ChargePhoneMethodShouldWorkProperly()
        {
            Shop shop = new Shop(4);
            Smartphone phone = new Smartphone("MI", 2000);

            shop.Add(phone);
            shop.TestPhone("MI", 1000);

            shop.ChargePhone("MI");
            Assert.AreEqual(2000, phone.CurrentBateryCharge);
        }
        [Test]
        public void ChargePhoneMethodShouldThrowAnExeptionIfPhoneDoesNotExist()
        {
            Shop shop = new Shop(4);
            Smartphone phone = new Smartphone("MI", 2000);

            shop.Add(phone);
            shop.TestPhone("MI", 1000);

            Assert.Throws<InvalidOperationException>(() => shop.ChargePhone("Xiomi"));
        }
    }
}