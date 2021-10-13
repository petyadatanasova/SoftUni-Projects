using System;
using System.Collections.Generic;
using System.Text;

namespace PokemonTrainer
{
    public  class Trainer
    {
        public Trainer(string name)
        {
            Name = name;
            Pokemons = new List<Pokemon>();
        }
        public string  Name { get; set; }
        public int Badges { get; set; } = 0;

        public List<Pokemon> Pokemons { get; set; }
    }
}
