document.addEventListener("DOMContentLoaded",()=>{
    const togglemenu=document.querySelector(".mobile-menu-toggle");
     const mobilemenu=document.querySelector(".nav-menu");
     togglemenu.addEventListener("click",()=>{
        mobilemenu.classList.toggle("active");
     });
});