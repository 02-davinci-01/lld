//in eager singletone we create an instance of the class as soon as it is loaded

class EagerSingleton {
  private static readonly instance: EagerSingleton = new EagerSingleton(
    "claus",
  );

  private constructor(name: string) {
    console.log("This is your name ${name}");
  }

  static getSingleton(): EagerSingleton {
    return EagerSingleton.instance;
  }
}

const obj1 = EagerSingleton.getSingleton();

console.log(obj1);
