/*let notaMate = document.getElementById("mate");
let notaLengua = document.getElementById("lengua");
let notaEfsi = document.getElementById("efsi");

const calcularPromedio = () => {
    if (!inputsValidos()) {
        alert("ingrese todas las notas");
        return;
    }
    let promedioMaterias = (parseInt(notaMate.value) + parseInt(notaLengua.value) + parseInt(notaEfsi.value)) / 3;
    document.getElementById("resultado").innerText = `El Promedio de materias es: ${promedioMaterias}`
}

document.getElementById("promedio").onclick = calcularPromedio;

const calcularMayorNota = () => {
    if (!inputsValidos()) {
        alert("ingrese todas las notas");
        return;
    }
    let notasMayores = '';
    const mayorNota = Math.max(
        parseInt(notaMate.value),
        parseInt(notaLengua.value),
        parseInt(notaEfsi.value)
    );

    if (parseInt(notaMate.value) === mayorNota) {
        notasMayores += "Matematica, "
    }

    if (parseInt(notaLengua.value) === mayorNota) {
        notasMayores += "Lengua, "
    }

    if (parseInt(notaEfsi.value) === mayorNota) {
        notasMayores += "EFSI"
    }

    document.getElementById("resultado").innerText = `Las materias con mayor nota son: ${notasMayores}`
}

document.getElementById("mayorNota").onclick = calcularMayorNota;


const validarNota = (e) => {
    if (e.target.value > 10  || e.target.value < 1) {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'green';
    }
}

const inputsValidos = () => {
    return notaMate.value.length && notaLengua.value.length && notaEfsi.value.length;
} 

document.getElementById("mate").onkeyup = validarNota;
document.getElementById("lengua").onkeyup = validarNota;
document.getElementById("efsi").onkeyup = validarNota;
*/

let nombres = [
    "Valentina",
    "Matias",
    "Franco",
    10,
    true,
];

console.log(nombres);
console.log(nombres.length);

nombres.push("Juan");

console.log(nombres);

nombres.splice(1, 0, "Juan");
console.log(nombres);

nombres.splice(4, 2);
console.log(nombres);

nombres.pop();
console.log(nombres);

nombres.unshift("Tobias");
console.log(nombres);

nombres.shift();
console.log(nombres);

console.log(nombres[1]);

const personas = [
    "Flecha",
    "Tobias",
    [
        33,
        17
    ],
    "Tobias"
];

console.log(personas[2][1]);

console.log(personas.indexOf("Tobias"));
console.log(personas.indexOf("Juan"));
console.log(personas[2].indexOf(33));

const numeros = [1,2,3,4,5,6,7,8];

const dobles = numeros.map(n => n * 2);
console.log(dobles)

const impares = numeros.filter(n => n % 2);
console.log(impares);

const numeroDos = numeros.find(n => n === 9);
console.log(numeroDos);

const pares = [2,4,6,8];

const sonTodosPares = pares.every(n => n % 2 === 0);
console.log(sonTodosPares);

const hayAlgunImpar = pares.some(n => n % 2 !== 0);
console.log(hayAlgunImpar);


let perroFlecha = {
  nombre: 'Sifon',
  edad: 3,
  color: 'Marron',
  vacunado: true,
  peso: 24,
  hermanitos: [{
    nombre: 'Roco'
  },{
    nombre: 'Alfonso'
  }]
};

console.log(perroFlecha.nombre);

let mascotas = [perroFlecha, {
    nombre: 'Tobi',
    edad: 5,
    vacunado: false
}];

console.log(mascotas);

console.log("Las mascotas vacunadas", mascotas.filter(m => m.vacunado));
console.log("Estan todas vacunadas", mascotas.every(m => m.vacunado));

mascotas.push({
    nombre: 'Roqui',
    edad: 15,
    vacunado: false,
});

console.log(mascotas);

let planDeVacunacion = mascotas.map(m => ({
        ...m,
        vacunado: true
}));

console.log(planDeVacunacion);

console.log("Estan todas vacunadas", planDeVacunacion.every(m => m.vacunado));

mascotas.forEach(m => m.vacunado = true);

console.log(mascotas);
