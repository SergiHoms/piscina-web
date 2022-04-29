let number = document.getElementById("numbers");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");

plus.addEventListener("click", () => {
    number.value = (parseInt(number.value) + 1);

});


minus.addEventListener("click", () => {
    if(number.value > 1) {
        number.value = (parseInt(number.value) - 1);
    }
});

let buttons = document.querySelectorAll(".tab-button")
let display = document.querySelectorAll(".tab-display")


    if(buttons) {

        buttons.forEach(button => { 

            button.addEventListener("click", () => {

                buttons.forEach(button => {
                    button.classList.remove("active");
                });

                button.classList.add("active");
                display.classList.add("active");
            });
        });
    } 
    
