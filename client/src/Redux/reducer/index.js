const initialState = {
    pokemons: [],
    pokeButt:[],
    pokemonDetail:{},
    error:"",
    types:[]
    
}

const rootReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "GET_ALL_POKEMON":
          if(typeof(action.payload)!=="object"){
            return{
              ...state,
              error:"Cargando..."
            }
          }
          return{
            ...state,
            pokemons:action.payload,
          }
        case "GET_POKEMON_DETAIL":
            if(typeof(action.payload)==="string"){
              return {
                ...state,
                error:"No se encontró el pokemon solicitado"
              }
            }
          return{
          ...state,
          pokemonDetail:action.payload,
          pokemons:[]
        }
        case "CREATE_POKEMON":
          return{
          ...state,
          pokemons:[...state.pokemons,action.payload]
        }
        case "GET_A_POKEMON":
            
          return{
          ...state,
          pokemons:action.payload
        }
        case "GET_TYPES":
          return{
            ...state,
            types:action.payload
          }
          default:
            return state
      }
    };
    
    export default rootReducer;
