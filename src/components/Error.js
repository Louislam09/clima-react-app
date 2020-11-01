import React from 'react';
import ProTypes from 'prop-types';

const Error = ({mensaje}) => {
    return ( 
        <p className='red darken-4 error'>{mensaje}</p> 

     );
}

Error.proTypes = {
    mensaje: ProTypes.string.isRequired
}
export default Error;