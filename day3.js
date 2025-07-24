//global scope
//let globalVar="I am global";
//function Say(){
//    console.log(globalVar);
//}
//Say();
//console.log(globalVar)


//function scope
//this scope means that the variables are only accessible
//in the function in which they are declared.
//function Say(){
//    let name="javascript"
//    console.log("hi global scope");
//    console.log("within the func:"+name);
//}
//Say()


//block scope
//the block scope of a variable means that the variable is accessible
//within the block that is between the curly braces
//function Voting(age){
//    if(age>=18){
//      const iscloudy="true";
//      var israining="true";
//      console.log("eligible");
//      console.log(iscloudy);
//  }
//  console.log(israining);
//    console.log(iscloudy);
//}
//Voting(18)

//local scope (same as function or block scope depending on context)
//callback function
//A callback function in JavaScript is a function passed as an argument to another function,
//intended to be executed after the completion of a specific operation or at a particular point in time
//function text(){
//    console.log("message");
//}

//function send(callback){
//    console.log("message sent");
//    setInterval(callback,1000);
//}
//send(text);

let count=0;
let Interval=()=>{
    count++;
    console.log(count);
    if(count<5){
        Interval();
    }
}
Interval();

//arbitary function
//any value without restriction,but commonly used in explanation, documentation and coding contexts
