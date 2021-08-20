using System;
using System.Linq;

namespace _10._LadyBugs
{
    class Program
    {
        static void Main(string[] args)
        {
            int sizeOfField = int.Parse(Console.ReadLine());

            int[] ladyBugIndex = Console.ReadLine().Split().Select(int.Parse).ToArray(); // how many ladybugs on which posityions;
            int[] ladyBugPlaces = new int[sizeOfField];
            string command = Console.ReadLine();
           
            //place ladybugs in their indexes
            for (int i = 0; i < ladyBugIndex.Length; i++)
            {
                ladyBugPlaces[ladyBugIndex[i]] = 1;
            }
            // read commands until end is given
            while (command != "end")
            {
                //split command into sections"{ladybug index} {direction} {fly length}"
                //commandInLoop [0] - ladybud index
                //commandInLoop [1] - direction
                //commandInLoop [2] - fly length


                string[] commandInLoop = command.Split().ToArray();

                // cw to be removed after finished
                Console.WriteLine(string.Join(" ", ladyBugPlaces));

                if (commandInLoop[1] == "right")
                {
                    if (ladyBugPlaces[int.Parse(commandInLoop[0])] == 1)
                    {
                        while (true)
                        {


                            //for (int i = int.Parse(commandInLoop[0]); i <= int.Parse(commandInLoop[0]); i++)
                            //{
                                ladyBugPlaces[i] = 0;
                                if (ladyBugPlaces[i + int.Parse(commandInLoop[2])] == 1)
                                {
                                    while (ladyBugPlaces[i + int.Parse(commandInLoop[2])] == 0)
                                    {

                                        i++;
                                    }
                                    ladyBugPlaces[i + int.Parse(commandInLoop[2])] = 1;
                                }

                           // }
                        }
                    }


                    //for (int i = int.Parse(commandInLoop[0]); i < int.Parse(commandInLoop[2]); i++)
                    //{
                    //    ladyBugPlaces[i] -= 1;
                    //    ladyBugPlaces[i + 1] += 1;


                    //}
                    //for (int p = 0; p < ladyBugPlaces.Length; p++)
                    //{

                    //    if (ladyBugPlaces[p] > 1)
                    //    {
                    //        ladyBugPlaces[p + 1] += ladyBugPlaces[p] - 1;
                    //        ladyBugPlaces[p] -= 1;

                    //    }
                    //}


                    //}
                    else if (commandInLoop[1] == "left")
                    {

                    }



                    command = Console.ReadLine();
                }

                Console.WriteLine(string.Join(" ", ladyBugPlaces));


            }
        }
    }
}
