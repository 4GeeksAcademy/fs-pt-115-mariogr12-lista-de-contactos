import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/" className="sin-decoracion boton">
					<span className="h4 mb-0">Lista de Contactos</span>
				</Link>
				<div className="ml-auto">
					<Link to="/nuevo-contacto">
						<button className="btn btn-primary">Añadir nuevo contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};