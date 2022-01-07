import React from 'react'
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import './Authentification.css';

const Authentification = () => {
	var formField = {
		justifyContent: 'center',
		fontSize: 25
	};
	return (
		<div className='autentification'>
			<header>
				<div className='header'>
					<h3><Logo />Don't have an account ?
						<Link to={'/Registration'}>
							Registration
						</Link>
					</h3>
				</div>
			</header>
			<h1>Authentification</h1>
			<div className='fieldBox'>
				<form style={formField} className='formBox'>

					<label>
						Pseudo :
						<input type="text" name="pseudo" required />
					</label>
					<br />
					<label>
						Mot-de-passe :
						<input type="password" name="password" required />
					</label>
					<br />
					<input type="submit" value="Envoyer" name="authentificate" />
				</form>
			</div>
		</div >
	)
}

export default Authentification