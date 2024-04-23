'use strict'

export {User}

class User{
    constructor(task){
        this.task = task;
    }

    do(){
        this.task.run()
    }
}
