import React from 'react';

function Boton({ texto, esBotonDeClic, manejarClic }){
    return (
        <button
        className={ esBotonDeClic ? 'btn btn-success btn-block' : 'btn btn-danger btn-block'}
        onClick={ manejarClic }>
            { texto }
        </button>
    );
}

export default Boton;