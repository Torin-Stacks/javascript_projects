function Human(feet,hands,mouth){
    this.feet = feet;
     this.hands = hands;
     this.mouth = mouth;
     this.weight = "650kbs"
     this.aboutMe = () =>
    {
        return `I have ${this.feet} feet, ${this.hands} hand and ${mouth} mouth}`
    }
        
    }

function Employee(feet,hands,mouth,designation){
    Human.call(this, feet,hands,mouth);
    this.designation = designation;
}

let employee = new Employee(2,2,1,"manager");
Employee.prototype.age = 22;
Human.prototype.height ="6.4";


console.log(employee.aboutMe());
console.log(employee.age);
console.log(employee.height);
console.log(human.height);