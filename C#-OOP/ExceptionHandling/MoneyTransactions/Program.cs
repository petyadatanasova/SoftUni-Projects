using System;
using System.Collections.Generic;

namespace MoneyTransactions
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(",");
            Dictionary<int, double> accounts = new Dictionary<int, double>();

            for (int i = 0; i < input.Length; i++)
            {
                string[] accoutnInfo = input[i].Split("-");

                int accoutNumber = int.Parse(accoutnInfo[0]);
                double accoutBalance = double.Parse(accoutnInfo[1]);
                accounts.Add(accoutNumber, accoutBalance);
            }

            string[] commandsInput = Console.ReadLine().Split();

            while (commandsInput[0]!="End")
            {
                try
                {
                    if (commandsInput[0] != "Deposit" && commandsInput[0] != "Withdraw")
                    {
                        throw new InvalidOperationException("Invalid command!");
                    }
                    if (!accounts.ContainsKey(int.Parse(commandsInput[1])))
                    {
                        throw new InvalidOperationException("Invalid account!");
                    }
                    int accountNum = int.Parse(commandsInput[1]);
                    double sum = double.Parse(commandsInput[2]);
                    if (commandsInput[0] == "Deposit")
                    {

                        accounts[accountNum] += sum;
                    }
                    else if (commandsInput[0] == "Withdraw")
                    {

                        if (accounts[accountNum] < sum)
                        {
                            throw new InvalidOperationException("Insufficient balance!");
                        }
                        accounts[accountNum] -= sum;

                    }
                    Console.WriteLine($"Account {accountNum} has new balance: {accounts[accountNum]:F2}");

                }
                catch (InvalidOperationException ex)
                {

                    Console.WriteLine(ex.Message);
                }

                Console.WriteLine("Enter another command");
                commandsInput = Console.ReadLine().Split();
            }
        }
    }
}
