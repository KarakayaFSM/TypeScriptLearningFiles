class Person{
    
    constructor(private firstName:string,private lastName:string){}
    
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

class Testreadonly{

    //readonly member variables with auto init.
    //access modifiers are necessary for auto init. to work
    constructor(readonly name:string,readonly id:number){
        
    }
    
}

var t = new Testreadonly("",5)

