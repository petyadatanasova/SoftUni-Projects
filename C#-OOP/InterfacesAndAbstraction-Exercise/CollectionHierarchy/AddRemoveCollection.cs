

using System.Collections.Generic;

namespace CollectionHierarchy
{
    public class AddRemoveCol : IAddable, IRemovable
    {
        public AddRemoveCol()
        {
            AddRemoveCollection = new List<string>();
            IndexesAdded = new List<int>();
            ItemsRemoved = new List<string>();
        }

        public List<string> AddRemoveCollection { get; private set; }

        public List<int> IndexesAdded { get; private set; }
        public List<string> ItemsRemoved { get; private set; }

        public int Add(string item)
        {
            AddRemoveCollection.Insert(0, item);
            IndexesAdded.Add(0);
            return 0;
        }

        public virtual string Remove()
        {
            string item = AddRemoveCollection[AddRemoveCollection.Count - 1];
            ItemsRemoved.Add(item);
            AddRemoveCollection.RemoveAt(AddRemoveCollection.Count - 1);

            return item;
        }
    }
}
