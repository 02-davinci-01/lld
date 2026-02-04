//making a base class for payment

interface Payment {
    processPayment(amount:number):void;
}

class PaypalPayment implements Payment{
    processPayment(amount: number): void {
        console.log('I am using Paypal payment');   
    }           
}       

//creating object
const obj1= new PaypalPayment();

console.log(obj1.processPayment(5));