import { Link } from "react-router-dom";
import { crearContacto } from "../services/servicesAPI";

export const NuevoContacto = () => {


    return (
        <div className="container border mx-auto mt-4 p-4 border rounded-2">
            <h2 className="text-center">Añadir un nuevo contacto</h2>
            <div className="mb-3">
                <label htmlFor="nombreCompleto" className="form-label">Nombre completo</label>
                <input type="text" className="form-control" id="nombreCompleto" placeholder="Nombre completo" />
            </div>
            <div className="mb-3">
                <label htmlFor="nombreCompleto" className="form-label">Dirección</label>
                <input type="text" className="form-control" id="nombreCompleto" placeholder="Dirección" />
            </div>
            <div className="mb-3">
                <label htmlFor="nombreCompleto" className="form-label">Teléfono</label>
                <input type="number" className="form-control" id="nombreCompleto" placeholder="Teléfono" />
            </div>
            <div className="mb-3">
                <label htmlFor="nombreCompleto" className="form-label">Email</label>
                <input type="email" className="form-control" id="nombreCompleto" placeholder="Email" />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3 w-100" onClick={()=>{crearContacto}}>Guardar</button>
            </div>
            <Link to="/">
                <p>o volver a contactos</p>
            </Link>
        </div>
    )
}