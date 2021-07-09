import todoDay from './todos'
import todoWeek from './todos'
import todo from './todos'

let contents = (contentArray,contentDiv) =>{


  let makeInfoContentDiv=()=>{
    let info = document.createElement("div");
    info.setAttribute("id","infoContent");
    document.querySelector("#infoSection").appendChild(info)

  }
  let findInfoSection = () =>{
    let infoSection = document.querySelector("#infoContent");
    return infoSection;
  }
  let updateInfoSection = (content)=>{
    findInfoSection().appendChild(content);
  }

  let clearInfoSection = () => {
    findInfoSection().innerHTML="";
  }

  let makeTitle = (title) =>{
    let titleDiv =document.createElement("div");
    titleDiv.innerHTML = title;
    titleDiv.setAttribute("id","infoTitle");
    return titleDiv;

  }
  let makeDescription = (description) =>{
    let descriptionDiv = document.createElement("div");
    descriptionDiv.innerHTML=description;
    descriptionDiv.setAttribute("id","infoDescription");
    return descriptionDiv;
  }

  let displayTodo = (thisTodo) =>{
    let title = thisTodo.getTitle();
    let status = thisTodo.getTitle();
    let description = thisTodo.getDescription();
    clearInfoSection();
    updateInfoSection(makeTitle(title));
    updateInfoSection(makeDescription(description));
  }

  let displayDay = (thisDay) => {

  }
  let displayWeek = (thisWeek) =>{

  }
  makeInfoContentDiv();
 return {
   displayTodo
 }

}
export{contents}
