import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchPokemon = (props) => {
    const[state, setState] = useState([]);

    // useEffect(() => {
    //     console.log("Hello")
    //     fetch('https://pokeapi.co/api/v2/pokemon/')
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(response => {
    //         setState({pokemon: response.results});
    //     })
    // }, []);

    // const onClick = e => {
    //     console.log("hello");
    //     fetch('https://pokeapi.co/api/v2/pokemon/')
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(response => {
    //         setState({pokemon: response.results});
    //     })
    // }

    const onClick = e => {
        console.log("Hello");
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(response => {
                setState({pokemon: response.data.results});
            })
    }

    return(
        <div>
            <button onClick={ onClick }>Fetch Pokemon</button>
            {state.pokemon ? state.pokemon.map((item, index) =>{
                return(<div key={index}>{item.name}</div>)
            }):null}
        </div>
    );
}

export default FetchPokemon;