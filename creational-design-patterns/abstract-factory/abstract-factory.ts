//in this we have two types of factory
//first is for the kind of factory we want to make
//then the a factory that the relevant one supports

//implementing the windows and mac factory

// interface OSInterface{
//     createButton():void
//     createModal():void
// }

// abstract class OSFactory implements OSInterface{
//     abstract createButton(): void
//     abstract createModal(): void
// }


//creating a blueprint for the factory for the product itself

interface Button{
    paint():void
    onClick():void
}

interface Bar{
    paint():void
    onClick():void
}

//implementing the os Specific factory

class WindowsButton implements Button{

    paint(): void {
        console.log('i am a windows button')
    }

    onClick(): void {
        console.log("i am a windows click behaviour")
    }
}

class WindowsBar implements Bar{
    paint(): void {
        console.log('i am a windows bar')
    }

    onClick(): void {
        console.log("i am a windows click behaviour")
    }
}

class MacBar implements Bar{

    paint(): void {
        console.log('i am a mac os bar')
    }

    onClick(): void {
        console.log('i am a mac onClick behaviour')
    }
}

class MacButton implements Button{

    paint(): void {
        console.log('i am a mac os button')
    }

    onClick(): void {
        console.log('i am a mac onClick behaviour')
    }
}

//creating GUI FACTORY BLUEPRINT

interface GUIFactory{
    //but in this case do we want to return a precise method that is hmm problem would be that we have multiple types there it was unified under the notification interface here that
    //is not the case
    createButton():Button
    createBar():Bar
}

class WindowFactory implements GUIFactory{
    
   createBar(): Bar {
       return new WindowsBar()
   }

   createButton(): Button {
       return new WindowsButton()
   }
}

class MacFactory implements GUIFactory{
    createBar(): Bar {
        return new MacBar()
    }

    createButton(): Button {
        return new MacButton()
    }
}

//how do we apply it in our application

class Application{
    private guiFactory:GUIFactory

    constructor(inputFactory:GUIFactory){
        this.guiFactory = inputFactory
    }

    renderUI(){
        this.guiFactory.createBar()
        this.guiFactory.createButton()
    }
}

const os ='mac'
let inst_factory:GUIFactory
if(os=='mac'){
    inst_factory = new WindowFactory()
}

else{
    inst_factory = new MacFactory()
}

const application_factory = new Application(inst_factory)
application_factory.renderUI()

//conceptual flow
// -- a blueprint for all the related components
// -- their specific implementation
// -- a blue print for the relevant factories
// -- their specific implementation
// -- structuring of application class -- we initialze it with a factory, and then define abstraction -- calling all the nested function

//comparison to standard Factory Method
//there i think we had a single interface -- or blueprint of what we wanted to do and the implementation classes were different
//then we had an abstract creator -- now what is that? nothing it would just instantiate these inner implementation class
//and then a wrapper function where we call these internal implementation. -- a consistent call

//i think the only difference that i see between the two is the 2 layer of abstraction in abstract factory, where multiple entities are grouped, into a particular factory, which is then chosen by the application
//in contrast the standard factory was more like providing consistent functional flow by using a standard blueprint
//although it begs the question in standard factory -- why not use the implementation itself with a common interface. what's the point of having an abstract creator class which in a way calls that function only
//what is the benefit im getting?
//allows for a more flexible implementation because say if something required something more complex then the standard interface we have defined -- well then we would have a problem
//but then we can do the same otherwise as well. Hmmmmm i don't know why we do that pattern?? why not just create mini class of a comman pattern and then call the function defined by the interface







