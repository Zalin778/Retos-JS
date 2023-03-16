function calcularPromedio(){
    //Personas
    let proRoberto = 2;
    let Roberto = ["Nombre: Roberto", proRoberto, "Sexo: M"];
    let proCarlos = 4;
    let Carlos = ["Nombre: Carlos", proCarlos, "Sexo: M"];
    let proKaren = 4.92;
    let Karen = ["Nombre: Karen", "Promedio: ", proKaren, "Sexo: F",];

    //Estado

    if (proRoberto || proCarlos || proKaren <= 1.5 & 3){
        console.log("FP");
    } else{
        console.log("nel");
    }

}

calcularPromedio();