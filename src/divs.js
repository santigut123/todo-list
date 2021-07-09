const setId = (item,id) => {
  item.setAttribute("id",id);
}

const setContents = (item,contents) =>{
  item.textContent=contents;
}

const setClass = (item,theClass) => {
  item.setAttribute("class",theClass);
}

const fillheader = (header) => {
  let contentHeader = document.createElement("div");
  setId(todoHeader, "todoHeader")
  setId(contentHeader,"contentHeader");
  setContents(todoHeader,"TODOS");
  setContents(contentHeader,"CONTENTS");
  setClass(todoHeader,"headers");
  setClass(contentHeader,"headers");
  header.appendChild(todoHeader);
  header.appendChild(contentHeader);

}
const makeHeader = (headerID,headerContents) =>{
  let header = document.createElement("div");
  setClass(header,"header");
  setId(header,headerID);
  setContents(header,headerContents)
  return header;
}

const makeAddButton = () =>{
  let addButton=document.createElement("div");
  setId(addButton,"addButton");
  setContents(addButton,"+");
  addButton.addEventListener("click",addButtonPress);
  return addButton;
}

const addButtonPress = () =>{
  let modal = document.querySelector("#modalBg");
  modal.style.visibility="visible";
}

const submitButtonPress = () =>{
  let modal = document.querySelector("#modalBg");
  modal.style.visibility="hidden";
}

const makeSectionHolder = () =>{
  let sectionHolderDiv=document.createElement("div")
  setId(sectionHolderDiv,"sectionHolder");

  return sectionHolderDiv;
}

const makeInfoSectionDiv = () =>{

  let infoSectionDiv = document.createElement("div");
  setId(infoSectionDiv, "infoSection");
  let infoHeader=makeHeader("infoHeader","CONTENTS");
  infoSectionDiv.appendChild(infoHeader);

  return infoSectionDiv;
}

const makeTodoSectionDiv = () =>{

  let todoSectionDiv = document.createElement("div");
  setId(todoSectionDiv,"todoSection");
  let todoHeader= makeHeader("todoHeader","TODOS");
  todoSectionDiv.appendChild(todoHeader);

  return todoSectionDiv;
}

const makeSubmitButtonDiv = () => {
  let submitButton = document.createElement("div");
  setId(submitButton,"#submitButton");
  submitButton.addEventListener("click",submitButtonPress);
  return submitButton;
}
const addSubmitButtonTodo = () => {
  let todoSectionDiv = document.querySelector("#todoSection");
  todoSectionDiv.appendChild(makeSubmitButtonDiv());
}
const makePage = () => {
  let content = document.querySelector("#content");
  let sectionHolderDiv= makeSectionHolder();
  sectionHolderDiv.appendChild(makeTodoSectionDiv());
  sectionHolderDiv.appendChild(makeInfoSectionDiv());
  content.appendChild(sectionHolderDiv);
}
export default makePage;
