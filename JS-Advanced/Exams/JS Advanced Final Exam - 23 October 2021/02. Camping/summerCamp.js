class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceFromCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];

    }
    registerParticipant(name, condition, money) {
        
        if (condition === "child" || condition === "student" || condition == "collegian") {
            let isPresent = false;
            let index = -1;
            for (let i = 0; i < this.listOfParticipants.length; i++) {
                if (this.listOfParticipants[i].name === name) {
                    isPresent = true;
                    index = i;
                }
            }
            if (isPresent) {
                return `The ${name} is already registered at the camp.`;
            }
            if (this.priceFromCamp[condition] > money) {
                return `The money is not enough to pay the stay at the camp.`;
            }
            this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
            return `The ${name} was successfully registered.`;
        } else {
            throw new Error("Unsuccessful registration at the camp.");
        }

    }
    unregisterParticipant(name) {
        let isPresent = false;
        let index = -1;
        for (let i = 0; i < this.listOfParticipants.length; i++) {
            if (this.listOfParticipants[i].name === name) {
                isPresent = true;
                index = i;
            }
        }
        if (!isPresent) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`;
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        let isPresent1 = false;
        let index1 = -1;
        for (let i = 0; i < this.listOfParticipants.length; i++) {
            if (this.listOfParticipants[i].name === participant1) {
                isPresent1 = true;
                index1 = i;
            }
        }
        if (!isPresent1) {
            throw new Error(`Invalid entered name/s.`);
        }
        if (typeOfGame === "Battleship") {

            this.listOfParticipants[index1].power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        } else if (typeOfGame === "WaterBalloonFights") {
            let isPresent2 = false;
            let index2 = -1;
            for (let i = 0; i < this.listOfParticipants.length; i++) {
                if (this.listOfParticipants[i].name === participant2) {
                    isPresent2 = true;
                    index2 = i;
                }

            }
            if (!isPresent2) {
                throw new Error(`Invalid entered name/s.`);
            }
            if (this.listOfParticipants[index1].condition !== this.listOfParticipants[index2].condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            if (this.listOfParticipants[index1].power === this.listOfParticipants[index2].power) {
                return `There is no winner.`;
            } else if (this.listOfParticipants[index1].power > this.listOfParticipants[index2].power) {
                this.listOfParticipants[index1].wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else {
                this.listOfParticipants[index2].wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            }
        }

    }
    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        for (const p of this.listOfParticipants.sort((a, b) => b.wins - a.wins)) {
            result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
        }
        return result.join("\n");
    }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



