const todo = (title,id) =>{
  let todoStatus=false;
  let todoTitle=title;
  let todoId= 0;

  const setTitle = (newTitle) => {
    todoTitle=newTitle;
  }

  const getTitle = () => {
    return todoTitle;
  }

  const changeStatus = () => {
    todoStatus = !todoStatus;
  }

  const getStatus = () => {
    return todoStatus;
  }

  return{setTitle,getTitle,getStatus,changeStatus};

}

const todoDay = (dayName) => {
  let todos=[];
  let day = dayName;

  const setDay = (newDay) => {
    dayName=newDay;
  }

  const getDay = () => {
    return dayName;
  }

  const addTodo = (todo) => {
    todos.push(todo);
  }
  const removeTodo = (todoID) => {
    for(let i = 0; i < todos.length();i++){
      if(todos[i].getID()== todoID){
        todos.splice(i,1);
      }
    }
  }

  return {setDay,getDay,addTodo,removeTodo};

}

const todoWeek = (weekName) => {
  let week=weekName;
  let days=[];
  const addDay = () =>{
    days.push(day);
  }
  // This function finds the specific day based on the name of the day
  const removeDay = (dayName) =>{
    //comparison function to find the correct day
    const isCorrectDay = (day) => day.getDay()==dayName;
    //index of the day
    let index=days.findIndex(isCorrectDay);
    if(index==-1){
      return
    }
    splice(index-1,1);
  }
  return {removeDay,addDay};
}

export {todoDay,todoWeek,todo};
