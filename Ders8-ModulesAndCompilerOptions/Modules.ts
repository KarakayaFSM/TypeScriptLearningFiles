//if we need to access a class
//which is declared in another file
//we put export at the beginning of the definition
// "../" means look for parent folder (step up one level) 
import {Person} from '../Ders7-Generics/Generics'

//this works because of the import statement above
var person = new Person("ahmad","ak")

//Hovewer, this operation not only gives access to the file content
//but it also executes that file

//We have to keep that in mind while using import
//statements in TypeScript

