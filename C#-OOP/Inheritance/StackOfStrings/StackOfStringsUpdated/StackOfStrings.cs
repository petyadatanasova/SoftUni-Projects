using System;
using System.Collections.Generic;
using System.Text;

namespace CustomStack
{
    public class StackOfStrings : Stack<string>
    //public class StackOfStrings <T> : Stack<T>
    {
        public bool IsEmpty()
        {
            return this.Count == 0;
        }
        public Stack<string> AddRange(List<string> list)
        {
            foreach (var item in list)
            {
                this.Push(item);
            }
            
            return this;
        }
    }
}
