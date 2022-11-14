import style from "./SearchBar.module.css"
import { useDispatch } from "react-redux"
import { getAPokemon } from "../../Redux/actions"
import { useState } from "react"

export const SearchBar = ()=>{
    let [pokemon,setPokemon]= useState({
        name:'',
     })
    const dispatch = useDispatch()
    let handleSubmit=(e)=>{
        e.preventDefault()
          dispatch(getAPokemon(pokemon.name))
       }
       let handleChange=(e)=>{
        setPokemon({...pokemon,[e.target.name]:e.target.value})
    }
    
    return(
        <div className={style.searchbar_container}>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input className={style.searchbar} placeholder="Search pokemon..." name="name" onChange={(e)=>handleChange(e)}/>
                <button className={style.search_button} type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            </div>
    )
}