"use strict";
var bar = /** @class */ (function () {
    //Auto initialization of member variables from parameters
    function bar(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }
    bar.prototype.print = function () {
        console.log("input: " + this.param1 + " " + this.param2);
    };
    return bar;
}());
var Foo = /** @class */ (function () {
    function Foo(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Foo.prototype.getFullName = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    return Foo;
}());
// var bardak = new bar("a","b")
// bardak.print()
var adam = new Foo("ahmet", "bak");
adam.getFullName();
