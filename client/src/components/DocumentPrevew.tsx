import React from 'react'
import BackdropFilter from 'react-backdrop-filter'

const DocumentPrevew = () => {
    let src = "url(https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/6/f/66f2701088_50173176_cochon-jeu-video.jpg)"

    let styleCadre = {
        width: 500 + "px",
        height: 250 + "px",
        backgroundImage: src,
        backgroundSize: 500 + "px",
    }

    return (
        <div id={'cadre'} style={styleCadre}>
            <BackdropFilter
                filter={"blur(10px)"}
                html2CanvasOpts={{
                    allowTaint: false
                }}
            >
                <h2>OwO</h2>
            </BackdropFilter>
        </div>
    )
}

export default DocumentPrevew