//Enums
enum DaysOfTheWeek{
    MON=1,TUE,WED,THU,FRI,SAT,SUN
}

let day = DaysOfTheWeek.MON

if(day === DaysOfTheWeek.MON){
    console.log("Go To Work")
}
//Generics    (the last T is not necessary in this context)    
function echo<T>(arg:T):T{
    return arg
}

var a = echo(5)
var b = echo("hey")

//export will be discussed in the next lesson
export class Person{
    
    constructor(public firstName:string,public lastName:string){}
    
    getFullName():void{
        console.log(`firstName: ${this.firstName}\n lastName: ${this.lastName}`)
    }

    get getFirstName(){
        return this.firstName
    }

    set setFirstName(firstname:string){
        this.firstName = firstname
    }
}

class Admin extends Person{

    constructor(public firstName:string,public lastName:string,public id:number=0) {
        super(firstName,lastName);
    }
}

class Manager extends Person{
    
    constructor(public firstName:string,public lastName:string) {
        super(firstName,lastName);
    }
}

var admin = new Admin("asd","fgh",5)
var manager = new Manager("asd","fsnb")

//parameter type restriction
function EchoPerson<T extends Person>(person:T){
    return person
}

//if we had used Person as a parameter instead of T
//we'd lost the child-specific data after assignment
var shouldBeAdmin = EchoPerson(admin)
var shouldBeManager = EchoPerson(manager)