import { Navigate } from "react-router-dom";
import { AnhadirEditarContacto } from "../pages/AnhadirEditarContacto";

export const getContactos = async (dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/mariogr12/contacts")
    if (!response.ok) {
        console.log("Hay que crear el usuario");
        crearUsuario()
        return
    }
    const data = await response.json()
    dispatch({type: 'set_contactos', payload: data.contacts})
}

export const crearUsuario = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/mariogr12", {
        method: "POST"
    })
    const data = await response.json()
    console.log(data);
    console.log(response);
    
}

export const crearContacto = async (nuevoContacto, setNuevoContacto, dispatch) => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/mariogr12/contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoContacto)
    })

    if (response.ok){
        getContactos(dispatch)
    }

    setNuevoContacto({
		"nombreCompleto": "",
		"direccion": "",
		"telefono": "",
		"email": ""
	})
}

export const editarContacto = async (id, nuevoContacto, dispatch, navigate) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/mariogr12/contacts/${id}`,{
        method: 'PUT',
        body: JSON.stringify(nuevoContacto),
        headers: {
            "Content-Type": "Application/json"
        }
    })
    if (response.ok){
        getContactos(dispatch)
        navigate("/")
    }
}


export const borrarContacto = async (id, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/mariogr12/contacts/${id}`,{
        method: "DELETE"
    })
    getContactos(dispatch)
}