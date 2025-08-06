document.addEventListener("DOMContentLoaded",()=>{
    const toggleButton=document.querySelector(".navbar .mobile-menu-toggle");
     const mobilemenu=document.querySelector(".navbar .mobile-menu-items");
     
     toggleButton.addEventListener("click",()=>{
        mobilemenu.classList.toggle("active");
     });
});