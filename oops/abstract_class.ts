abstract class Car {
  private brand: string = "";
  protected name: string = "";

  constructor(Ibrand: string) {
    this.brand = Ibrand;
  }

  abstract getModel():string;

  protected getBrand(): string {
    return this.brand;
  }
}

/**
 * * !hell
 */

class Mercedes extends Car {
  constructor(brand: string) {
    //*in order to call the parent class we have to use super
    super(brand)
    this.name = brand;
  }

  getModel(): string {
    return `The car model is${super.getBrand()} and the access of ${this.name}`
  }

  getBrand(): string {
    return super.getBrand();
  }
}

const obj = new Mercedes("cs70m");

console.log(obj.getBrand());
console.log(obj.getModel());

//we are hiding the complex working in abstraction
//encapsulation is keeping similar stuff together