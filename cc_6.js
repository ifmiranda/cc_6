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
}




