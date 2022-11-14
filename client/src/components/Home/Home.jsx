import React from "react"
import {connect} from 'react-redux'
import { getAllPokemon, getAPokemon, getTypes } from '../../Redux/actions/index.js';
import Card from '../Card/Card.jsx';
import {useEffect, useState} from "react";
import style from "./Home.module.css"
import { SearchBar } from "../SearchBar/SearchBar.jsx";
import { SelectContainer } from "../SelectContainer/SelectContainer.jsx";
import { ArrowContainer } from "../ArrowContainer/ArrowContainer.jsx";


const Home = ({types, pokemons, getAllPokemon, getAPokemon, getTypes})=>{
  
    useEffect(()=>{
        getAllPokemon()
        getTypes()
    },[])
    types = types.filter((e)=>e!=="unknown"&&e!=="shadow")
    let [pokemon,setPokemon]= useState({
        name:'',
     })

     let [ordPoke,setOrdPoke]= useState("")
     let [page,setPage]= useState(0)
     let [typeState,setTypeState]= useState("")
     let [statState,setStatState]= useState("")
     
     let pokemonsButtons = []
     typeof(pokemons) !== "string"? pokemonsButtons = pokemons.slice() : pokemonsButtons = [];
     if(page===0&&typeof(pokemons)!=="string"){pokemonsButtons = pokemons.slice();pokemonsButtons = pokemonsButtons.slice(0,12);}
     if(page===1&&typeof(pokemons)!=="string"){pokemonsButtons = pokemons.slice();pokemonsButtons = pokemonsButtons.slice(12, 24);}
     if(page===2&&typeof(pokemons)!=="string"){pokemonsButtons = pokemons.slice();pokemonsButtons = pokemonsButtons.slice(24, 36);}
     if(page===3&&typeof(pokemons)!=="string"){pokemonsButtons = pokemons.slice();pokemonsButtons = pokemonsButtons.slice(36, 48);}

     switch(statState){
      case "hp":
        pokemonsButtons = pokemonsButtons.sort((a,b)=>{
          if(a.hp < b.hp){
            return 1
          }
          if(a.hp > b.hp){
            return -1
          }
          return 0
        })
        break;
        case "attack":
        pokemonsButtons = pokemonsButtons.sort((a,b)=>{
          if(a.attack < b.attack){
            return 1
          }
          if(a.attack > b.attack){
            return -1
          }
          return 0
        })
        break;
        case "defense":
        pokemonsButtons = pokemonsButtons.sort((a,b)=>{
          if(a.defense < b.defense){
            return 1
          }
          if(a.defense > b.defense){
            return -1
          }
          return 0
        })
        break;
        case "speAtt":
        pokemonsButtons = pokemonsButtons.sort((a,b)=>{
          if(a.speAtt < b.speAtt){
            return 1
          }
          if(a.speAtt > b.speAtt){
            return -1
          }
          return 0
        })
        break;
        case "speDef":
        pokemonsButtons = pokemonsButtons.sort((a,b)=>{
          if(a.speDef < b.speDef){
            return 1
          }
          if(a.speDef > b.speDef){
            return -1
          }
          return 0
        })
        break;
        case "speed":
        pokemonsButtons = pokemonsButtons.sort((a,b)=>{
          if(a.speed < b.speed){
            return 1
          }
          if(a.speed > b.speed){
            return -1
          }
          return 0
        })
        break;
        case "height":
        pokemonsButtons = pokemonsButtons.sort((a,b)=>{
          if(a.height < b.height){
            return 1
          }
          if(a.hp > b.hp){
            return -1
          }
          return 0
        })
        break;
        case "weight":
        pokemonsButtons = pokemonsButtons.sort((a,b)=>{
          if(a.weight < b.weight){
            return 1
          }
          if(a.weight > b.weight){
            return -1
          }
          return 0
        })
        break;
        default:
          break;
     }

     switch(typeState){
      case "normal":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="normal"||e.types[1]==="normal")
        break;
      case "fighting":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="fighting"||e.types[1]==="fighting")
        break;
        case "flying":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="flying"||e.types[1]==="flying")
        break;
        case "poison":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="poison"||e.types[1]==="poison")
        break;
        case "ground":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="ground"||e.types[1]==="ground")
        break;
        case "rock":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="rock"||e.types[1]==="rock")
        break;
        case "bug":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="bug"||e.types[1]==="bug")
        break;
        case "ghost":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="ghost"||e.types[1]==="ghost")
        break;
        case "steel":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="steel"||e.types[1]==="steel")
        break;
        case "fire":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="fire"||e.types[1]==="fire")
        break;
        case "water":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="water"||e.types[1]==="water")
        break;
        case "grass":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="grass"||e.types[1]==="grass")
        break;
        case "electric":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="electric"||e.types[1]==="electric")
        break;
        case "psychic":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="psychic"||e.types[1]==="psychic")
        break;
        case "ice":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="ice"||e.types[1]==="ice")
        break;
        case "dragon":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="dragon"||e.types[1]==="dragon")
        break;
        case "dark":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="dark"||e.types[1]==="dark")
        break;
        case "fairy":
        pokemonsButtons = pokemonsButtons.filter((e)=>e.types[0]==="fairy"||e.types[1]==="fairy")
        break;
        default:
          break;
     }
     if(ordPoke==="orderDesc"){
      pokemonsButtons = pokemonsButtons.sort((a,b)=>{
        if(a.name.toLowerCase() > b.name.toLowerCase()){
          return -1
        }
        if(a.name.toLowerCase() < b.name.toLowerCase()){
          return 1
        }
        return 0
      })
     }else if(ordPoke==="orderAsc"){
      pokemonsButtons = pokemonsButtons.sort((a,b)=>{
        if(a.name.toLowerCase() < b.name.toLowerCase()){
          return -1
        }
        if(a.name.toLowerCase() > b.name.toLowerCase()){
          return 1
        }
        return 0
      })
     }else if(ordPoke === "dbPoke"){
      pokemonsButtons = pokemons.slice()
     pokemonsButtons = pokemonsButtons.filter((e)=>e.id.toString().length > 4)
    }else if(ordPoke === "apiPoke"){
      pokemonsButtons = pokemonsButtons.filter((e)=>e.id.toString().length < 4)
    }

    if(typeof(pokemons)==="string"){
      return (
          <div className={style.search_failed}>
            <SearchBar/>
            <div className={style.cards}>
              <span className={style.span_fail}>That pokemon doesn't exist :(</span>
              <img className={style.pikachu_fail} src="assets/pikachu.png" alt="" />
            </div>
          </div>
      )
     }else if(typeof(pokemons[0])==="string"||pokemons.length<1){
      return(
        <div className={style.loading_container}>
        <img className={style.snorlax_load} src="assets/snorlax.png" alt=""/>
        <span className={style.span_load}>Loading...</span>
        </div>
      )
     }else if(pokemons.length ===1){
      return (
        <div className={style.home_container}>
            <SearchBar/>
            
            <div className={style.cards}>
              <Card id={pokemons[0].id} name={pokemons[0].name} type1={`assets/${pokemons[0].types[0]}.png`} type2={pokemons[0].types[1]?`assets/${pokemons[0].types[1]}.png`:""} image={pokemons[0].image}/>
            </div>
      </div>
      )
     }/* else if(pokemonsButtons.length<1){
      return(<span>No hay pokemon que coincida con el filtro</span>)
     } */else{
      let stats = ""
      if(pokemonsButtons.length>0){
        stats = Object.keys(pokemonsButtons[0])
        stats = stats.filter((e)=>e!=="name"&&e!=="id"&&e!=="image"&&e!=="types")
      }
    return(
        <div className={style.home_container}>
          <SearchBar/>

          <SelectContainer types={types} stats={stats} setOrdPoke={setOrdPoke} setStatState={setStatState} setTypeState={setTypeState}/>

          <ArrowContainer page={page} setPage={setPage} />

      <div className={style.cards}>
      {
      pokemonsButtons&&pokemonsButtons.length>0?pokemonsButtons.map(poke=><Card id={poke.id} name={poke.name} type1={`assets/${poke.types[0]}.png`} type2={poke.types[1]?`assets/${poke.types[1]}.png`:""} image={poke.image}/>):<span className={style.span_filt}>There's no pokemon with that filter</span>
      }
      </div>
     </div>
    )
     }
}

let mapStateToProps = (state)=>{
return{
  pokemons:state.pokemons,
  types:state.types
  
}
}

let mapDispatchToProps = (dispatch)=>{
  return {
    getAllPokemon:()=>dispatch(getAllPokemon()),
    getAPokemon:(name)=>dispatch(getAPokemon(name)),
    getTypes:()=>dispatch(getTypes())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)