let listaTareas =document.getElementById('tareas');
let nueva=document.getElementById('nuevaTarea')
let img=document.getElementById('nuevaTarea')

let tareas=[
{nombre: "Tarea de matematica", completada: false, tiempoInicio: new Date().getTime(), tiempoFin: null },
{nombre:"Tarea de lengua", completada:true, tiempoInicio: new Date().getTime(), tiempoFin: new Date().getTime()},
{nombre:"Tarea de Ingles", completada:true, tiempoInicio: new Date(2024, 3, 27, 11, 0), tiempoFin: new Date(2024, 3, 27, 11, 45) },
{nombre:"Tarea de Efsi", completada:false, tiempoInicio: new Date().getTime(), tiempoFin: null },
{nombre:"Tarea de quimica", completada:false, tiempoInicio: new Date().getTime(), tiempoFin: null }
]

function mostrarTareas(){
    let html =""
    tareas.forEach((n,index) => {
        if (n.completada==true) {
            html += `<li onclick="tacharTarea(${index})" style="text-decoration: line-through;">${n.nombre} <button onclick="eliminarTarea(${index})"><img src="https://cdn-icons-png.flaticon.com/512/1214/1214594.png" height="20px"></img></button></li>`;
            
        } else {
            html += `<li><button onclick="tacharTarea(${index})">${n.nombre}</button><button onclick="eliminarTarea(${index})"><img src="https://cdn-icons-png.flaticon.com/512/1214/1214594.png"  height="20px"></img></button></li>`;
        }
    });
listaTareas.innerHTML=html
}
mostrarTareas()
 function tacharTarea(i){
    if(tareas[i].completada==true){
        tareas[i].completada=false;
        tareas.tiempoInicio=null
    }else{
        tareas[i].completada=true;
        tareas[i].tiempoFin=new Date().getTime()
    } 
    console.log("hika")
    mostrarTareas()
}

document.getElementById("agregar").onclick =()=>{
    if(nueva.value.length > 0){
        tareas.push({nombre:nueva.value, completada:false, tiempoInicio: new Date().getTime, tiempoFin: null})
        mostrarTareas()   
        console.log(tareas)
        
    }else alert('ingrese una tarea')

}

function eliminarTarea(i){
tareas.splice(i,1)
mostrarTareas();
}

function tareaMasRapida() {
    let tareaMasRapida = null;
    let tiempoMasRapido = Infinity;
    
    tareas.forEach(tarea => {
        if (tarea.completada && tarea.tiempoInicio && tarea.tiempoFin) {
            const tiempoTomado = tarea.tiempoFin - tarea.tiempoInicio;
            if (tiempoTomado < tiempoMasRapido) {
                tiempoMasRapido = tiempoTomado;
                tareaMasRapida = tarea;
            }
        }
    });
    return tareaMasRapida;
}

// Event listener para el botón "Tarea realizada más rápido"
document.getElementById("tiempo").onclick = () => {
    const tarea = tareaMasRapida();
    if (tarea) {
        console.log(`La tarea más rápida realizada es "${tarea.nombre}" que tomó ${tarea.tiempoFin- tarea.tiempoInicio} milisegundos.`);
    } else {
        console.log("No hay tareas completadas para calcular la más rápida.");
    }
};