using System;
using System.Collections.Generic;
using System.Text;

namespace Cards
{
    public class Card
    {
        public Card(string face, string suit)
        {
            Face = face;
            Suit = suit;
        }

        public string Face { get; private set; }
        public string Suit { get; private set; }

        public override string ToString()
        {
            char suitForPrint;
            switch (Suit)
            {
                case "S":
                    suitForPrint = '\u2660';
                    break;
                case "H":
                    suitForPrint = '\u2665';
                    break;
                case "D":
                    suitForPrint = '\u2666';
                    break;
                case "C":
                    suitForPrint = '\u2663';
                    break;
                default:
                    suitForPrint =' ';
                    break;
            }
            return $"[{Face}{suitForPrint}]";
        }
        //S = '\u2660',
        //H = '\u2665',
        //D = '\u2666',
        //C = '\u2663'
    }
}
