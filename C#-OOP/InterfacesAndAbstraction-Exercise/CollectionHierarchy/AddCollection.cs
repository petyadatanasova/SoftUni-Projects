using System;
using System.Collections.Generic;
using System.Text;

namespace CollectionHierarchy
{
    public class AddCol : IAddable
    {
        public AddCol()
        {
            AddCollection = new Queue<string>();
            IndexesAdded = new List<int>();
        }
        public List<int> IndexesAdded { get; private set; }
        public Queue <string> AddCollection { get; private set; }
        public int Add(string item)
        {
            AddCollection.Enqueue(item);
            IndexesAdded.Add(AddCollection.Count - 1);
            return AddCollection.Count - 1;
        }
    }
}
