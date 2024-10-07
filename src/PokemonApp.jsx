import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks' 

export const PokemonApp = () => {
    
    const {page, pokemons = [], isLoading} = useSelector(state => state.pokemons)   
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons())
    }, [])

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
       
        {isLoading && <span>LOADING...</span>}

        <ul>
            {
                pokemons.map((pokemon) => (
                    <li key={pokemon.url}>{pokemon.name}</li>
                ))
            }
        </ul>
        <button
            disabled = {isLoading}
            onClick={() => dispatch(getPokemons(page))}
            >Next Page</button>
    </>
  )
}


