//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100


let personas = [];

function validar() {
    let eNombre = document.getElementById("nombre");
    let vNombre = eNombre.value.trim();
    let eErrorNombre = document.getElementById("errorNombre");

    let eEdad = document.getElementById("edad");
    let vEdad = eEdad.value.trim();
    let eErrorEdad = document.getElementById("errorEdad");

    let fNombre = validarNombre(eNombre, vNombre, eErrorNombre);
    let fEdad = validarEdad(eEdad, vEdad, eErrorEdad);

    
    if (fNombre !== "exito" || fEdad !== "exito") {
        let mensajesError = "";
        if (fNombre !== "exito") {
            mensajesError += eErrorNombre.innerText + "\n";
        }
        if (fEdad !== "exito") {
            mensajesError += eErrorEdad.innerText + "\n";
        }
        alert(mensajesError.trim());
        return; 
    }


    let persona = {
        nombre: vNombre,
        edad: vEdad
    };

    personas.push(persona);
    eNombre.value = "";
    eEdad.value = "";
    mostrarDatos();
}


function validarNombre(elemento, valor, eError) {
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (valor.length === 0) {
        eError.innerText = "El nombre no puede estar vacío.";
        elemento.style.backgroundColor = "red";
        elemento.style.color = "white";
        return "falla";
    } else if (valor.length <= 3) {
        eError.innerText = "El nombre debe tener más de 3 caracteres.";
        elemento.style.backgroundColor = "red";
        elemento.style.color = "white";
        return "falla";
    } else if (!soloLetras.test(valor)) {
        eError.innerText = "El nombre solo debe contener letras.";
        elemento.style.backgroundColor = "red";
        elemento.style.color = "white";
        return "falla";
    } else {
        eError.innerText = "";
        elemento.style.backgroundColor = "green";
        elemento.style.color = "black";
        return "exito";
    }
}


function validarEdad(elemento, valor, eError) {
    let edad = parseInt(valor);
    if (isNaN(edad) || edad < 18 || edad >= 100) {
        eError.innerText = "La edad debe estar entre 18 y 99.";
        elemento.style.backgroundColor = "red";
        elemento.style.color = "white";
        return "falla";
    } else {
        eError.innerText = "";
        elemento.style.backgroundColor = "green";
        elemento.style.color = "black";
        return "exito";
    }
}

function mostrarDatos() {
    let tabla = document.getElementById("tablaPersonas");
    tabla.innerHTML = "";

    personas.forEach((p, index) => {
        tabla.innerHTML += `
            <tr>
                <td>${p.nombre}</td>
                <td>${p.edad}</td>
                <td>
                    <button onclick="eliminar(${index})">Eliminar</button>
                    <button onclick="cargarFormulario(${index})">Actualizar</button>
                </td>
            </tr>
        `;
    });
}

function eliminar(index) {
    if (confirm("¿Estás seguro que deseas eliminar esta persona?")) {
        personas.splice(index, 1);
        mostrarDatos();
    }
}

function cargarFormulario(index) {
    let persona = personas[index];
    document.getElementById("nombre1").value = persona.nombre;
    document.getElementById("edad1").value = persona.edad;
    document.getElementById("btnActualizar").value = index;
}

function actualizar() {
    let vNombre = document.getElementById("nombre1").value.trim();
    let vEdad = document.getElementById("edad1").value.trim();
    let index = document.getElementById("btnActualizar").value;

    if (vNombre.length >= 3 && !isNaN(parseInt(vEdad)) && parseInt(vEdad) >= 18 && parseInt(vEdad) < 100) {
        personas[index] = {
            nombre: vNombre,
            edad: vEdad
        };

        document.getElementById("nombre1").value = "";
        document.getElementById("edad1").value = "";
        mostrarDatos();
    } else {
        alert("Nombre debe tener al menos 3 letras y edad debe estar entre 18 y 99.");
    }
}