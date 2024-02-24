'use strict'

const toDoList = {
    tasks : [
      {
        title : "Помыть машину",
        id : 1,
        priority : 1
      }
    ],
  
    addTask(id, title, priority){
      if(this.tasks.find(elem => elem['id'] === id)){
        return console.log('Задача с таким id уже существует')
      }
      const task = {
        id,
        title,
        priority
      };
      this.tasks.push(task)
  
    },
    deleteTaskById(id){
      this.tasks = this.tasks.filter(elem => {
        return elem['id'] !== id;
      })
  
    },
  
    refreshTitleAndPriorityById(id, title, priority){
      const element = this.tasks.find(elem => elem['id'] === id)    
      element.title = title ?? element.title;
      element.priority = priority ?? element.priority;
      
    },
    sortByPriority(){
      this.tasks.sort((a,b) => {
        return  a.priority - b.priority;
      })
  
    }
    
  }
  