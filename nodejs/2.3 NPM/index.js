// var generateName = require("sillyname");

import generateName from "sillyname"
var sillyName = generateName();

console.log("My name is "+sillyName);

// import superheroes from 'superheroes';
// const name = superheroes;
// console.log("I am your "+name);

import {randomSuperhero} from 'superheroes';

const name2 = randomSuperhero();
console.log("My unique name "+name2);