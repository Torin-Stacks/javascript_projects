// let vehicle  = {wheels:4};
// let car = {seats:4,__proto__: vehicle}
// let driver = {__proto__: car}

// console.log(vehicle.__proto__)
// console.log(car)
// console.log(car.__proto__)

//prototype based oop

function Employee(name, phonenumber, designation){
    this. name = name;
     this. phonenumber = phonenumber;
      this. designation = designation;

      this.printDetails =() => {
        return `my name is ${this.name}\nyou can contact me via ${this. phonenumber}. I am the ${designation} of sulty bank`;
      }
      this.company = "sulty bank"
      this.paySalary =() => {
        if(this.designation === "manager"){
            this.salary = 5000000;
        }
        else if(this.designation === "cook"){this.salary = 200000}
      }
}

// let employee1 = new Employee("sultan", "+090900000999", "manager");
// let employee2 = new Employee("precious", "+090900000999", "manager2");
// Employee.prototype.isVerified = true;
// employee1.isAvailable = true

// console.log(employee1.__proto__ === employee2.__proto__)
// console.log(employee1.company === employee2.company)
// console.log(employee1.printDetails())
// console.log(employee1.isVerified)
// console.log(employee1.isAvailable)
module.exports = Employee