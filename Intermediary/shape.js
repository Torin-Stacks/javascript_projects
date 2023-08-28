class Shapes{
    constructor(name){
        this.name = name

    }

     getName(){
        return this.name
     }
}

class Rectangle extends Shapes{
    constructor(name,side1,side2){
    super(name);
    this.side1 = side1;
    this.side2 = side2;
    }
    
    getArea(side1, side2){
        let area = side1 * side2
        return area;
    }

    isSquare(){
        if(this.side1 == this.side2){
            return `this is a square`;
        }
        else{return `this is not a aquare`;}
    }

    
}

let rectangle1 = new Rectangle("rect", 4 ,5)
console.log(rectangle1.getArea(rectangle1.side1,rectangle1.side2))
console.log(rectangle1.isSquare())