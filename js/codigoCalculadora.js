const DEDICACION_BACHILLER = 0.25, DEDICACION_LICENCIADO = 0.55;

const ENFERMEDAD_MATERNIDAD = 0.055, INVALIDEZ_MATERNIDAD = 0.0384, BANCO_POPULAR = 0.01, ASC_SOLIDARISTA = 0.05;

document.querySelector("#agregar").onclick=function(){

    let Salario = document.querySelector("#salario").value;
    let Comisiones = document.querySelector("#comisiones").value;
    let Horasextra = document.querySelector("#horasextra").value;

    let Titulo = document.querySelector("#titulo").value;
    let Dedicación_Bachiller = Salario*DEDICACION_BACHILLER;
    let Dedicación_Licenciado = Salario*DEDICACION_LICENCIADO;

    document.querySelector("#tSalario").innerHTML= "Salario ordinario: ¢" + Salario
    document.querySelector("#tComisiones").innerHTML= "Comisiones: ¢" + Comisiones
    document.querySelector("#tHorasExtra").innerHTML= "Monto Horas extra: ¢" + Horasextra


    if (Titulo == "tecnico"){
        document.querySelector("#tDedicacion").innerHTML= "Dedicación Exclusiva: ¢" + 0
        var Neto = parseInt(Salario) + parseInt(Comisiones) + parseInt(Horasextra);
    }
    else if (Titulo == "bachiller"){
        document.querySelector("#tDedicacion").innerHTML= "Dedicación Exclusiva: ¢" + Dedicación_Bachiller
        var Neto = parseInt(Salario) + parseInt(Comisiones) + parseInt(Horasextra) + parseInt(Dedicación_Bachiller);
    }
    else if (Titulo == "licenciado"){
        document.querySelector("#tDedicacion").innerHTML= "Dedicación Exclusiva: ¢" + Dedicación_Licenciado
        var Neto = parseInt(Salario) + parseInt(Comisiones) + parseInt(Horasextra) + parseInt(Dedicación_Licenciado);
    }
    document.querySelector("#tNeto").innerHTML= "Salarió Neto: ¢" + Neto;

    let IMPUESTO_SALARIO = 0;

    if (Salario > 1199000){
        IMPUESTO_SALARIO = Salario*0.15;
    }
    else if (Salario >= 799000 & Salario <=1199000){
        IMPUESTO_SALARIO = Salario*0.10;
    }

    let EyM = Salario*ENFERMEDAD_MATERNIDAD;
    let IyM = Salario*INVALIDEZ_MATERNIDAD;
    let BP = Salario*BANCO_POPULAR;
    let ASC = Salario*ASC_SOLIDARISTA;

    let Total_Dedu = parseInt(IMPUESTO_SALARIO)+parseInt(EyM)+parseInt(IyM)+parseInt(BP)+parseInt(ASC);

    document.querySelector("#tImpuesto").innerHTML= "Impuesto del salario: ¢" + IMPUESTO_SALARIO;
    document.querySelector("#tEnfermedad").innerHTML= "Enfermedad y maternidad: ¢" + EyM;
    document.querySelector("#tInvalidez").innerHTML= "Invalidez y Maternidad: ¢" + IyM;
    document.querySelector("#tBP").innerHTML= "Aporte trabajador Banco Popular: ¢" + BP;
    document.querySelector("#tASC").innerHTML= "Asociación Solidarista: ¢" + ASC;
    document.querySelector("#tDedu").innerHTML= "Total de Deducciones: ¢" + Total_Dedu;
    document.querySelector("#tBruto").innerHTML= "Salario neto: ¢" + parseInt(Neto - Total_Dedu);

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