"use strict";
// function
exports.__esModule = true;
//1.function with void return type
function addTwoV(a, b) {
    console.log(a + b);
}
addTwoV(1, 2);
//2.function with specific return type -> number
function addTwo(a, b) {
    return a + b;
}
var add = addTwo(1, 2);
//3.Arrow function 
var login = function (us, ps) {
    return "login successfully with ".concat(us, " and ").concat(ps);
};
login("p@gmail.com", "123454");
//4 HigherOrder function -> map
var heros = ["pankaj", "balaji", "ram", "sham"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
