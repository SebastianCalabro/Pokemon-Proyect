import React from "react";
import {Link} from "react-router-dom"
import style from "./test.module.css"

export default function Test () {
    var well={
        boxShadow: "1px 3px 1px #9E9E9E"
    }
  let id = 1
  let type1 = "/assets/grass.png"
  let type2 = "/assets/poison.png"
  let name= "Bulbasaur"
  let image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    return (
      <div className={style.home_container}>
        <div className={style.searchbar_container}>
            <form >
                <input name="name" placeholder="Search pokemon..." className={style.searchbar}/>
                <button type="submit" className={style.search_button}><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            </div>
            <div className={style.select_container}>
              <span className={style.select_span}>Filter by:</span>
<select className={style.select} name="ordenar por">
  <option hidden>--AZ--</option>
        <option className={style.options} value="orderDesc">orderDesc</option>
        <option className={style.options} value="orderAsc">orden ascendente</option>
      </select>

      <select className={style.select} name="orderByOrigin">
        <option className={style.options} value="dbPoke">data base poke</option>
        <option className={style.options} value="apiPoke">api poke</option>
      </select>
      {/* <button name="orderAsc" onClick={()=>setOrdPoke("orderAsc")}>Ordenar array alfabéticamente asc</button>
      <button name="orderDesc" onClick={()=>setOrdPoke("orderDesc")}>Ordenar array alfabéticamente desc</button>
      <button name="dbPoke" onClick={()=>setOrdPoke("dbPoke")}>Creado por nosotros</button>
      <button name="apiPoke" onClick={()=>setOrdPoke("apiPoke")}>Pokemon clásicos</button> */}
      <button className={style.filt_button} name="filtCleaning" >Clean filters</button>
      </div>
      <div>
      <button className={style.prev_next_buttons} name="prev" ><i class="fa-solid fa-arrow-left-long"></i></button>
      <button className={style.prev_next_buttons} name="next" ><i class="fa-solid fa-arrow-right-long"></i></button>
      </div>
      <div className={style.card_container}>
        <div className={style.div_background}></div>
        <div className={style.div_content}>
       <Link className={style.pokemon_name}  to={`/pokemons/${id}`}>
        <h3 >{name}</h3>
       </Link>
       <img className={style.pokemon_image} src={image} alt={name}/>
       <div className={style.break}></div>
       <div className={style.type_container}>
       <img className={style.types} src={type1} alt="hola" />
       {type2?<img className={style.types} src={type2}/>:""}
       </div>
      </div>
      </div>
     </div>
      
    );
  };