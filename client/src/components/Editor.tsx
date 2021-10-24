import React, { useCallback, useState } from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"
import "./Editor.css"

interface Props {
	text: string,
}

const Editor = (props: Props) => {

	const wrapperRef = useCallback(wrapper => {
		const toolbarOptions = [
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [1, 2, 3, 4, 5, 6, 7] }, { 'size': ['small', false, 'large', 'huge'] }],
			['bold', 'italic', 'underline', 'strike'],
			[{ 'color': [] }, { 'background': [] }, 'image', 'link'],
			[{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],
			[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
			['blockquote', 'code-block'],
			[{ 'script': 'sub' }, { 'script': 'super' }],
			[{ 'direction': 'rtl' }],
			['clean'],

		];
		if (wrapper == null) return
		wrapper.innerHTML = ""
		const editor = document.createElement("div")
		wrapper.append(editor)
		new Quill(editor, {
			theme: "snow",
			modules: {
				toolbar: toolbarOptions,
			},
		}).setText(props.text)
	}, [])

	return (
		<div className="container" ref={wrapperRef}></div>
	)
}

export default Editor