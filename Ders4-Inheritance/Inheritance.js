"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = "";
        this.lastName = "";
    }
    Person.prototype.Introduce = function () {
        console.log("Ben bir Gişiyim");
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.Introduce = function () {
        console.log("Ben bir Programcı Gişiyim");
    };
    Programmer.prototype.IntroduceNormal = function () {
        _super.prototype.Introduce.call(this);
    };
    return Programmer;
}(Person));
// var person = new Person()
// person.Introduce()
var programmer = new Programmer();
programmer.IntroduceNormal();
