import style from "./SelectContainer.module.css"
import { useState } from "react"

export const SelectContainer = ({types, stats, setOrdPoke, setTypeState, setStatState})=>{
    
    return(
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
    )
}