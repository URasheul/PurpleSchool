(function () {
    'use strict';

    class Task{
        constructor(message){
            this.message = message;
        }
        run(){
            console.log(this.message);
        }
    }

    class User{
        constructor(task){
            this.task = task;
        }

        do(){
            this.task.run();
        }
    }

    const task = new Task('This is my first import');
    const person = new User(task);

    console.log(task);
    console.log(person);
    person.do();

})();
