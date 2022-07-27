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
          console.log("me llego la accion de home", action.payload)
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
            console.log("DETALLE", action.payload)
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
          console.log("lo que recibo en reducer: ", action.payload)
          return{
          ...state,
          pokemons:[...state.pokemons,action.payload]
        }
        case "GET_A_POKEMON":
            console.log("LO QUE RECIBO: ",action.payload)
            
          return{
          ...state,
          pokemons:action.payload
        }
        case "GET_TYPES":
          console.log("mis Tipos: ",action.payload)
          return{
            ...state,
            types:action.payload
          }
          default:
            return state
      }
    };
    
    export default rootReducer;
