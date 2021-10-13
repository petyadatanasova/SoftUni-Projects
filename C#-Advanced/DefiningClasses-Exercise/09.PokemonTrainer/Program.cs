using System;
using System.Collections.Generic;
using System.Linq;

namespace PokemonTrainer
{
    class Program
    {
        static void Main(string[] args)
        {
            //"{trainerName} {pokemonName} {pokemonElement} {pokemonHealth}"
            string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            Dictionary<string, Trainer> trainers = new Dictionary<string, Trainer>();
            while (input[0] != "Tournament")
            {
                string trainerName = input[0];
                string pokemonName = input[1];
                string element = input[2];
                int health = int.Parse(input[3]);

                Pokemon pokemon = new Pokemon(pokemonName, element, health);
                Trainer trainer = new Trainer(trainerName);
               // trainer.Pokemons.Add(pokemon);

                if (!trainers.ContainsKey(trainerName))
                {
                    trainers.Add(trainerName, trainer);
                }
                trainers[trainerName].Pokemons.Add(pokemon);


                input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            }
            string inputElement = Console.ReadLine();
            while (inputElement != "End")
            {

                foreach (var trainer in trainers)
                {
                    if (trainer.Value.Pokemons.Any(x => x.Element == inputElement))
                    {
                        trainer.Value.Badges++;
                    }
                    else
                    {
                        foreach (var pokemon in trainer.Value.Pokemons)
                        {
                            pokemon.Health -= 10;
                        }
                        trainer.Value.Pokemons.RemoveAll(x => x.Health <= 0);
                    }
                }



                inputElement = Console.ReadLine();
            }

            //"{trainerName} {badges} {numberOfPokemon}"
            foreach (var trainer in trainers.OrderByDescending(x => x.Value.Badges))
            {
                Console.WriteLine($"{trainer.Key} {trainer.Value.Badges} {trainer.Value.Pokemons.Count}");
            }


        }
    }
}
