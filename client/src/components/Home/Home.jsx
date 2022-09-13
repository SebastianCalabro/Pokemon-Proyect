import React from "react"
import {connect} from 'react-redux'
import { getAllPokemon, getAPokemon, getTypes } from '../../Redux/actions/index.js';
import Card from '../Card/Card.jsx';
import {useEffect, useState} from "react";
import style from "./Home.module.css"
// import poison from "../../assets/poison.png"


const Home = ({types, pokemons, getAllPokemon, getAPokemon, getTypes})=>{
  
    useEffect(()=>{
      console.log("en el use effect")
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
    //  let [cleanState,setCleanState]= useState("")

    //  console.log("mi clean filter esta en: ", cleanState)
     

     let pokemonsButtons = pokemons.slice()
     if(page===0){pokemonsButtons = pokemons.slice();pokemonsButtons = pokemonsButtons.slice(0,12);}
     if(page===1){pokemonsButtons = pokemons.slice();pokemonsButtons = pokemonsButtons.slice(12, 24);}
     if(page===2){pokemonsButtons = pokemons.slice();pokemonsButtons = pokemonsButtons.slice(24, 36);}
     if(page===3){pokemonsButtons = pokemons.slice();pokemonsButtons = pokemonsButtons.slice(36, 48);}
     console.log("mi page", page)
     console.log("mi pokemons buttons", pokemonsButtons)
    //  console.log("ultimo consoleee p",pokemons)
     console.log("ordPoke pa", ordPoke)

     
     let handlePage = (e)=>{
      if(e.target.name==="prev"&&page>0){
        setPage(page-1)
      }else if(e.target.name==="next"&&page<3){
        setPage(page+1)
      }
      return;
     }
    let handleChange=(e)=>{
        setPokemon({...pokemon,[e.target.name]:e.target.value})
    }
     let handleSubmit=(e)=>{
        console.log('handleSubmit Prod:',pokemon);
        e.preventDefault()
        console.log(e.target.value)
        getAPokemon(pokemon.name)
     }

     

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

    /* if(cleanState==="ON"){
      pokemonsButtons = pokemons.slice(0, 13)
      setCleanState("")
      page= 0
     } */
    //  console.log("mi clean state esta en2: ",cleanState)
    if(typeof(pokemons)==="string"){
      return (
          <div className={style.search_failed}>
            <div className={style.searchbar_container}>
            <form onSubmit={(e)=>handleSubmit(e)}>
              <input className={style.searchbar} placeholder="Search pokemon..." name="name" onChange={(e)=>handleChange(e)}/>
              <button className={style.search_button} type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
          </div>
            <div className={style.cards}>
              <span className={style.span_fail}>That pokemon doesn't exist :(</span>
              <img className={style.pikachu_fail} src="assets/pikachu.png" alt="" />
            </div>
          </div>
      )
     }else if(typeof(pokemons[0])==="string"||pokemons.length<1){
      return(
        <div className={style.loading_container}>
        <img className={style.snorlax_load} src="assets/snorlax.png"/>
        <span className={style.span_load}>Loading...</span>
        </div>
      )
     }else if(pokemons.length ===1){
      return (
        <div className={style.home_container}>
        <div className={style.searchbar_container}>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input className={style.searchbar} placeholder="Search pokemon..." name="name" onChange={(e)=>handleChange(e)}/>
                <button className={style.search_button} type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            </div>
            
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
          <div className={style.searchbar_container}>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input className={style.searchbar} placeholder="Search pokemon..." name="name" onChange={(e)=>handleChange(e)}/>
                <button className={style.search_button} type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            </div>

      <div className={style.select_container}>
      <span className={style.select_span}>Filter by:</span>
      
      <select className={style.select} name="ordenar por" onChange={(e)=>setOrdPoke(e.target.value)}>
      <option hidden="hidden">Alphabet</option>
        <option className={style.options} value="orderDesc">Z-A</option>
        <option className={style.options} value="orderAsc">A-Z</option>
      </select>

      <select className={style.select} name="order by type" onChange={(e)=>setTypeState(e.target.value)}>
      <option hidden="hidden">Types</option>
        {types?types.map((ty)=><option className={style.options} value={ty}>{ty}</option>):""}
      </select>

      <select className={style.select} name="orderByStats" onChange={(e)=>setStatState(e.target.value)}>
      <option hidden="hidden">Stats</option>
      {stats?stats.map((st)=><option className={style.options} value={st}>{st}</option>):""}
      </select>

      <select className={style.select} name="orderByOrigin" onChange={(e)=>setOrdPoke(e.target.value)}>
        <option hidden="hidden">Origin</option>
        <option className={style.options} value="dbPoke">created by me</option>
        <option className={style.options} value="apiPoke">clasic</option>
      </select>
      <button className={style.filt_button} name="filtCleaning" onClick={()=>{setOrdPoke("");setStatState("");setTypeState("")}}>Clean filters</button>
      </div>

      <div className={style.prev_next_container}>
      <button className={style.prev_next_buttons} name="prev" onClick={(e)=>handlePage(e)}> Prev </button>
      <button className={style.prev_next_buttons} name="next" onClick={(e)=>handlePage(e)}> Next </button>
      </div>

      {console.log("MIS POKEMON QUE RENDERIZO: ", pokemonsButtons)}
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