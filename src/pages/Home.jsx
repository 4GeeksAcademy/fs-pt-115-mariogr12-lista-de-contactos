import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { borrarContacto, crearContacto, getContactos } from "../services/servicesAPI";
import { Link } from "react-router-dom";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getContactos(dispatch)
	}, [])

	return (
		<div className="container mt-4">
			{store.contactos.length > 0 ? (
				store.contactos.map((contacto, index) => (
					<div key={index} className="border p-3">
						<div className="d-flex w-100">
							<img className="foto me-3" src={store.img}></img>
							<div className="w-100">
								<div className="d-flex justify-content-between w-100">
									<h5>{contacto.name}</h5>
									<div>
										<Link to={`/editar-contacto/${contacto.id}`}>
											<button className="me-3 boton" onClick={()=>{}}>
												<i className="bi bi-pencil-fill"></i>
											</button>
										</Link>
										<button className="boton" onClick={() => { borrarContacto(contacto.id, dispatch) }}><i className="bi bi-trash3"></i></button>
									</div>
								</div>
								<div className="lineasinfodebajo">
									<p className="mb-0 text-secondary"><i className="bi bi-geo-alt-fill"></i> {contacto.address}</p>
									<p className="mb-0 text-secondary"><i className="bi bi-telephone-fill"></i> {contacto.phone}</p>
									<p className="mb-0 text-secondary"><i className="bi bi-envelope-fill"></i> {contacto.email}</p>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<h2 className="text-center">No hay contactos disponibles</h2>
			)}
		</div>
	)
}; 