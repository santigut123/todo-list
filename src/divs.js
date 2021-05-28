function setId(item,id){
  item.setAttribute("id",id);
}
function setContents(item,contents){
  item.textContent=contents;
}
function setClass(item,theClass){
  item.setAttribute("class",theClass);
}
function fillHeader(header){
  setId(header,"header");
  let todoHeader = document.createElement("div");
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
function makePage(content){
  let header=document.createElement("div");
  fillHeader(header);
  content.appendChild(header);




}
export default makePage;
