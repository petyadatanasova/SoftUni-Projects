using System;
using System.Collections.Generic;

namespace MilitaryElite
{
    public class Program
    {
        static void Main(string[] args)
        {
            //Private 1 Peter Johnson 22.22
            //Commando 13 Sam Peterson 13.1 Airforces
            //Private 222 Tony Samthon 80.08
            //LieutenantGeneral 3 George Stevenson 100 222 1
            //End
            Dictionary<int,Soldier> soldiers = new Dictionary<int,Soldier>();
            string[] input = Console.ReadLine().Split();
            
            while (input[0]!="End")
            {
                string SoldierType = input[0];
               
                if(SoldierType=="Private")
                {
                    int id = int.Parse(input[1]);
                    string firstName = input[2];
                    string lastName = input[3];
                    decimal salary = decimal.Parse(input[4]);

                    Private @private = new Private(firstName, lastName, id, salary);
                    
                    soldiers.Add(id,@private);

                }
                else if (SoldierType == "LieutenantGeneral")
                {
                    
                    int id = int.Parse(input[1]);
                    string firstName = input[2];
                    string lastName = input[3];
                    decimal salary = decimal.Parse(input[4]);

                    LieutenantGeneral lieutenantGeneral = new LieutenantGeneral(firstName, lastName, id, salary);
                    for (int i = 5; i < input.Length; i++)
                    {
                        int privateId = int.Parse(input[i]);
                        if(soldiers.ContainsKey(privateId))
                        {
                            Soldier soldierPrivate = soldiers[privateId];
                            lieutenantGeneral.Privates.Add(soldierPrivate as Private);
                        }

                    }

                    soldiers.Add(id, lieutenantGeneral);
                }
                else if (SoldierType == "Engineer")
                {
                    int id = int.Parse(input[1]);
                    string firstName = input[2];
                    string lastName = input[3];
                    decimal salary = decimal.Parse(input[4]);
                    string corps = input[5];
                    if(corps!="Airforces" && corps!="Marines")
                    {
                        input = Console.ReadLine().Split();
                        continue;
                    }
                    Engineer engineer = new Engineer(firstName, lastName,id, salary, corps);
                    for (int i = 6; i < input.Length-1; i+=2)
                    {
                        string partName = input[i];
                        int workedHours = int.Parse(input[i + 1]);

                        Repair repair = new Repair(partName, workedHours);
                        engineer.AddRepairs(repair);

                    }
                    soldiers.Add(id, engineer);
                }
                else if (SoldierType == "Commando")
                {
                    int id = int.Parse(input[1]);
                    string firstName = input[2];
                    string lastName = input[3];
                    decimal salary = decimal.Parse(input[4]);
                    string corps = input[5];
                    if (corps != "Airforces" && corps != "Marines")
                    {
                        input = Console.ReadLine().Split();
                        continue;
                    }
                    Commando commando = new Commando(firstName, lastName, id, salary, corps);
                    for (int i = 6; i < input.Length - 1; i += 2)
                    {
                        string codeName = input[i];
                        string state = input[i + 1];
                        if(state!="inProgress" && state!="Finished")
                        {
                            continue;
                        }
                        Mission mission = new Mission(codeName, state);
                        commando.Missions.Add(mission);

                    }
                    soldiers.Add(id,commando);
                }
                else if(SoldierType=="Spy")
                {
                    int id = int.Parse(input[1]);
                    string firstName = input[2];
                    string lastName = input[3];
                    int codeNumber = int.Parse(input[4]);

                    Spy spy = new Spy(firstName,lastName, id, codeNumber);
                    soldiers.Add(id,spy);
                }


                input = Console.ReadLine().Split();
            }
            

            foreach (var soldier in soldiers)
            {
                Console.WriteLine(soldier.Value.ToString());
            }
        }
    }
}
