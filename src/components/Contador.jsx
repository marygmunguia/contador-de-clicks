import React from 'react';

function Contador({ numeroDeClics }){
    return (
        <h1 className='text-center'>Números de clics: <br /><span class="badge bg-secondary">{ numeroDeClics }</span></h1>
    );
}

export default Contador;