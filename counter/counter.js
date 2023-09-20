let count = 0 ;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); //take any element with the class btn
                                                // you can think of it as if he made an array of these elements
btns.forEach(function (btn) //pass a parameter btn "the element of the array" 
{
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList; //event object , currentTarget is  a proberity just for eventoject  
        if (styles.contains("decrease")){
            count--;
        } else if (styles.contains("increase")){
            count++;
        } else {
            count = 0;
        }
        value.textContent =count;
    })
})
