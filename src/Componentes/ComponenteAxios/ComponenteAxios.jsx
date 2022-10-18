import React, { useState } from "react";
import axios from "axios";

const ComponenteAxios = () => {

    const [nombres, setNombres] = useState([]);
    

    const getAll = () => { 
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => response.data)
            .then(data => setNombres(data.results))   
    }

    return (
        <div>
            <button className="btn btn-danger" onClick={getAll}>Fetch Pokemon</button>
            <ul>
                {nombres.map((pokemon, index) => {
                    return <li key={index}>{pokemon.name}</li>
                })}
            </ul>
        </div>

    )
}
export default ComponenteAxios;