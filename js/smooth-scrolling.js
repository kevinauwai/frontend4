document.addEventListener("DOMContentLoaded",()=>{
    const header=document.querySelector("header");
    function toggleHeaderTransparency(){
        if(window.scrollY>0){
            header.classList.add("transparent");
        }else{
            // header.style.display="block";
            header.classList.remove("transparent");
        }
    }
    window.addEventListener("scroll",toggleHeaderTransparency);
    // window.addEventListener("scrollend",()=>{header.style.display="none"})
})