document.querySelector("#agregar").onclick= function () {
    let cedula = document.querySelector("#cedula").value;
    let nombre = document.querySelector("#nombre").value;
    let apellidos = document.querySelector("#apellidos").value;
    let telefono = document.querySelector("#telefono").value;
    let provincia = document.querySelector("#provincia").value;
    
    document.querySelector("#datosTabla").innerHTML += `
        <tr>
            <td>${cedula}</td>
            <td>${nombre}</td>
            <td>${apellidos}</td>
            <td>${telefono}</td>
            <td>${provincia}</td>
            <td><a class="editar"><img class="edit" src="img/edit.gif" /></a></td>
            <td><a class="elimina"><img class="delete" src="img/delete.png" /></a></td>
        </tr>
        `;
}