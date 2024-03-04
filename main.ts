
// TypeScript

// Learn TypeScript in 50 Minutes - Tutorial for Beginners-https://www.youtube.com/watch?v=WBPrJSw7yQA

/* This typescript file main.ts is manually created and written but main.js is generated by 
compiling main.ts file in terminal by using command tsc main.ts and then runned the program
by using command node main.js in terminal */

let message = "Hello World";
console.log(message);

let x=10;
const y=20;

// In Below we re-declared x but it's not allowed and shows as an error
//let x=100

// const should be initialised with value otherwise it shows an error
const title='TypeScript'

// let will allowed both initialised or without initialisation
let sum;
let sums=100

// We can allowed write datatype with variable and below are examples
let isBeginned:boolean=true;
let total:number=0;
let names:string="Koodalarasan";
let sentence:string=`My name is ${names}, I am beginner to learn TypeScript`;
console.log(sentence)

// Below two are syntaxes to declare/initialise an array with same datatype values
let list1:number[] = [1,2,3]
let list2:Array<number> = [1,2,3]

//Below syntax to declare an array with different datatypes values
let person1:[string,number] =["Koodal",1998] // Must write values respectively with datatypes written

// enum type
enum Color{Red,Green,SkyBlue};
let c:Color=Color.Green;
console.log(c);  // output will be 1 because of place of Green is 1

enum persons{Tom=5,Jerry,Spike};
let charcter:persons=persons.Jerry
console.log(charcter)  // output will be 6 because of we declared place of tom as 5 and so it is.

// We can "any" type if we didn't know data type of some value or in it
let randomValue:any=10
randomValue=true
randomValue='Codevolution'  //it didn't raised  any error by using same variable again because of "any" type used here.

// Below statements are correct
let a;
a=10;
a=true;

// But Below statement b=true are not correct because we already initialised with value 20.
let b=20;
// b=true  // By removing comment we can saw error line in b

// we can also assign multi data types for single variable like below
let multi:number|boolean;
multi=20;
multi=true;

// function
function add(num1:number,num2?:number) // ? means optional,we use(pass) or not use(pass) num2 parameter
{
    if(num2)
        return  num1+num2;
    else
        return num1;
}
add(5,10)
add(5)

function add2(num3:number,num4:number=10) // we can also initialise value within function
{
    if(num4)
        return  num3+num4;
    else
        return num3;
}
add2(5,10)
add2(5)


// Interface
interface Person{
    firstName:string;
    lastName?:string;
}

function fullName(person:Person)  // function fullName(person:{firstName:string,lastName:string})
{
    console.log(`${person.firstName} ${person.lastName}`);
}

let p={
    firstName:'Bruce',
    lastName:'Wayne'
};

fullName(p);

// class & Access Modifiers
class Employee{
    public employeeName:string;

    constructor(name:string)
    {
        this.employeeName=name;
    }
    
    greet()
    {
        console.log(`Good Morning ${this.employeeName}`);
    }

}
let emp1=new Employee("Vishwas");
console.log(emp1.employeeName);
emp1.greet();


// Inheritance
class Manager extends Employee{
    
    constructor(managerName:string){
        super(managerName)
    }
    delegateWork(){
        console.log("Manager delegating tasks");
    }

}
let m1=new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName)

