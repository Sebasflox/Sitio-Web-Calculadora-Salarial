var incremetador = 0;

document.querySelector("#agregar").onclick= function () {
    let cedula = document.querySelector("#cedula").value;
    let nombre = document.querySelector("#nombre").value;
    let apellidos = document.querySelector("#apellidos").value;
    let telefono = document.querySelector("#telefono").value;
    let provincia = document.querySelector("#provincia").value;
    let hoy = new Date();

    document.querySelector("#datosTabla").innerHTML += `
        <tr id="${incremetador}">
            <td>${cedula}</td>
            <td>${nombre}</td>
            <td>${apellidos}</td>
            <td>${telefono}</td>
            <td>${provincia}</td>
            <td>${hoy.toDateString()}</td>
            <td><a class="editar"><img class="edit" src="img/edit.gif"/></a></td>
            <td><a style="cursor:pointer" class="elimina )"><img class="delete" src="img/delete.png" /onclick=Delete(${incremetador})></a></td>
        </tr>
        `;

    incremetador+=1;
    limpiar();
    document.querySelector("#cedula").focus();
   
}


function limpiar(){
    document.querySelector("#cedula").value="";
    document.querySelector("#nombre").value="";
    document.querySelector("#apellidos").value="";
    document.querySelector("#telefono").value="";
    document.querySelector("#provincia").value="";
}


function Delete(incremetador){
    document.getElementById(incremetador).innerHTML = ""
    
    }
    
