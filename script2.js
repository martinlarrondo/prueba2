//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100
let personas = []
function validar(){
    let eNombre = document.getElementById("Nombre")
    let errorNombre = document.getElementById("errorNombre")
    let vNombre = eNombre.value
    let eEdad  =document.getElementById("edad")
    let errorEdad = document.getElementById("errorEdad")
    let vEdad = eEdad.value
    let fNombre = validarlargominmo(eNombre,errorNombre,vNombre)
    let fEdad  =validarlargominmo(eEdad,errorEdad,vEdad)
    if(fNombre == "exito" && fEdad == "exito"){
        let p={
            eNombre:"nombre",
            eEdad :"edad"
        }        
        personas.push(p)
        return p
    }


}
function cargardatos(){



}

function actualizar(){

}

function eliminar(){
    
}

