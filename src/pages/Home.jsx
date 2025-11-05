import { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [contactos, setContactos] = useState([
		{
			nombreCompleto: "Mario Guisado Rodríguez",
			direccion: "Calle San José 14",
			telefono: 644229176,
			email: "mariogrguitar12@gmail.com"
		}, {
			nombreCompleto: "Raul Guisado Rodríguez",
			direccion: "Calle Belgica 1",
			telefono: 644845093,
			email: "rauldrums879@gmail.com"
		}
	])

	return (
		<div className="container">
			{contactos.map((contacto, index) => (
				<div key={index} className="border p-3">
					<div className="d-flex w-100">
						<a href="Foto">Foto</a>
						<div className="w-100">
							<div className="d-flex justify-content-between w-100">
								<h5>{contacto.nombreCompleto}</h5>
								<div>
									<button>Editar</button>
									<button>Eliminar</button>
								</div>
							</div>
							<div className="lineasinfodebajo">
								<p className="mb-0">Dirección: {contacto.direccion}</p>
								<p className="mb-0">Teléfono: {contacto.telefono}</p>
								<p>Email: {contacto.email}</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}; 