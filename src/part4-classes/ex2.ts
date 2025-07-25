class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Cat extends Animal{
    speak(){
        console.log("Meow");
    }
}

const c = new Cat("Kitty");
c.speak();