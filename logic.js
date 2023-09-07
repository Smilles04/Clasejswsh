const in_name = document.querySelector ("#in_name");
const btn_enviar = document.getElementById("btn_enviar");
const lista_tareas = document.getElementById("lista_tareas");

var numAdivinar = 10;

btn_enviar.addEventListener("click", () => {
    ///lista_tareas.innerHTML = lista_tareas.innerHTML + "<br>" + sin_name.value;
   ///alert(in_name.value);
   if(numAdivinar > in_name.value){
    alert("El Numero a Adivinar es mayor!, vuelve a intentar");

   }else if (numAdivinar < in_name.value){
    alert("el numero es menor, vuelve a intentar");
   }else{
    alert("El Numero es correto, Ganaste.!")
   }
    
} );

