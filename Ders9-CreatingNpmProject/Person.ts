//creating an npm projects lets us manage dependencies
//lets use a library called lodash
import * as _ from 'lodash'

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




