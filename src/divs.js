function setId(item,id){
  item.setAttribute("id",id);
}

function makePage(content){
  console.log("YAA");

  let header=document.createElement("div");
  setId(header,"header");
  content.appendChild(header);



}
export default makePage;
