export let renderSelects = () =>{

    let selectsRelated = document.querySelectorAll('.select-related');

    selectsRelated.forEach(selectRelated => {
    
        selectRelated.addEventListener("change", () => {
    
            let selectRelatedOptions = selectRelated.closest('.form-element').querySelectorAll('.select-related-options');
    
            selectRelatedOptions.forEach(selectRelatedOption => {
            
                if(selectRelated.value == selectRelatedOption.dataset.related){
                    selectRelatedOption.classList.add('active');
                }else{
                    selectRelatedOption.classList.remove('active');
                }
            });
        });
    });
}