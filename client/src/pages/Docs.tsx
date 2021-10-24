import React from 'react'
import Editor from '../components/Editor'
import "./Docs.css"
import Logo from "../../resources/logo.png"

const Docs = () => {

	let document = {
		title: "Titre du document",
		text: "",
	}

	return (
		<div>
			<div className="editor-header">
				<img className="logo" src={Logo} />
				<h1 className="document-title">{document.title}</h1>
			</div>
			<Editor text={document.text} ></Editor>
		</div>
	)
}

export default Docs