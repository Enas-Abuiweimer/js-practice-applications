const btn = document.querySelector(".btn");
const container = document.querySelector("section");
btn.addEventListener('click',function(){
    container.classList.toggle('dark');
})