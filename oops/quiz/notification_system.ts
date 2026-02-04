//desinging a notification system

//*there are 3 types of notification for now -- email, push, sms

//* we will make classes for each

//*a common interface for all the notification types so that it is extensible

interface notification{

    sendNoti():void
}

class Email implements notification{
    //*external dependencies can be added here
    constructor(){

    }

    sendNoti(): void {
        console.log("sending email");        
    }
}

class SMS implements notification{
    constructor(){

    }

    sendNoti(): void {
        console.log("sending email");        
    }
}

class Push implements notification{
    constructor(){

    }

    sendNoti(): void {
        console.log("sending email");        
    }
}

class notificationSystem{
    private notificationMethod:notification

    constructor(notificationMetho:notification){
        this.notificationMethod=notificationMetho
    }

    sendNotification():void{
        return this.notificationMethod.sendNoti()
    }

    
}