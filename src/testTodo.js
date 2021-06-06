import {todoDay,todoWeek,todo} from './todos';

const testTodos = () => {
  console.log("TATTATAT");
  let testTodo= todo("this is a sample todo",1);
  console.log(testTodo.getTitle());
  console.log(testTodo.setTitle("HEYYY YAAAAA"));
  console.log(testTodo.getTitle());
  console.log(testTodo.changeStatus());
  console.log(testTodo.getStatus());
}
export default testTodos;
