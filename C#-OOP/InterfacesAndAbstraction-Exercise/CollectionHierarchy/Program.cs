using System;

namespace CollectionHierarchy
{
    class Program
    {
        static void Main(string[] args)
        {

            string[] input = Console.ReadLine().Split();
            AddCol firstCollection = new AddCol();
            AddRemoveCol secondCollection = new AddRemoveCol();
            MyList thirdCollection = new MyList();

            foreach (var item in input)
            {
                firstCollection.Add(item);
                secondCollection.Add(item);
                thirdCollection.Add(item);
            }

            int num = int.Parse(Console.ReadLine());

            for (int i = 0; i < num; i++)
            {
                secondCollection.Remove();
                thirdCollection.Remove();
            }
            Console.WriteLine(string.Join(" ",firstCollection.IndexesAdded));
            Console.WriteLine(string.Join(" ",secondCollection.IndexesAdded));
            Console.WriteLine(string.Join(" ",thirdCollection.IndexesAdded));
            Console.WriteLine(string.Join(" ", secondCollection.ItemsRemoved));
            Console.WriteLine(string.Join(" ", thirdCollection.ItemsRemoved));
            
            
            //AddCol collection = new AddCol();
            //Console.WriteLine(collection.Add("item"));
            
            //AddRemoveCol coll = new AddRemoveCol();
            //Console.WriteLine(coll.Add("ITEM"));
            //MyList list = new MyList();
            //Console.WriteLine( list.Add("Item"));

            //Console.WriteLine(coll.Remove());
            //int number = list.Used;
            //Console.WriteLine(number);
            //Console.WriteLine(list.Remove());
            // number = list.Used;
            //Console.WriteLine(number);

        }
    }
}
