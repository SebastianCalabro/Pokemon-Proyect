import React from "react";
import {Link} from "react-router-dom"
import { connect } from 'react-redux';

export default function Card ({id, type1, type2, name, image}) {
  
    return (
      <div>
       <Link to={`/pokemons/${id}`}>
        <h3>{name}</h3>
       </Link>
       <img src={image} alt={name}/>
       <img src={type1} alt="" />
       {type2?<img src={type2}/>:""}
      </div>
    );
  };

