import React from 'react';
import './Loader.css'
function Loader(props) {
    return (
        <div className="m">
            <div className="m-overlay"></div>
            <div className="spinner-border text-muted m-body"></div>
        </div>
       
    );
}

export default Loader;