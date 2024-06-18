# Exercise_Javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./index.js"></script>
</head>
<body>
    <input type="text" id="inputText">
    <button onclick="">Submit</button>
    <script>
        let name ="edison";
    </script>
</body>
</html>
![image](https://github.com/EdisonAuquilla/Exercise_Javascript/assets/169932459/45490c9d-708b-404d-9cb6-4ee2cf81da73)

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
    ![image](https://github.com/EdisonAuquilla/Exercise_Javascript/assets/169932459/c675444c-b6bb-40ff-92f9-12da45af8a5b)
