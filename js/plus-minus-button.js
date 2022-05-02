export let renderPlusMinusButton = () => {
    
    let number = document.getElementById("numbers");
    let minus = document.getElementsById("minus");
    let plus = document.getElementsById("plus");
    let operations = document.getElementsByClassName(".operation");

    operations.forEach(operation => {
    
        operation.addEventListener("click", () => {
            number.classList.add("active"); 
        });
    });
    
    plus.addEventListener("click", () => {
        number.value = (parseInt(number.value) + 1);
    
    });
    
    minus.addEventListener("click", () => {
        if(number.value > 1) {
            number.value = (parseInt(number.value) - 1);
        }
    });
    
}




