// Coding Challenge #6 : Employee Management System 

// Step Two:  Base Class 

class Employee {
    constructor(name, department) {
        this.name = name; 
        this.department = department; 
    }

    describe() {
        return `${this.name} works in ${this.department}`;
    }; 

} 
// Step 3: Subclass Manager 

class Manager extends Employee { 
    constructor(name, department, teamSize) {
        super(name, department); 
        this.teamSize = teamSize; 
    }
// Overrides describe() with manager-specific info 

describe() {
    return `${this.name} manages ${this.teamSize} people in ${this.department}`; 
}

isExecutiveLevel() { 
    return this.teamSize >=10; 
    } 
} 

// Step 5: Company class to hold employees 

class Company { 
    constructor(name) { 
        this.name = name; 
        this.employees = []; 
    }

    addEmployee(employee) {
        this.employees.push(employee); 
    }

    listEmployees () {
        console.log(`\n- ${this.name} Employee Roster -`);
        for (const emp of this.employees) {
            console.log(emp.describe());
        }
    }
} 
// Step 4 & 6: // Combined both to make it easier  

const emp1 = new Employee("Isabella Miranda", "Data Analytics"); 
const emp2 = new Employee("Andriana Kilias", "Supply Chain"); 
const mgr1 = new Manager( "Jacob Mamrak", "Project Management", 9); 
const mgr2 = new Manager("Benito Martinez", "Engineering", 10); 












