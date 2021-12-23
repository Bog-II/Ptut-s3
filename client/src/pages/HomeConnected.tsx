import React from 'react'
import SearchBar from '../components/SearchBar'
import DocumentList from "../components/DocumentList";

const HomeConnected = () => {
    return (
        <div>
            <div>
                <h1>Documents</h1>
            </div>
            <div>
                <SearchBar />
                <DocumentList/>
            </div>
        </div>
    )
}

export default HomeConnected