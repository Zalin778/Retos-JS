var estudiante = [];
var promedioMayor = 4;
var promedioMenor = 1.5;
var promedioMasculino = 0;
var promedioFemenino = 0;
var countMasculino = 0;
var countFemenino = 0;
var acumFemenino;

const evento = (event) => {
    event.preventDefault();
}

function agregarEstudiantes() {
    var nombre = document.getElementById("nombre").value;
    var promedio = parseFloat(document.getElementById("promedio").value);
    var sexo = document.getElementById("sexo").value;

    var estudiantes = {
        nombre: nombre,
        promedio: promedio,
        sexo: sexo
    };

    estudiante.push(estudiantes);

    document.getElementById("estudiantes").innerText = estudiante;

    if (promedio >= promedioMayor){
        promedioMayor == promedio;
        document.getElementById("promedioMayor").innerText = promedioMayor;
        console.log("promedio mayor", promedioMayor);
    }

    if (promedio == promedioMenor){
        promedioMenor == promedio;
        document.getElementById("promedioMenor").innerText = promedioMenor;
        console.log("promedio menor", promedioMenor);
    }

    if (sexo == "M"){
        promedioMasculino += promedio;
        countMasculino ++;
        document.getElementById("promedioMasculino").innerText = promedioMasculino;
        console.log("promedio masculino", promedioMasculino);
    }

    else if (sexo == "F"){
        promedioFemenino += promedio;
        countFemenino ++;
        acumFemenino = promedioFemenino / countFemenino;
        document.getElementById("promedioFemenino").innerHTML = promedioFemenino;
        console.log("promedio femenino", promedioFemenino);
    }

    console.log(estudiante);

};
 agregarEstudiantes
