import React from 'react'

const FetchComponent = () => {


    const fetchAllPokemonNames = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
          .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            console.log(response);
        }).catch(err=>{
            console.log(err);
        });
    }

    return (
        <div>
            <h1>POKEMON - Gotta Catch Em All!</h1>
            <button onClick={fetchAllPokemonNames}>Fetch Pokemon</button>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}

export default FetchComponent