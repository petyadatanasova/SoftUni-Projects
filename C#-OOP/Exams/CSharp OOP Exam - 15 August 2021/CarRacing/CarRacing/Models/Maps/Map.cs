using CarRacing.Models.Maps.Contracts;
using CarRacing.Models.Racers.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace CarRacing.Models.Maps
{
    public class Map : IMap
    {
        public string StartRace(IRacer racerOne, IRacer racerTwo)
        {
            if(!racerOne.IsAvailable() && !racerTwo.IsAvailable())
            {
                return "Race cannot be completed because both racers are not available!";
            }
            if(!racerOne.IsAvailable())
            {
                return $"{racerTwo.Username} wins the race! {racerOne.Username} was not available to race!";
            }
            if (!racerTwo.IsAvailable())
            {
                return $"{racerOne.Username} wins the race! {racerTwo.Username} was not available to race!";
            }
            racerOne.Race();
            racerTwo.Race();

            double racerOneChanceOfWinning = racerOne.Car.HorsePower * racerOne.DrivingExperience;
            if(racerOne.RacingBehavior=="strict")
            {
                racerOneChanceOfWinning *= 1.2;
            }
            else if (racerOne.RacingBehavior=="aggressive")
            {
                racerOneChanceOfWinning *= 1.1;
            }
            double racerTwoChanceOfWinning = racerTwo.Car.HorsePower * racerTwo.DrivingExperience;
            if (racerTwo.RacingBehavior == "strict")
            {
                racerTwoChanceOfWinning *= 1.2;
            }
            else if (racerTwo.RacingBehavior == "aggressive")
            {
                racerTwoChanceOfWinning *= 1.1;
            }
            if(racerOneChanceOfWinning>racerTwoChanceOfWinning)
            {
                return $"{racerOne.Username} has just raced against {racerTwo.Username}! {racerOne.Username} is the winner!";
            }
            else
            {
                return $"{racerOne.Username} has just raced against {racerTwo.Username}! {racerTwo.Username} is the winner!";
            }
        }
    }
}
