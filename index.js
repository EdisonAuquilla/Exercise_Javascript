function onClickSubmitButton(){
    let inputValue =document.getElementById('inputText').value;
    if (inputValue>0){
        alert('Hey numero es mayor que cero')
    }  
    if (inputValue<0){
        alert('Hey numero es menor que creo')
    }  
    if (inputValue==0){
        alert('Intente otra vez')
    }  
    }