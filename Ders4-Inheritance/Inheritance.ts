class Person{
    firstName:string = ""
    lastName:string = ""

    Introduce(){
        console.log("Ben bir Gişiyim")
    }
}

class Programmer extends Person{
    Introduce(){
        console.log("Ben bir Programcı Gişiyim")
    }

    IntroduceNormal(){
        super.Introduce() //call the parents method
    }
}

// var person = new Person()
// person.Introduce()

// var programmer = new Programmer()
// programmer.Introduce()

//uses parents Introduce method with super keyword
var programmer = new Programmer()
programmer.IntroduceNormal()

//this obj. can only access to the Person's variables and methods
//loses programmer specific data because of :Person  
var programmer2 :Person = new Programmer()




