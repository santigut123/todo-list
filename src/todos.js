const todo = (title,status,id) =>{
  let todoStatus=status;
  let todoTitle=title;
  let todoId= 0;

  const setTitle = (newTitle) => {
    todoTitle=newTitle;
  }

  const getTitle = () => {
    return todoTitle;
  }

  const setStatus = (newStatus) => {
    todoStatus = newStatus;
  }

  const getStatus = () => {
    return todoStatus;
  }

}

const todoDay = (day) => {
  let todos=[];
  let dayName=day;

  const setDay = (newDay) = {
    dayName=newDay;
  }

  const getDay = () = {
    return dayName;
  }

  const addTodo = (todo) = {
    todos.push(todo);
  }
  const removeTodo = (todoID) = {
    for(let i = 0; i < todos.length();i++){
      if(todos[i].getID()== todoID){
        todos.splice(i,1);
      }
    }
  }

}

const todoWeek = ()
