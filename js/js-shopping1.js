let output;
// document.all -HTML Allcollection,different with HTMLCollection
output=document.all;
console.log(output);
//b. document.documentElement - html tags in text form
output=document.documentElement;
console.log(output);
//c. document.head -head tags  in text form
output=document.head;
// d. HTMLCollection of head tags direct child
output=document.head.children;
// e. document other properties
output=document.doctype;
console.log(output);
output=document.domain;
console.log(output);
output=document.URL;
console.log(output);
output=document.characterSet;
console.log(output);
output=document.contentType;
console.log(output);
// f. document.forms
output =document.forms;
console.log(output);
output=document.forms[0];
console.log(output);
output=document.forms[0].id;
output=document.forms[0].action;
output=document.forms[0].method;
console.log(output);
document.forms[0].id="my-form";
output=document.forms[0].id;
console.log(output);
// g.document.links
output=document.links;
console.log(output);
output=document.links;
console.log(output);
output=document.links[0].href="http://www.google.com";
document.links[0].className="btn-link";
document.links[0].id="google1";
output=document.links[0].classList;
console.log(output);
// h. document.images
output =document.images[0].src;
console.log(output);
Array.from(document.forms).forEach((form)=>{
    console.log(form);
});
// =========================================
//select elements
// a. selector by 
const items=document.getElementsByTagName("li");
const listItems=document.querySelectorAll(".item");
listItems[1].style.color="red";
listItems.forEach((listItem,index)=>{
    listItem.style.color="red";
    listItem.style.fontSize="40px";
    listItem.style.fontWeight="bold";
    listItem.style.textDecoration="underline";
    listItem.style.textDecorationColor="green";
   console.log(index);
   if(index==1){
        listItem.remove();
   }
   if(index==0){
    //can't simply modify the nodeList html structure
    //nodeList includes textNode and other Node structures
    listItem.innerHTML=`Milk
    <button class="remove-item btn-link text-red">
                <i class="fa-solid fa-xmark"></i>
            </button>`;
   }
});
// b.select by element class name
// print the 3rd item innerText
const listItem2=document.getElementsByClassName("item");
console.log(listItem2[2].innerText);
//  convert HTMLCollection to array list,loop all items
const listItemsArray=Array.from(listItem2);
listItemsArray.forEach((listItem,index)=>{
    console.log(listItem.innerText);
});
// ==================================================
// c.select by element tag name
const listItem3 =document.getElementsByName("li");
console.log(listItem3);

