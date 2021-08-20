using System;


namespace _01._Encrypt__Sort_and_Print_Array
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            int sum = 0;
            int[] arrayOFSums = new int[number];
            for (int i = 0; i < number; i++)
            {
                string name = Console.ReadLine();

                char[] letters = name.ToCharArray();
                for (int j = 0; j < letters.Length; j++)
                {
                    if (letters[j] == 'a' || letters[j] == 'e' || letters[j] == 'i' || letters[j] == 'o' || letters[j] == 'u'||
                        letters[j] == 'A'|| letters[j] == 'E' || letters[j] == 'I' || letters[j] == 'O' || letters[j] == 'U')
                    {
                        sum += (int)letters[j] * letters.Length;
                    }
                    else
                    {
                        sum += (int)letters[j] / letters.Length;
                    }
                }
                //int[] arrayOFSums = new int[number];

                arrayOFSums[i] = sum;
                sum = 0;
                //Console.WriteLine(string.Join("", arrayOFSums[i]));

            }
            Array.Sort(arrayOFSums);

            foreach (var item in arrayOFSums)
            {
                Console.WriteLine(item);
            }
            //for (int i = 0; i < arrayOFSums.Length; i++)
            //{
            //    Console.WriteLine(string.Join("", arrayOFSums[i]));
            //}
            
        }
    }
}
