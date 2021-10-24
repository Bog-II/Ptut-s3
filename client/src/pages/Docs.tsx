import React from 'react'
import Editor from '../components/Editor'
import Logo from '../components/Logo'
import "./Docs.css"

const Docs = () => {

	let document = {
		title: "Titre du document",
		text: "",
	}

	return (
		<div>
			<div className="editor-header">
				<Logo />
				<h1 className="document-title">{document.title}</h1>
			</div>
			<Editor text={document.text} ></Editor>
		</div>
	)
}

export default Docs