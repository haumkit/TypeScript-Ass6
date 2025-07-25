class Person{
    private _age: number = 0;

    get age(){
        return this._age;
    }

    set age(value: number){
        if(value > 0 && value < 120){
            this._age = value;
        }
        else{
            console.log("Invalid age");
        }
    }
}

const a = new Person();
a.age = 25;
console.log(a.age);
