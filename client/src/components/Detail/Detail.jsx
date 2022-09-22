import React from "react"
import { connect } from 'react-redux';
import {useEffect} from "react"
import {useParams/* , useState */} from "react-router-dom"
import { getPokemonDetail } from "../../Redux/actions";
import style from "./Detail.module.css"


const Detail = ({error, pokemonDetail, getPokemonDetail}) => {

    let params = useParams()


    useEffect(()=>{
        getPokemonDetail(params.pokemonId)
    },[])
    
    if(pokemonDetail.id===parseInt(params.pokemonId)||pokemonDetail.id===params.pokemonId){
    return (
      <div className={style.box}>
      <div className={style.detail_container}>
        <div className={style.div_name}>
        <h1 className={style.pokemon_name}>{pokemonDetail.name.toUpperCase()}</h1>
        </div>
        <div className={style.break}></div>
        <div className={style.div_img_types}>
       <img className={style.pokemon_image} src={pokemonDetail.image} alt="" />
       
       <div className={style.type_container}>
        <div className={style.type_separator}>
       <img className={style.type_image} src={`../../assets/${pokemonDetail.types[0]}.png`}/>
       <span className={style.span_type}>{pokemonDetail.types[0].toUpperCase()}</span>
       </div>
       {pokemonDetail.types[1]?<div className={style.type_separator}><img className={style.type_image} src={`../../assets/${pokemonDetail.types[1]}.png`}/><span className={style.span_type}>{pokemonDetail.types[1].toUpperCase()}</span></div>:""}
       </div>
       </div>

        <div className={style.ul_container}>
          <ul>
              <li>Hp: {pokemonDetail.hp}</li>

              <li>Attack: {pokemonDetail.attack}</li>

              <li>Defense: {pokemonDetail.defense}</li>
            
            
            </ul>

            <ul>
              <li>Special Attack: {pokemonDetail.speAtt}</li>

              <li>Special Defense: {pokemonDetail.speDef}</li>

              <li>Speed: {pokemonDetail.speed}</li>
            </ul>

            <div>
              <span className={style.h_w}>Height: {pokemonDetail.height} feet</span>
            
              <span className={style.h_w}>Weight: {pokemonDetail.weight} lbs</span>
            </div>
        </div>

        
      </div>
      </div>
    );
    }else if(error==="No se encontrò el pokemon solicitado"){
      return(
        <span>That pokemon doesn't exist</span>
      )
    }else{
      return(
        <div className={style.load_container}>
        <img className={style.snorlax_load} src="../../assets/snorlax.png"/>
        <span className={style.span_load}>Loading...</span>
        </div>
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