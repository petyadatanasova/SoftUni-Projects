using System;
using System.Linq;

namespace _10._LadyBugs_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int fieldSize = int.Parse(Console.ReadLine());
            int[] indexLadyBugs = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int[] gameField = new int[fieldSize];



            for (int i = 0; i < indexLadyBugs.Length; i++)
            {
                if (indexLadyBugs[i] >= 0 && indexLadyBugs[i] < gameField.Length)
                {
                    gameField[indexLadyBugs[i]] = 1;
                }

            }
            string input = Console.ReadLine();

            while (input != "end")
            {
                string[] command = input.Split(" ", StringSplitOptions.RemoveEmptyEntries);
                int position = int.Parse(command[0]);
                string direction = command[1];
                int moves = int.Parse(command[2]);

                if (position >= 0 && position < gameField.Length)
                {
                    if (gameField[position] == 1 && moves != 0)
                    {
                        gameField[position] = 0;


                        if (direction == "right")
                        {
                            if (position + moves<gameField.Length && position + moves >= 0)
                            {
                                for (int i = position + moves; i < gameField.Length; i += moves)
                                {
                                    if (gameField[i] == 0)
                                    {
                                        gameField[i] = 1;
                                        break;
                                    }
                                }
                            }
                        }



                        else if (direction == "left")
                        {
                            if (position - moves < gameField.Length && position- moves >= 0)
                            {
                                for (int i = position - moves; i < fieldSize && i >= 0; i -= moves)
                                {
                                    if (gameField[i] == 0)
                                    {
                                        gameField[i] = 1;
                                        break;
                                    }
                                }
                            }

                        }
                        //else - works with this part and without it; 
                        //{
                        //    gameField[position] = 1;
                        //    continue;
                        //}

                    }
                }

                //Console.WriteLine(string.Join(" ", gameField));
                input = Console.ReadLine();
            }
            Console.WriteLine(string.Join(" ", gameField));
        }
    }
}