const logo=document.querySelector("img");
logo.addEventListener("click",function(e){
    console.log(e);
    console.log(e.currentTarget);
    console.log(e.target);
});
// target - the element that triggered the event
// currentTarget - the element that is currently handling the event
// type - event type
// timestamp - timestamp of the event triggered
// clientX - x position of the mouse click relative to window
// clientY - Y position of the mouse click relative to window
// offsetX - X position of the  mouse click relative to element
// offsetY - Y position of the mouse click relatige to element
// pageX - x positiohn of the mouse click relative to page
// pageY - y position of the mouse click relative to page
// screenX -X position of the mouse click relative to screen
// screenY -y position of the mouse click relative to screen

// prevent browser default behavior
document.querySelector("a").addEventListener("click",function(e){
e.preventDefault();
console.log("a link was clicked");
});

function onDrag(e){
    document.querySelector("h1").textContent=`X: ${e.clientX} Y:${e.clientY}`;

}
logo.addEventListener("drag",onDrag);

// ================================================================
// keyboard events
const itemInput=document.getElementById("item-input");
const onKeyPress=e=>console.log("keypress");
itemInput.addEventListener("keypress",onKeyPress);
// key up
const onKeyUp=(e)=>console.log("key up");
itemInput.addEventListener("keyup",onKeyUp);

// key down
const onKeyDown=e=>{
    if(e.key==="Enter"){
        e.preventDefault();
        console.log("enter was pressed");
    }
    if(e.code==="Digit1"){
        console.log("you presse 1");
    }
    if(e.repeat){
        console.log("you are holding down "+e.key);
    }
    console.log("Shift:"+e.shiftKey);
    console.log("Control:"+e.ctrlKey);
    console.log("Alt:"+e.altKey);
    if(e.shiftKey&&e.key==="K"){
        console.log("you pressed shift  and k");
    }
}
itemInput.addEventListener("keydown",onKeyDown);

// ==========================================================
// input events
const itemInput2=document.getElementById("item-input");
const priority=document.getElementById("priority-input");
const checkbox=document.getElementById("checkbox");
const heading =document.querySelector("h1");
function onInput(e){
    heading.textContent=e.target.value;
}
itemInput2.addEventListener("input",onInput);

// checkbox
function onChecked(e){
    const isChecked=e.target.checked;
    console.log(isChecked);
    heading.textContent=isChecked?"checked":"not checked"
}
checkbox.addEventListener("input",onChecked);

// select the input field
function onFocus(){
    console.log("Input is focused");
    itemInput2.style.outlineStyle="solid";
    itemInput2.style.outlineColor="red";
    itemInput2.style.outlineWidth="2px";
}
itemInput2.addEventListener("focus",onFocus);

function onBur(){
    console.log("Input is not focuesd");
    itemInput2.style.outlineStyle="none";
}
itemInput2.addEventListener("blur",onBur);
// react style onChange
priority.addEventListener("change",onInput);

// ===========================================================
// form submit
const form =document.getElementById("item-form");
function onSubmit(e){
    e.preventDefault();
    console.log("Form was submited");
    const item=document.getElementById("item-input").value;
    const priority=document.getElementById("priority-input").value;
    if(item===""||priority==="0"){
        alert("Please enter an item and priority");
        return;
    }
    console.log(item,priority);
}

form.addEventListener("submit",onSubmit);

function onSubmit2(e){
    e.preventDefault();
    const formData=new FormData(form);
    const item =formData.get("item");
    const priority=formData.get("priority");
    console.log(item,priority);
    const entries=formData.entries();
    console.log(entries);
    for(const entry of entries){
        console.log(entry[1]);
    }
}
form.addEventListener("submit",onSubmit2);
