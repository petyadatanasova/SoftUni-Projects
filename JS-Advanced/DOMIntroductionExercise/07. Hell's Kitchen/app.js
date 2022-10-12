function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = JSON.parse(document.querySelector("div#inputs textarea").value);
      let restaurants = [];
      let bestWorkers = document.querySelector("div#workers p");
      bestWorkers.textContent="";
      let bestRestaurant ={};

      for (const restaurant of input) {
         let [restaurantName, workersInfo] = restaurant.split(" - ");

         if (!restaurants.map(item => item.name).includes(restaurantName)) {
            restaurants.push({
               name: restaurantName,
               workers: []
            })
         }
         let workers = workersInfo.split(", ");

         for (const worker of workers) {
            let [workerName, workerSalary] = worker.split(" ");
            let index = restaurants.map(item => item.name).indexOf(restaurantName);
            restaurants[index].workers.push({
               name: workerName,
               salary: Number(workerSalary)
            })
         }
      }
      for (const restaurant of restaurants) {
         
         let sum = 0;
         let bestSalary = 0;
         for (const worker of restaurant.workers) {
            sum += worker.salary;
            if (bestSalary < worker.salary) {
               bestSalary = worker.salary;
            }
         }
         restaurant.aveSalary = (sum / restaurant.workers.length).toFixed(2);
         restaurant.bestSalary = bestSalary.toFixed(2);
      }

   
      let bestRestaurants = restaurants.sort((a, b) => b.aveSalary - a.aveSalary);
       bestRestaurant = bestRestaurants[0];

      document.querySelector("div#bestRestaurant p").textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.aveSalary} Best Salary: ${bestRestaurant.bestSalary}`;
    
      for (const worker of bestRestaurant.workers.sort((a,b)=>b.salary-a.salary)) {
         bestWorkers.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }
   }
}
