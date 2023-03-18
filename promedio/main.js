//Función anonima para evitar que la pagina se recague
const evento = (event) => {
    event.preventDefault();
}

//Variables

var estudiante = [];
var promedioMayor = 0;
var promedioMenor = 0;
var promedioMasculino = 0;
var promedioFemenino = 0;
var countMasculino = 0;
var countFemenino = 0;
var acumFemenino;
var fp = 0;
var fpp = 0;
var n = 0;
var d = 0;


//Función para agregar estudiantes
function agregarEstudiantes() {
    var nombre = document.getElementById("nombre").value;
    var promedio = parseFloat(document.getElementById("promedio").value);
    var sexo = document.getElementById("sexo").value;

    //Se crea estudiante para agregarlo al arreglo
    var estudiantes = {
        nombre: nombre,
        promedio: promedio,
        sexo: sexo
    };
    estudiante.push(estudiantes);

    for (i=0; i < estudiante.length; i++){
        for (j=0; j < estudiante.length; j++){
        };
    };

    var p = document.getElementById("estudiantes").innerText = estudiantes;
    console.log(p);


    //Validar el puntaje
    if (promedio >= 1.5 && promedio < 3){
        promedioMayor = promedio;
        document.getElementById("promedioMayor").innerText = promedioMayor;
    }

    if (promedio >= 3 && promedio < 3.25){
        promedioMenor == promedio;
        document.getElementById("promedioMenor").innerText = promedioMenor;
    }

    if (sexo == "M"){
        promedioMasculino += promedio;
        countMasculino ++;
        document.getElementById("promedioMasculino").innerText = promedioMasculino;
    }

    else if (sexo == "F"){
        promedioFemenino += promedio;
        countFemenino ++;
        acumFemenino = promedioFemenino / countFemenino;
        document.getElementById("promedioFemenino").innerHTML = promedioFemenino;
    }

    //Validar estudiantes

    if (estudiantes == 1.5){
        fp = estudiantes;
        document.getElementById("pp").innerText = fp;
    }

    //Actualizar formulario
    document.getElementById("nombre").value = "";
    document.getElementById("promedio").value = "";
    document.getElementById("sexo").value = "";

    console.log(estudiantes);

};
 agregarEstudiantes
