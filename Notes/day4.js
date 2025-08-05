//arrayyy
//let number = [1,2,"three",true];
//let names=new Array("jhon","james");
//console.log(number[2]);
//console.log(names.length);
//filter()- it filtered teh result arguments
//let number=[1,2,3,4,5];
//let result=number.filter(number=>number[0]);
//console.log(result);
//slice- delete the element based on index value
//let number=[1,2,3,4,5];
//let r=number.slice(1,3);
//console.log(r)
//splice-changes the original array by adding/removing items at a specific index.
//let number=[1,2,3,4,5];
//number.splice(1,4,"hai");
//console.log(number)
//object
/*let details={
    name:"js",
    totalmark:"90",
    //nested obj
    subject:{
        dbms:"98",
        java:"99"
    },
    avg:function(){
        let sum=parseInt(this.subject.dbms)+parseInt(this.subject.java);
        return sum;
    }
}
console.log(details.totalmark)
console.log(details["name"]);
console.log(details.subject.dbms);
console.log(details.subject.java);
console.log(details.avg());
const person={
    name:"Asha",
    age:21,
    city:"Chennai"
};
const {name,age,city}=person;
console.log(name);
console.log(age);
console.log(city);*/
const person=["jhon",22,"softwaredeveloper"];
const[name,age,designation]=person;
console.log(name+" "+age+" "+designation);
