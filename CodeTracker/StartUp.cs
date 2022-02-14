using System;

namespace AuthorProblem
{
    [Author("Victor")]
    class StartUp
    {
        [Author("George")]
        [Author("Victor")]
        static void Main(string[] args)
        {

            Tracker tracker = new Tracker();
            tracker.PrintMethodsByAuthor();
        }
    }
}
