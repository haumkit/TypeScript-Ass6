class Animal{
    private name:string;

    constructor(name: string){
        this.name = name;
    }

    speak(){
        console.log(`${this.name}`);
    }
}
const a = new Animal("Dog");
a.speak();