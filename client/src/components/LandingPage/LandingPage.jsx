import React from "react";
import {Link} from "react-router-dom"
import style from "./LandingPage.module.css"

export default function Card ({id, type1, type2, name, image}) {
  
    return (
      <div className={style.lp_container}>
        <div className={style.pokeball_div}>
            <div className={style.red}>
                <div className={style.white}></div>
            </div>

        </div>
        <Link className={style.link} to="/home">
            <h1 className={style.title}>Start your own pokemon adventure!</h1>
        </Link>
      </div>
    );
  };