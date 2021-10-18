using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CocktailParty
{
    public class Cocktail
    {

        public Cocktail(string name, int capacity, int maxAlcoholLevel)
        {
            Name = name;
            Capacity = capacity;
            MaxAlcoholLevel = maxAlcoholLevel;
            Ingredients = new Dictionary<string, Ingredient>();

        }
        Dictionary<string, Ingredient> Ingredients;
        public string Name { get; set; }
        public int Capacity { get; set; }
        public int MaxAlcoholLevel { get; set; }

        public void Add(Ingredient ingredient)
        {
            if (Ingredients.Count < Capacity && !Ingredients.ContainsKey(ingredient.Name))
            {
                Ingredients.Add(ingredient.Name, ingredient);
            }
        }

        public bool Remove(string name)
        {
            if (Ingredients.ContainsKey(name))
            {
                return Ingredients.Remove(name);
            }
            return false;
        }

        public Ingredient FindIngredient(string name)
        {
            if(Ingredients.ContainsKey(name))
            {
                return Ingredients[name];
            }
            return null;
        }

        public Ingredient GetMostAlcoholicIngredient()
        {
            if (Ingredients.Any())
            {
                var mostAlcohol = Ingredients.Select(x => x.Value.Alcohol).Max();
                var ingredient = Ingredients.FirstOrDefault(x => x.Value.Alcohol == mostAlcohol);
                return ingredient.Value;
            }
            return null;
        }
        public int CurrentAlcoholLevel => Ingredients.Select(x => x.Value.Alcohol).Sum();

        public string Report()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Cocktail: {Name} - Current Alcohol Level: {CurrentAlcoholLevel}");
            foreach (var item in Ingredients)
            {
                sb.AppendLine(item.Value.ToString());
            }
            return sb.ToString().TrimEnd();
        }

    }
}
