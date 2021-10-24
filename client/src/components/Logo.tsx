import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../../resources/Logo.png'
import "./Logo.css"

const Logo = () => {
	return (
		<Link to="/">
			<img alt="logo" src={Img} className="logo" />
		</Link>
	)
}
export default Logo