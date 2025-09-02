let currentTime=new Date();
console.log(currentTime);
let hours=currentTime.getHours();
console.log(hours);
let minutes=currentTime.getMinutes();
console.log(minutes);
let day=currentTime.getDay();
console.log(day);
let year=currentTime.getFullYear();
console.log(year);
let local=currentTime.toString();
console.log(local);


class Exam{
    constructor(personname){
        this.personname=personname;
        console.log(personname);
    }
}
let result=new Exam("Sashh");


class Bank{
    constructor(initialamount){
        this._balance=initialamount;
    }
    get balance(){
        return this._balance;
    }
    set balance(amountdeposited){
        if(amountdeposited>0){
            this._balance+=amountdeposited;
        }
    }
}
let add=new Bank(10);
console.log(add);
add.balance=300;
console.log(add);
console.log(add.balance);

class Addition{
    static Math(a,b){
        return a+b;
    }
}
console.log(Addition.Math(4,4));
