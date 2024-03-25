let listaTareas =document.getElementById('tareas');
let nueva=document.getElementById('nuevaTarea')
//document.getElementById("boton").onclick = establecerHecho();

let tareas=[
{nombre: "Tarea de matematica", completada: false},
{nombre:"Tarea de lengua", completada:true},
{nombre:"Tarea de Ingles", completada:true},
{nombre:"Tarea de Efsi", completada:false},
{nombre:"Tarea de quimica", completada:false}
]
/*tareas.forEach(n=> {
   
html += `<li>${n.nombre}</li>`;

  actualizarListaTareas();
}
)*/
function mostrarTareas(){
    let html =""
    tareas.forEach((n,index) => {
        if (n.completada==true) {
            html += `<li onclick="tacharTarea(${index})" style="text-decoration: line-through;">${n.nombre}</li>`;
        } else {
            html += `<li><button onclick="tacharTarea(${index})">${n.nombre}</button></li>`;
        }
    });
listaTareas.innerHTML=html
}
mostrarTareas()

 function tacharTarea(i){
    if(tareas[i].completada==true){
        tareas[i].completada=false;
    }else tareas[i].completada=true;
    console.log("hika")
    mostrarTareas()
}


console.log(tareas)

document.getElementById("agregar").onclick =()=>{
    if(nueva.value.length > 0){
        tareas.push({nombre:nueva.value, completada:false })
        mostrarTareas()   
        console.log(tareas)
        
    }else alert('ingrese una tarea')

}

function establecerHecho() {
    hecho = true;
    console.log("La variable 'hecho' se ha establecido como true.");
}