class Person{
    //declaring a member variable
    firstName:string
    lastName:string

    //Multiple constructors are not allowed in TypeScript
    constructor(){
            this.firstName = ""
            this.lastName = ""
    }

        /*Parameterized Constructor */
    // constructor(firstName:string,lastName:string) {        
    //     this.firstName = firstName
    //     this.lastName = lastName
    // }

    //if there is a constructor like the following,
    //this.firstName = firstName... is unnecessary since
    //parameters are implicitly assigned to corresponding variables.  
    
}

//Basic object initialization
var person = new Person()
person.firstName = "Salih"
person.lastName = "Karakaya"