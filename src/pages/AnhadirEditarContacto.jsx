import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { crearContacto } from "../services/servicesAPI";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const AnhadirEditarContacto = () => {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()

    const [nuevoContacto, setNuevoContacto] = useState({
        name: "",
        address: "",
        phone: "",
        email: ""
    })
    const [showAlert, setShowAlert] = useState(false)

    const handleInputChange = (e) => {
        setNuevoContacto({ ...nuevoContacto, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!nuevoContacto.name || !nuevoContacto.address || !nuevoContacto.phone || !nuevoContacto.email) {
            setShowAlert(true)
            setTimeout(() => setShowAlert(false), 2000)
            return
        }
        crearContacto(nuevoContacto, setNuevoContacto, dispatch)
        navigate(`/`)

    }

    return (
        <div className="container border mx-auto mt-4 p-4 border rounded-2">
            <h2 className="text-center">Añadir un nuevo contacto</h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="nombreCompleto" className="form-label">Nombre completo</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombreCompleto"
                        placeholder="Nombre completo"
                        name="name"
                        value={nuevoContacto.nombreCompleto}
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        id="direccion"
                        placeholder="Dirección"
                        name="address"
                        value={nuevoContacto.direccion}
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input
                        type="number"
                        className="form-control"
                        id="telefono"
                        placeholder="Teléfono"
                        name="phone"
                        value={nuevoContacto.telefono}
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        name="email"
                        value={nuevoContacto.email}
                        onChange={handleInputChange} />
                </div>
                <div className="col-auto">
                    <button
                        type="submit"
                        className="btn btn-primary mb-3 w-100"
                        onClick={handleSubmit}>Guardar</button>
                </div>
                <Link to="/">
                    <p>o volver a contactos</p>
                </Link>
            </form>
        </div>
    )
}