'use strict'

//Объект из предыдущего модуля 15.

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
  
  
  // Управление this 16.9
  
  const newTask = {
    tasks : [
      {
        id : 1,
        name : 'zadacha',
        description : 'opisanie zadachi',
        order : 0
      }
    ],
    addTask(id, name, description, order) {
      if(this.tasks.find(elem => elem['id'] === id)){
        return console.log('Задача с таким id уже существует')
      }
      const task = {
        id,
        name,
        description,
        order
      };
      this.tasks.push(task)
    },
    refreshNameAndOrderById(id, name , order ){
      const element = this.tasks.find(elem => elem['id'] === id)    
      element.name = name ?? element.name;
      element.order = order ?? element.order;
      
    },
    sortByOrder(){
      this.tasks.sort((a,b) => {
        return  a.order - b.order;
      })
  
    }
  }
  
  newTask.deleteTaskById = toDoList.deleteTaskById;