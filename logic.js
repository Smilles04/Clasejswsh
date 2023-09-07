const in_name = document.querySelector ("#in_name");
const btn_enviar = document.getElementById("btn_enviar");
const lista_tareas = document.getElementById("lista_tareas");

var numAdivinar = generarNum(5);

function generarNum(numMax){
    return parseInt (Math.random() * numMax);
}

btn_enviar.addEventListener("click", () => {
    console.log(numAdivinar);
    ///lista_tareas.innerHTML = lista_tareas.innerHTML + "<br>" + sin_name.value;
   ///alert(in_name.value);
   if(numAdivinar > in_name.value){
    alert("El Numero a Adivinar es mayor!, vuelve a intentar");

   }else if (numAdivinar < in_name.value){
    alert("el numero es menor, vuelve a intentar");
   }else{
    alert("El Numero es correto, Ganaste.!")
    numAdivinar = generarNum(10);
   }
    
} );

