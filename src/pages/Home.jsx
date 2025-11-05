import { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { borrarContacto } from "../services/servicesAPI";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [contactos, setContactos] = useState([
		{
			nombreCompleto: "Mario Guisado Rodríguez",
			direccion: "Calle San José 14",
			telefono: 644229176,
			email: "mariogrguitar12@gmail.com",
			img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
		}, {
			nombreCompleto: "Raúl Guisado Rodríguez",
			direccion: "Calle Belgica 1",
			telefono: 644845093,
			email: "rauldrums879@gmail.com",
			img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
		}
	])

	return (
		<div className="container mt-4">
			{contactos.map((contacto, index) => (
				<div key={index} className="border p-3">
					<div className="d-flex w-100">
						<img className="foto me-3" src={contacto.img}></img>
						<div className="w-100">
							<div className="d-flex justify-content-between w-100">
								<h5>{contacto.nombreCompleto}</h5>
								<div>
									<button className="me-3 boton"><i className="bi bi-pencil-fill"></i></button>
									<button className="boton" onClick={()=>{borrarContacto}}><i className="bi bi-trash3"></i></button>
								</div>
							</div>
							<div className="lineasinfodebajo">
								<p className="mb-0 text-secondary"><i className="bi bi-geo-alt-fill"></i> {contacto.direccion}</p>
								<p className="mb-0 text-secondary"><i className="bi bi-telephone-fill"></i> {contacto.telefono}</p>
								<p className="mb-0 text-secondary"><i className="bi bi-envelope-fill"></i> {contacto.email}</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}; 