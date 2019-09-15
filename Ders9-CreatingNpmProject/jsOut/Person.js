"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//creating an npm projects lets us manage dependencies
//lets use a library called lodash
var _ = __importStar(require("lodash"));
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        console.log("firstName: " + this.firstName + "\n lastName: " + this.lastName);
    };
    Object.defineProperty(Person.prototype, "getFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setFirstName", {
        set: function (firstname) {
            this.firstName = firstname;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
var arr = [1, 2, 3];
var x = 5;
console.log(_.reverse(arr));
