const generateBtn = document.querySelector(".btn");
let value = document.getElementById("amount");
const paragraphes = [
    "hi" , "enas" , "saja" , "afaf", "khaled", "Anas" , "Ahmed" , "Ayman", "Mohammed", "sereen", "fatima"
];
const myArray = [];

generateBtn.addEventListener('click', function(event){
    event.preventDefault();
    
    myArray.length = parseInt(value.value);
    for(i=0 ; i < myArray.length ; i++){
        const randomNumber = getRandomNumber();
        myArray[i] = paragraphes[randomNumber];
    }
    console.log(myArray);

    myArray.forEach((p) => {
        console.log(p);
        document.querySelector('.lorem-text').innerHTML += `<p>${p}</p>`;
    }) //printing the elements to the screen not the console.
    
});

function getRandomNumber() {
    return Math.floor(Math.random() * paragraphes.length);
};


