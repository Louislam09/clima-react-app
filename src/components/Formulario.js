import React,{useState} from 'react';
import Error from './Error';
import ProTypes from 'prop-types';


const Formulario = ({busqueda,guardarBusqueda,guardarConsultar,guardarCargando}) => {

    const [error, guardarError] = useState(false);

    // Extraer ciudad y pais
    const  {ciudad, pais} = busqueda;

    // Funcion que coloca los elemento en el state
    const handleChange = e => {
        // actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    // cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if(ciudad.trim === '' || pais.trim() === '' ){
            guardarError(true);
            return;
        }
        guardarCargando(true);
        
        setTimeout(()=>{
            guardarCargando(false);
            guardarError(false);
            guardarConsultar(true);
        },3000)


        // Pasarlo  al component principal
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje='Ambos campos son obligatorios'/> : null}
            <div className='input-field col s12'>
                <input 
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handleChange}

                />
                <label htmlFor='ciudad'>Ciudad: </label>

                <div className='input-field col s12'>
                    <select
                        name='pais'
                        id='pais'
                        value={pais}
                        onChange={handleChange}

                    >
                        <option value=''>-- Seleccione un Pais --</option>
                        <option value="DO">Republica Dominicana</option>
                        <option value="FR">Francia</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>

                        <label htmlFor='pais'>Pais: </label>
                </div>
            </div>

            <div className='input-field col s12'>
                <input 
                    type='submit'
                    value='Buscar Clima'
                    className='waves-effect waves-light btn-large btn-block yellow accent-4'
                
                />

            </div>
        </form>
     );
}
Formulario.proTypes = {
    busqueda: ProTypes.object.isRequired,
    guardarBusqueda: ProTypes.func.isRequired,
    busquguardarConsultareda: ProTypes.func.isRequired
}

export default Formulario;