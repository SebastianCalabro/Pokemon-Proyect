import axios from "axios"

export const getTypes = () => {
    return async (dispatch) =>{
        try{
            let data = await axios.get(`/types`)
        
            return dispatch({type:"GET_TYPES", payload:data.data})
        }catch(e){
            console.error(e)
        }
    }
}

export const getAllPokemon = () => {
    return async (dispatch) =>{
        try{
            dispatch({type:"GET_ALL_POKEMON", payload:[]})
            let data = await axios.get(`/pokemons`)
        
            return dispatch({type:"GET_ALL_POKEMON", payload:data.data})
        }catch(e){
            console.error(e)
        }
    }
}

export const getAPokemon = (name) =>{
    return async (dispatch) =>{
        try{
            let data = await axios.get(`/pokemons/?name=${name}`)
        
            return dispatch({type:"GET_A_POKEMON", payload:data.data})
        }catch(e){
            console.error(e)
        }
    }
}

export const getPokemonDetail = (id) => {
    return async (dispatch) =>{
        try{
            let data = await axios.get(`/pokemons/${id}`)
        
            return dispatch({type:"GET_POKEMON_DETAIL", payload:data.data})
        }catch(e){
            console.error(e)
        }
    }
  };

  export const createPokemon = pokemon =>{
    return async (dispatch)=>{
        console.log(pokemon)
        try{
            let data = await axios.post(`/pokemons`, pokemon)
        
            return dispatch({type:"CREATE_POKEMON", payload:data.data})
        }catch(e){
            console.error(e)
        }
        
    }
  
  };