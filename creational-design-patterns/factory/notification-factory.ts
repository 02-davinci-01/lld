//the idea is that you want your code to be more extensible by allowing for easy addition of logic

//a simple abstraction can be a simple centralized factory 

// class CentralizedFactory{
// sendNoti(type:string) and then the approrpirate function call
//}

//now the factory method aims to solve that how? -- a centralized kitchen template
// each type of service would have its own kitchen which would return stuff
//following the same pattern and then we use that to send request 

//simply -- first we define an inner conditional -- what is something that every kitchen should have

interface Notification{
    send():void
}

//*implementing the kitchen

class SendEmail implements Notification{
    send(){
        console.log('sending email')
    }
}

//in a way this is the exact implementation -- which we call using the factory

class SendSMS implements Notification{
    send(){
        console.log('sending SMS')
    }
}

//* creating the template for the restaurant building -- basically how should every restaurant look like

abstract class   CentralizedCreator{

    abstract createNotification():Notification

    //* a generalized logic on how each restaurant should work with kitchens

    sendNotification(){
        const noti_object = this.createNotification()
        return noti_object.send()
    }   

}


//* making the restaurant function

class EmailCreator extends CentralizedCreator{
   createNotification(): Notification {
    //why it didn't throw an error at ()
       return new SendEmail()
   }
}

class SMSCreator extends CentralizedCreator{
    createNotification(): Notification {
        return new SendEmail()
    }
}

//using it in client code

class FactoryMethodDemo{
    static main(){
        //first we create a creator of whatever type we want 
        let defaultCreator:CentralizedCreator

        defaultCreator = new EmailCreator();

        defaultCreator.sendNotification();

        defaultCreator = new SMSCreator();
        defaultCreator.sendNotification();



        //now how you would send notification using this defaultCreator?


    }
}

//here is the simple analogy encapsulation
//1. you want to create specific restaurants with specific kitchens to handle certain aspects
//2. you create the nature of the kitchen -- that hey every kitchen should have the send, here you
// have flexibliity as you can create any interface that you want 
//3. then you create the nature of the restaurant itself -- abstract class: the nature of the kitchen
//and how the kitchen should be rendered 
//4. then further specific implementation if required of the specific kitchen
// benefit is that you are only concerned with one method -- send notification -- everything is handled by 
//the implementation of the class and further detailed implementation is handled by the kitchen. 
//design-kitchen -> implement-kitchen -> design restaurant -> implement restaurant ---- now you are only concerned with 
//calling the implement restaurant. the rest in encapsulated