interface Person{
    firstName:string
    lastName:string
    getFullName():string
}

class Foo implements Person{

    //Interface implementation with auto initialization (or at least I call it that way)
    //access modifiers needed for auto init.
    constructor(public firstName:string,public lastName:string){}

    getFullName() {
        return this.firstName + " " + this.lastName
    }
}


//this works because Foo implements Person Interface
var adam : Person = new Foo("ahmet","bak")
console.log(adam.getFullName())

//Duck Typing:
//This Object looks so similar to Person interface
let someObj = {
    firstName: "Test",
    lastName: "Test",
    foo: "foo",
    getFullName: () => "Test"
};

//since the objects are identically similar
//they can be assigned to eachother but 
//they have to share same properties
adam = someObj

