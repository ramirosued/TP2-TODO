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
let html =""
/*tareas.forEach(n=> {
   
html += `<li>${n.nombre}</li>`;

  actualizarListaTareas();
}
)*/
    tareas.forEach(n => {
        if (n.completada==true) {
            html += `<li style="text-decoration: line-through;">${n.nombre}</li>`;
        } else {
            html += `<li><button id="boton">${n.nombre}</button></li>`;
        }
    });
listaTareas.innerHTML=html

listaTareas.onclick = function(){
     tareas[3].completada=true
     html=""
    console.log("hika")
    tareas.forEach(n => {
        if (n.completada==true) {
            html += `<li style="text-decoration: line-through;">${n.nombre}</li>`;
        } else {
            html += `<li><button id="boton">${n.nombre}</button></li>`;
        }
    })
    listaTareas.innerHTML=html

}

/*
let elementosTareas = listaTareas.querySelectorAll('li');
    elementosTareas.forEach((elemento, index) => {
        elemento.onclick = function() {
            marcarComoCompletada(index);
        };  
    });
    function marcarComoCompletada(index) {
        tareas.completada = true;
        tareas.forEach(n => {
            if (n.completada==true) {
                html += `<li style="text-decoration: line-through;">${n.nombre}</li>`;
            } else {
                html += `<li><button>${n.nombre}</button></li>`;
            }
        });}

*/
console.log(tareas)

document.getElementById("agregar").onclick =()=>{
    if(nueva.value.length > 0){
        tareas.push({nombre:nueva.value, completada:false })
        html +=`<li><button>${nueva.value}</button></li>`;
        listaTareas.innerHTML=html
        console.log(tareas)
        
    }else alert('ingrese una tarea')

}

function establecerHecho() {
    hecho = true;
    console.log("La variable 'hecho' se ha establecido como true.");
}