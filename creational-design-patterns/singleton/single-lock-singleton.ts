//here the idea is simple we acquire a lock and then proceed with the opertion

class SingleLockInstance{
    private static instance: SingleLockInstance | null
    //acquire lock

    constructor(){

    }

    static getInstance(){
        if(this.instance ==null){
        //create instance
    }

    return this.instance
    }
     
}