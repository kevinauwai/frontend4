// js update css
const text=document.querySelector("header");
const itemList=document.querySelector("#item-list");
const items=itemList.querySelectorAll("li");
function run(){
    // method 1 : add css class to the element
    //text.className="card dark";
    text.classList.add("card","text-red");
    // method 2 : add css classes  into classList - DOMTokenList
    itemList.classList.add("card","text-red");
    // method 3:  remove css class
    text.classList.remove("text-red");
    // classlist function :replace css class
    text.classList.replace("card","text-red");
    // toggle function to keep the css state value
    text.classList.toggle("hidden");
    // loop nodelist and update css
    items.forEach((item,index)=>{
        if(index===1){
            item.style.outline="2px solid red";
        }
        
    });
}
document.getElementById("clear").onclick=run;
