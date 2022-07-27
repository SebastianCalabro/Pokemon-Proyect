import React from "react";
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import {getAllPokemon} from "../../Redux/actions/index.js"
// import style from "../NavBar/NavBar.css"

function Nav ({getAllPokemon}) {
  
    return (
      <div>
       <Link to={`/`} onClick={()=>getAllPokemon()}>
        <h3>Home</h3>
       </Link>
       <Link to={`/create`} onClick={()=>getAllPokemon()}>
        <h3>Create your pokemon</h3>
       </Link>
       </div>
    );
  };

  let mapDispatchToProps = (dispatch)=>{
    return {
      getAllPokemon:()=>dispatch(getAllPokemon()),
    }
  }
  
  export default connect(null,mapDispatchToProps)(Nav)