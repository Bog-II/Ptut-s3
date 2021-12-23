import React, { useState } from "react";
import { Icon } from "@mui/material";
import CSS from 'csstype'

const SearchBar = () => {

    let _inputStyle: CSS.Properties = {
        border: "none",
        backgroundColor: "none",
    }

    const [inputStyle, setInputStyle] = useState(_inputStyle);

    let componentStyle: CSS.Properties = {
        border: "1px solid black",
        width: 15 + "em",
        display: "flex",
        justifyContent: "left",
        alignItems: "center"
    }

    let iconStyle: CSS.Properties = {
        backgroundColor: "red",
        width: 10 + "px",
        height: 10 + "px"
    }

    let onFocus = () => {
        setInputStyle(_inputStyle);
        console.log("owo");
        console.log(inputStyle);
    }

    return (
        <div style={componentStyle}>
            <div style={iconStyle}></div>
            <input type="text" onFocus={onFocus} name="" id="" placeholder="search" style={inputStyle} />
        </div>
    )
}

export default SearchBar;