import { Task } from "./task.js";
import { User } from './user.js';

const task = new Task('This is my first import');
const person = new User(task);

console.log(task);
console.log(person);
person.do()

