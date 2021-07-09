import makePage from './divs';
import testTodos from './testTodo';
import { todo } from './todos';
import { contents } from './todoVisuals'
makePage();
testTodos();
let testTodo= todo("Test","This is a test to see how to format the contents of the todo-list correctly.");
let contentsTest= contents();
contentsTest.displayTodo(testTodo);
