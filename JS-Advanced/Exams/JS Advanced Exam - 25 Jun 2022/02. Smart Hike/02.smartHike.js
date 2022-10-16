class SmartHike{
    constructor(username){
        this.username=username;
        this.goals={};
        this.listOfHikes=[];
        this.resources=100;
    }
    addGoal (peak, altitude){
        if(Object.keys(this.goals).includes(peak)){
            return `${peak} has already been added to your goals`;
        }else{
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
    }
    hike (peak, time, difficultyLevel){
        if(!Object.keys(this.goals).includes(peak)){
            throw new Error (`${peak} is not in your current goals`);
        }else if (!Object.keys(this.goals).includes(peak) && this.resources===0){
            throw new Error("You don't have enough resources to start the hike");
        }
        let result = this.resources-(time*10);
        if(result<0){
            return "You don't have enough resources to complete the hike";
        }else{
            this.resources-=time*10;
            this.listOfHikes.push({peak, time, difficultyLevel});
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }

    }
    rest (time){
        this.resources+=time*10;
        if(this.resources>=100){
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }else{
            return `You have rested for ${time} hours and gained ${time*10}% resources`;
        }
    }
    showRecord (criteria){
        if(this.listOfHikes.length===0){
            return `${this.username} has not done any hiking yet`
        }
        if(criteria==="easy" || criteria==="hard"){
            let bestHike = this.listOfHikes.filter(x=>x.difficultyLevel===criteria).sort((a,b)=>a.time-b.time)[0];
            if(bestHike){
                return `${this.username}'s best ${bestHike.difficultyLevel} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
            }else{
                return `${this.username} has not done any ${criteria} hiking yet`
            }
        }else{
            
            let resultArr =[];
            resultArr.push("All hiking records:");
            for (const hike of this.listOfHikes) {
                resultArr.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`);
            }
            return resultArr.join("\n");
        }
    }
}

const user1 = new SmartHike('Vili');
console.log(user1.addGoal('Musala', 2925));
console.log(user1.addGoal('Rui', 1706));
console.log(user1.hike('Musala', 3, 'hard'));
console.log(user1.rest(5));
console.log(user1.hike('Rui', 3, 'hard'));
console.log(user1.showRecord("all"));




// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));
// console.log("-------------------");









// console.log(user1.hike('Everest', 12, 'hard'));
console.log("-------------------");
// const user2 = new SmartHike('Vili');
// console.log(user2.addGoal('Musala', 2925));
// console.log(user2.hike('Musala', 8, 'hard'));
// console.log(user2.rest(4));
// console.log(user2.rest(5));

