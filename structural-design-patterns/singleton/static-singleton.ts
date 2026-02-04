//implementing the static singleton

class StaticSingleton{
    private static instance:StaticSingleton | null

    private constructor(){
        console.log("Creating a static singleton");
    }

    static{
        this.instance = new StaticSingleton()
    }

    static getInstance(){
        return this.instance;
    }
}

const obj1 = StaticSingleton.getInstance();
const obj2 = StaticSingleton.getInstance();

console.log(obj1===obj2);