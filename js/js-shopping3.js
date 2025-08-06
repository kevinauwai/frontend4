// nodelist
// querySelector - return static data - snapshot data
// get ElementsByXXX - etu4n dynamic/live data
const parent =document.querySelector(".container");
output=parent.childNodes;
console.log(output);
// include all text nodes
content=output[1].textContent;
console.log(content);
// node type  and name
content=output[1].nodeName;
console.log(content);
content=output[1].nodeType;
console.log(content);
// inspect child node structure
content =output[3].textContent;
// element
content=output[3].outerHTML;
console.log(content);
output[3].textContent="google";
output[3].style.color="red";
// conainer's first child
firstChild=parent.firstChild;
console.log(firstChild);
lastChild=parent.lastChild;
console.log(lastChild);
// from child get parent node
const child =document.querySelector("form");
// same structure : HTML element
parent1=child.parentNode;
parent2=child.parentElement;
console.log(parent1,parent2);

// next sibling
const secondItem=document.querySelector("form div:nth-child(2)");
console.log(secondItem);

// next sibling
nextSibling=secondItem.nextSibling;
console.log(nextSibling);
// previous sibling
previousSibling=secondItem.previousSibling;
console.log(previousSibling);
// previous element sibling
previousElementSibling=secondItem.previousElementSibling;
console.log(previousElementSibling);
