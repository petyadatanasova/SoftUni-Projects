using System;
using System.Collections.Generic;
using System.Text;

namespace CollectionHierarchy
{
    public class MyList : IAddable, IRemovable
    {
        public MyList()
        {
            MyListCol = new List<string>();
            IndexesAdded = new List<int>();
            ItemsRemoved = new List<string>();
            
        }

        public List<string> MyListCol { get; private set; }
        public int Used { get; private set; }
        public List<int> IndexesAdded { get;private set; }
        public List<string> ItemsRemoved { get; private set; }

        public int Add(string item)
        {
            MyListCol.Insert(0, item);
            IndexesAdded.Add(0);
            return 0;
        }

        public string Remove()
        {
            string item = MyListCol[0];
            ItemsRemoved.Add(item);
            MyListCol.RemoveAt(0);

            return item;
        }

        private void CalculateUsed()
        {
            Used = MyListCol.Count;
        }
        
    }
}
