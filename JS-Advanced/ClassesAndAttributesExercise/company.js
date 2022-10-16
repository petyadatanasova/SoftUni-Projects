class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) {
            throw new Error("Invalid input!");
        }
        if (Number(salary) < 0) {
            throw new Error("Invalid input!");
        }
        if (!Object.keys(this.departments).includes(department)) {
            this.departments[department] = {};
            this.departments[department].employees = [];
            this.departments[department].aveSalary = 0;
            this.departments[department].sumSalary = 0;
        }
        let emplopyee = {};
        emplopyee.name = name;
        emplopyee.salary = Number(salary);
        emplopyee.position = position;

        this.departments[department].employees.push(emplopyee);
        this.departments[department].sumSalary += emplopyee.salary;
        this.departments[department].aveSalary = this.departments[department].sumSalary / this.departments[department].employees.length;
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let bestDepartment = Object.entries(this.departments)
            .sort(([depNameOne, depInfoOne], [depNameTwo, depInfoTwo]) => {
                return depInfoTwo.aveSalary - depInfoOne.aveSalary
            })[0];
        bestDepartment[1].employees = bestDepartment[1].employees.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name)
        });

        let output = `Best Department is: ${bestDepartment[0]}\nAverage salary: ${bestDepartment[1].aveSalary.toFixed(2)}\n`;
        let workingoutput = [];
        for (const em of bestDepartment[1].employees) {
            workingoutput.push(`${em.name} ${em.salary} ${em.position}`);
        }
        output+=workingoutput.join("\n");
        return output;
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
