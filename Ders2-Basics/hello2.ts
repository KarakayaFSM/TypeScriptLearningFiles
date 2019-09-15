function add(a:number, b:number):number{
    return a+b
}
//template literals for string concatenation ( ` : Altgr + , + any char)
console.log(`The result is : ${add(1,2)}`)


//optional argument c?. Must be at the end
//implicit function type (type is determined by the return)
function addV2(a:number, b:number,c?:number){
    return a+b
}
addV2(1,2,3)

//default arguments 
//explicit function type
function addV3(a:number,b:number,c = 0):number{
    return a+b+c
}
addV3(1,2) + /*Or*/ addV3(1,2,3)

//implicit typing only works on the same line where assignment is made

//variable with type any
var a:any

//these are valid with any type
a = 10
a = true
a = ""

//Union types (limited any)
var b:number|boolean
b = 5
b = true