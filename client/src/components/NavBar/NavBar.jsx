import React from "react";
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import {getAllPokemon} from "../../Redux/actions/index.js"
import style from "./NavBar.module.css"

function Nav ({getAllPokemon}) {
  
    return (
      <div>
      <div className={style.nav_container}>
        <img src="../../assets/pokeball-logo.jpg" alt="logo" className={style.logo} />
      <div className={style.links_container}>
      <Link to={`/about`} className={`${style.links}`} onClick={()=>getAllPokemon()}>
        <h3 /* className={style.home} */>About</h3>
       </Link>
       <Link to={`/home`} className={`${style.links}`} onClick={()=>getAllPokemon()}>
        <h3 /* className={style.home} */>Home</h3>
       </Link>
       <Link to={`/create`} className={`${style.links}`} onClick={()=>getAllPokemon()}>
        <h3 /* className={style.create} */>Create your pokemon</h3>
       </Link>
       </div>
       </div>
       <div className={style.break}></div>
       </div>
    );
  };

  let mapDispatchToProps = (dispatch)=>{
    return {
      getAllPokemon:()=>dispatch(getAllPokemon()),
    }
  }
  
  export default connect(null,mapDispatchToProps)(Nav)