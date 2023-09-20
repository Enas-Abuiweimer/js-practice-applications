const reviews= [
    {
       id: 1,
       name: "lutfi",
       text: "I am lutfi" ,
    },

    {
        id: 2,
        name: "Fathi",
        text: "I am Fathi" ,
     },

     {
        id: 3,
        name: "rushdi",
        text: "I am there freind" ,
     }
]
const author = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
   showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews [person];
    author.textContent = item.name;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1 ){
        currentItem= 0;
    }
    showPerson(currentItem);

});
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0 ){
        currentItem =reviews.length -1
    }
    showPerson(currentItem);
})
randomBtn.addEventListener('click' , function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})