const button=document.querySelector("#btn-1");
const headding=document.querySelector("h1");
const card=document.querySelector(".card");
button.addEventListener("click",()=>{
    card.classList.toggle("cardrotate");
    document.body.classList.toggle('dark');
    headding.classList.toggle("yellow");
});