
//here the only difference being that we allow two threads to enter a certain method and then we acquire the lock

class DoubleLockSingleton{
    private static instance: DoubleLockSingleton|null

    constructor(){
        console.log('DoubleLockSingleton')

    }

    static getInstance(){
        if(this.instance==null){
            //acquire lock
            if(this.instance==null){
                this.instance= new DoubleLockSingleton()
            }

            return this.instance
        }
    }
}