//Semicolons are not mandatory in TypeScript !
var x: number = 5
console.log(x)

//Simple typed variable declarations
var y: number = 5
var z: number = 10
console.log(y+z)

//arrow function
var fun = () => "merhaba"

//An array of numbers
var anArrayOfNumbers:number[]
anArrayOfNumbers = [1,2]

// ! is the non null assertion operator
//which will tell the compiler that the value returned by pop()
//will always be non null since the statement is inside 
//the loop meaning that there is at least one number in the array.
while(anArrayOfNumbers.length){
    x = anArrayOfNumbers.pop() !; //without !, this line raises a casting error (pop() can be undefined)
}

// A tuple with different types
//given arg. size has to match
var myTuple: [string,number] = ["",2]
