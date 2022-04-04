using System;
using NUnit.Framework;

[TestFixture]
public class HeroRepositoryTests
{
    [Test]
    public void HeroConstructorShouldCreateAHeroName()
    {
        Hero hero = new Hero("Superman", 10);

        Assert.AreEqual("Superman", hero.Name);
    }
    [Test]
    public void HeroConstructorShouldCreateAHeroLevel()
    {
        Hero hero = new Hero("Superman", 10);

        Assert.AreEqual(10, hero.Level);
    }
    [Test]
    public void HeroRepositoryConstructorShouldInstantiateAListOfHeroes()
    {
        HeroRepository data = new HeroRepository();

        Assert.AreEqual(0, data.Heroes.Count);
    }
    [Test]
    public void CreateMethodShouldAddAHero()
    {
        Hero hero = new Hero("Superman", 10);
        HeroRepository data = new HeroRepository();
        data.Create(hero);

        Assert.AreEqual(1, data.Heroes.Count);
    }
    [Test]
    public void CreateMethodShouldThrowAnExeptionIfHeroIsNull()
    {
        HeroRepository data = new HeroRepository();

        Assert.Throws<ArgumentNullException>(() => data.Create(null));
    }
    [Test]
    public void CreateMethodShouldThrowAnExeptionIfHeroAlreadyExists()
    {
        Hero hero = new Hero("Superman", 10);
        HeroRepository data = new HeroRepository();
        data.Create(hero);

        Assert.Throws<InvalidOperationException>(() => data.Create(hero));
    }
    [Test]
    public void RemoveMethodShouldRemoveAHero()
    {
        Hero hero = new Hero("Superman", 10);
        HeroRepository data = new HeroRepository();
        data.Create(hero);
        data.Remove("Superman");
        Assert.AreEqual(0, data.Heroes.Count);
    }
    [Test]
    public void RemoveMethodShouldThrowAnExeptionIfHeroIsNull()
    {
        Hero hero = new Hero("Superman", 10);
        HeroRepository data = new HeroRepository();
        data.Create(hero);

        Assert.Throws<ArgumentNullException>(() => data.Remove(null));
    }
    [Test]
    public void GetHeroWithHighestLevelMethodShouldReturnHeroWithHighestLevel()
    {
        Hero hero1 = new Hero("Superman", 10);
        Hero hero2 = new Hero("Batman", 20);
        HeroRepository data = new HeroRepository();
        data.Create(hero1);
        data.Create(hero2);

        Assert.AreEqual("Batman", data.GetHeroWithHighestLevel().Name);
    }
    [Test]
    public void GetHeroMethodShouldReturnAHeroByGivenName()
    {
        Hero hero1 = new Hero("Superman", 10);
        Hero hero2 = new Hero("Batman", 1);
        HeroRepository data = new HeroRepository();
        data.Create(hero1);
        data.Create(hero2);

        Assert.AreEqual("Batman", data.GetHero("Batman").Name);
    }
}