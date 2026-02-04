//implementing lazy singleton

class LazySingleton{
    private static instance:LazySingleton|null;

    private constructor(){
        console.log("This is the implementation of lazy singleton");
    }
    
    //static method so that it is accessible via a class

    static getInstance(){
        if(this.instance==null){
            this.instance = new LazySingleton();
        }

        return this.instance
        
    }
}

const obj1 = LazySingleton.getInstance()
const obj2 = LazySingleton.getInstance() 

console.log(obj1===obj2);