using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BirthdayCelebration
{
    class Program
    {
        static void Main(string[] args)
        {
            //queue
            int[] eatingCapasityPerSingleGuest = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            //stack
            List<int> platesInput = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList();
      
            Queue<int> guestsCapacity = new Queue<int>();
            Stack<int> plates = new Stack<int>();
            int wastedFood = 0;
            foreach (var item in eatingCapasityPerSingleGuest)
            {
                guestsCapacity.Enqueue(item);
            }
            foreach (var plate in platesInput)
            {
                plates.Push(plate);
            }
            while (guestsCapacity.Any() && plates.Any())
            {

                int currentGuest = guestsCapacity.Peek();
                int currentPlate = plates.Pop();

                if(currentGuest<=currentPlate)
                {
                    guestsCapacity.Dequeue();
                    wastedFood += (currentPlate - currentGuest);
                }
                else
                {
                    currentGuest -= currentPlate;

                    while (currentGuest>0 && plates.Any())
                    {
                        currentPlate = plates.Pop();

                        if(currentGuest<=currentPlate)
                        {
                            guestsCapacity.Dequeue();
                            wastedFood += (currentPlate - currentGuest);
                            currentGuest = 0;
                        }
                        else
                        {
                            currentGuest -= currentPlate;
                        }

                    }
                    
                }

            }
            if(plates.Any())
            {
                Console.WriteLine($"Plates: {string.Join(" ", plates)}");
            }
            else if (guestsCapacity.Any())
            {
                Console.WriteLine($"Guests: {string.Join(" ", guestsCapacity)}");
            }
            Console.WriteLine($"Wasted grams of food: {wastedFood}");

        }
    }
}
