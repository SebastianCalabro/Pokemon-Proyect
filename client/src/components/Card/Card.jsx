import React from "react";
import {Link} from "react-router-dom"
import style from "./Card.module.css"

export default function Card ({id, type1, type2, name, image}) {
  
    return (
      <div className={style.card_container}>
        <div className={style.div_background}></div>
        <div className={style.div_content}>
       <Link className={style.pokemon_name}  to={`/pokemons/${id}`}>
        <h3 >{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
       </Link>
       <img className={style.pokemon_image} src={image} alt={name}/>
       <div className={style.break}></div>
       <div className={style.type_container}>
       <img className={style.types} src={type1} alt="" />
       {type2?<img className={style.types} src={type2}/>:""}
       </div>
       </div>
      </div>
    );
  };

