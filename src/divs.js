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

const fillTodoDiv = (todoSection) =>{
  setId(todoSection,"todoSection");
  let todoHeader=makeHeader("todoHeader","TODOS");
  todoSection.appendChild(todoHeader);

}

const fillInfoDiv = (infoSection) =>{
  setId(infoSection, "infoSection");
  let infoHeader=makeHeader("infoHeader","CONTENTS");
  infoSection.appendChild(infoHeader);
}
const makeAddButton = () =>{
  let addButton=document.createElement("div");
  setId(addButton,"addButton");
  setContents(addButton,"+");
  return addButton;
}
const makePage = () => {
  let content = document.querySelector("#content");
  let sectionHolder= document.createElement("div");
  setId(sectionHolder,"sectionHolder");
  let todoSectionDiv=document.createElement("div");
  let infoSectionDiv= document.createElement("div");
  fillTodoDiv(todoSectionDiv);
  fillInfoDiv(infoSectionDiv);
  sectionHolder.appendChild(todoSectionDiv);
  sectionHolder.appendChild(infoSectionDiv);
  content.appendChild(sectionHolder);
  todoSectionDiv.appendChild(makeAddButton());

}


export default makePage;
