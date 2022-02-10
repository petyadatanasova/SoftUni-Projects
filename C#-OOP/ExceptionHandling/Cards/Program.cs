using System;
using System.Collections.Generic;
using System.Text;

namespace Cards
{
    public class Program
    {
        static void Main(string[] args)
        {
     

            Console.OutputEncoding = Encoding.UTF8;
            List<Card> cards = new List<Card>();
         
            string[] input = Console.ReadLine().Split(", ");
            //
            //A S, 10 D, K H, 2 C

            for (int i = 0; i < input.Length; i++)
            {
                try
                {
                    string[] cardValues = input[i].Split();

                    string face = cardValues[0];
                    string suit = cardValues[1];


                    if ((face == "2" || face == "3" || face == "4" || face == "5" || face == "6" || face == "7" || face == "8" ||
                    face == "9" || face == "10" || face == "J" || face == "K" || face == "Q" || face == "A") && (suit == "S" ||
                    suit == "D" || suit == "H" || suit == "C"))
                    {
                        Card card = new Card(face, suit);
                        cards.Add(card);
                    }
                    else
                    {
                        throw new ArgumentException("Invalid card!");
                    }
                }
                catch (Exception ex)
                {

                    Console.WriteLine(ex.Message);
                }

            }
            Console.WriteLine($"{string.Join(" ", cards)}");
        }

    }
}
