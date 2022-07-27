import React from "react"
import { connect } from 'react-redux';
import {useEffect} from "react"
import {useParams/* , useState */} from "react-router-dom"
import { getPokemonDetail } from "../../Redux/actions";


const Detail = ({error, pokemonDetail, getPokemonDetail}) => {

    let params = useParams()


    useEffect(()=>{
      console.log("estoty adentre del use")
        getPokemonDetail(params.pokemonId)
    },[])

    console.log("types del pokemon: ", pokemonDetail.types)

    if(pokemonDetail.id===parseInt(params.pokemonId)||pokemonDetail.id===params.pokemonId){
    return (
      <div>
        <h2>{pokemonDetail.name}</h2>
       <img src={pokemonDetail.image} alt={pokemonDetail.image} />
       <img src={`../../assets/${pokemonDetail.types[0]}.png`}/>
       {pokemonDetail.types[1]?<img src={`../../assets/${pokemonDetail.types[1]}.png`}/>:""}
        <div>
            <span>Attack: {pokemonDetail.attack}</span>
            <br/>
            <span>Defense: {pokemonDetail.defense}</span>
            <br/>
            <span>Special Attack: {pokemonDetail.speAtt}</span>
            <br/>
            <span>Special Defense: {pokemonDetail.speDef}</span>
            <br/>
            <span>Speed: {pokemonDetail.speed}</span>
            <br/>
        </div>

        <div>
            <span>Height: {pokemonDetail.height}</span>
            <br/>
            <span>Weight: {pokemonDetail.weight}</span>
        </div>
      </div>
    );
    }else if(error==="No se encontrò el pokemon solicitado"){
      return(
        <span>No se encontró el pokemon solicitado</span>
      )
    }else{
      return(
        <span>Cargando...</span>
      )
    }
  };

  let mapStateToProps = (state)=>{
    return{
      pokemonDetail:state.pokemonDetail,
      error:state.error,
    }
    }
    
    let mapDispatchToProps = (dispatch)=>{
      return {
        getPokemonDetail:(id)=>dispatch(getPokemonDetail(id))
      }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(Detail)