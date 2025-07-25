abstract class Shape{
    abstract area(): number;
}

class Rectangle extends Shape{
    constructor(private width:number, private height: number){
        super();
    }

    area(): number{
        return this.width * this.height;
    }
}

const a = new Rectangle(2, 3);
console.log(a.area());