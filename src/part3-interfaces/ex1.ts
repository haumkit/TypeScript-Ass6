interface Car{
    readonly brand: string;
    speed: number;
    start():void;
}
const car: Car = {
  brand: "Toyota",
  speed: 100,
  start() {
    console.log(`${this.brand} is starting at ${this.speed}km/h`);
  }
};
car.start();