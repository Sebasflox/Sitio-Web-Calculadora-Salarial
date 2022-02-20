const DEDICACION_BACHILLER = 0.25, DEDICACION_LICENCIADO = 0.55;

document.querySelector("#agregar").onclick=function(){

    let Salario = document.querySelector("#salario").value;
    let Comisiones = document.querySelector("#comisiones").value;
    let Horasextra = document.querySelector("#horasextra").value;

    let Titulo = document.querySelector("#titulo").value;
    let Dedicación_Bachiller = Salario*DEDICACION_BACHILLER;
    let Dedicación_Licenciado = Salario*DEDICACION_LICENCIADO;
    let Neto = Salario + Comisiones + Horasextra;

    document.querySelector("#tSalario").innerHTML= "Salario ordinario: ¢" + Salario
    document.querySelector("#tComisiones").innerHTML= "Comisiones: ¢" + Comisiones
    document.querySelector("#tHorasExtra").innerHTML= "Monto Horas extra: ¢" + Horasextra
    document.querySelector("#tNeto").innerHTML= "Salarió Neto: ¢" + Neto

    if (Titulo == "tecnico"){
        document.querySelector("#tDedicacion").innerHTML= "Dedicación Exclusiva: ¢" + 0 
    }
    else if (Titulo == "bachiller"){
        document.querySelector("#tDedicacion").innerHTML= "Dedicación Exclusiva: ¢" + Dedicación_Bachiller
    }
    else if (Titulo == "licenciado"){
        document.querySelector("#tDedicacion").innerHTML= "Dedicación Exclusiva: ¢" + Dedicación_Licenciado
    }

}
//Funcion programada para el boton Eliminar, esta funcion deja todos los campos en blanco
document.querySelector("#limpiar").onclick=function() {

    document.querySelector("#nombre").value="";
    document.querySelector("#edad").value="";
    document.querySelector("#titulo").value="";
    salario = document.querySelector("#salario").value="";
    comisiones = document.querySelector("#comisiones").value="";
    horasextra = document.querySelector("#horasextra").value="";

}