import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import { createPokemon, getTypes } from "../../Redux/actions/index.js";

const Create = ({types, getTypes, createPokemon})=> {

  useEffect(()=>{
    getTypes()
  },[])
    let [pc,setPc]= useState({
        name:'',
        image:"",
        hp:0,
        attack:0,
        defense:0,
        speAtt:0,
        speDef:0,
        speed:0,
        height:0,
        weight:0,
        types:[]
     })

     types = types.filter((e)=>e!=="unknown"&&e!=="shadow")

    let handleChange=(e)=>{
        setPc({...pc,
          [e.target.name]:e.target.value},)

    }

    let handleTypes=(e)=>{
      if(pc.types.includes(e.target.name)){
        pc.types = pc.types.filter((ty)=>ty!==e.target.name)
      }else{
        pc.types.push(e.target.name)
      }
    }

     let handleSubmit=(e)=>{
      let name = document.getElementById('name');
      let image = document.getElementById('image');
      let hp = document.getElementById('hp');
      let attack = document.getElementById('attack');
      let defense = document.getElementById('defense');
      let speAtt = document.getElementById('speAtt');
      let speDef = document.getElementById('speDef');
      let speed = document.getElementById('speed');
      let weight = document.getElementById('weight');
      let height = document.getElementById('height');
      let spanName = document.getElementById('name_span');
      let spanHp = document.getElementById('hp_span');
      let spanAttack = document.getElementById('attack_span');
      let spanDefense = document.getElementById('defense_span');
      let spanSpeAtt = document.getElementById('speAtt_span');
      let spanSpeDef = document.getElementById('speDef_span');
      let spanSpeed = document.getElementById('speed_span');
      let spanWeight = document.getElementById('weight_span');
      let spanHeight = document.getElementById('height_span');
      let spanTypes = document.getElementById('types_span');

      console.log("mis tipos ", pc.types)

      const pattern = new RegExp('^[A-Z]+$', 'i');
      spanTypes.textContent = ""
      spanName.textContent = ""
      name.style.borderColor = "black";
      spanHp.textContent = ""
      hp.style.borderColor="black"
      spanAttack.textContent = ""
      attack.style.borderColor="black"
      spanDefense.textContent = ""
      defense.style.borderColor="black"
      spanSpeAtt.textContent = ""
      speAtt.style.borderColor="black"
      spanSpeDef.textContent = ""
      speDef.style.borderColor="black"
      spanSpeed.textContent = ""
      speed.style.borderColor="black"
      spanWeight.textContent = ""
      weight.style.borderColor="black"
      spanHeight.textContent = ""
      height.style.borderColor="black"

      // types

      if(pc.types.length < 1){
        e.preventDefault()
        spanTypes.textContent = "El pokemon debe tener algun tipo"

      }if(pc.types.length>2){
        e.preventDefault()
        spanTypes.textContent = "El pokemon no puede tener mas de dos tipos"
        return;
      }

      // types

      // name
      
      if(name.value.length > 10){
        e.preventDefault()
        name.style.borderColor = "red"
        spanName.textContent = "El nombre pokemon no puede contener mas de 10 caracteres"
        return;
      }
      if(!pattern.test(name.value)){
        e.preventDefault()
        name.style.borderColor="red"
        spanName.textContent = "El nombre del pokemon solo puede conter caracteres alfabeticos"
        return;
      }
      // name

      // image
      /* if(name.value.length > 10){
        e.preventDefault()
        name.style.borderColor = "red";
        return;
      }
      if(!pattern.test(name.value)){
        e.preventDefault()
        name.style.borderColor="red";
        return;
      } */
      // image

      // hp
     
      if(hp.value < 1){
        e.preventDefault()
        hp.style.borderColor = "red";
        spanHp.textContent = "El hp no puede ser negativo"
        return;
      }
     
      if(hp.value > 255){
        e.preventDefault()
        hp.style.borderColor="red";
        spanHp.textContent = "El hp no puede ser mayor a 255"
        return;
      }
      // hp

      // attack
      
      if(attack.value < 1){
        e.preventDefault()
        attack.style.borderColor = "red";
        spanAttack.textContent = "El ataque no puede ser negativo"
        return;
      }
      if(attack.value > 180){
        e.preventDefault()
        attack.style.borderColor="red";
        spanAttack.textContent = "El ataque no puede ser mayor a 180"
        return;
      }
      // attack

      // defense

      if(defense.value < 1){
        e.preventDefault()
        defense.style.borderColor = "red";
        spanDefense.textContent = "La defensa no puede ser negativa"
        return;
      }
      if(defense.value > 230){
        e.preventDefault()
        defense.style.borderColor="red";
        spanDefense.textContent = "La defensa no puede ser mayor a 230"
        return;
      }
      // defense

      // speAtt

      if(speAtt.value < 1){
        e.preventDefault()
        speAtt.style.borderColor = "red";
        spanSpeAtt.textContent = "El ataque especial no puede ser negativo"
        return;
      }
      if(speAtt.value > 180){
        e.preventDefault()
        speAtt.style.borderColor="red";
        spanSpeAtt.textContent = "El ataque especial no puede ser mayor a 180"
        return;
      }
      // speAtt

      // speDef

      if(speDef.value < 1){
        e.preventDefault()
        speDef.style.borderColor = "red";
        spanSpeDef.textContent = "La defensa especial no puede ser negativa"
        return;
      }
      if(speDef.value > 230){
        e.preventDefault()
        speDef.style.borderColor="red";
        spanSpeDef.textContent = "La defensa especial no puede ser mayor a 230"
        return;
      }
      // speDef

      // speed
      
      if(speed.value < 1){
        e.preventDefault()
        speed.style.borderColor = "red";
        spanSpeed.textContent = "La velocidad no puede ser negativa"
        return;
      }
      if(speed.value > 200){
        e.preventDefault()
        speed.style.borderColor="red";
        spanSpeed.textContent = "La velocidad no puede ser mayor a 200"
        return;
      }
      // speed

      // weight

      if(weight.value < 1){
        e.preventDefault()
        weight.style.borderColor = "red";
        spanWeight.textContent = "El peso no puede ser negativo"
        return;
      }
      if(weight.value > 999.9){
        e.preventDefault()
        weight.style.borderColor="red";
        spanWeight.textContent = "El peso no puede ser mayor a 999.9"
        return;
      }
      // weight

      // height
      
      if(height.value < 1){
        e.preventDefault()
        height.style.borderColor = "red";
        spanHeight.textContent = "La altura no puede ser negativa"
        return;
      }
      if(height.value > 20){
        e.preventDefault()
        height.style.borderColor="red";
        spanHeight.textContent = "La altura no puede ser mayor a 20"
        return;
      }
      // height
      console.log("SOS PETEE",pc)
        e.preventDefault()
        createPokemon(pc)
     }
    return (
      <div>
       <form onSubmit={(e)=>handleSubmit(e)}>
       <input onChange={(e)=>handleChange(e)} id="name" name="name" type="text" />

       <span id="name_span"></span>

       {/* <input onChange={(e)=>handleChange(e)} name="types" type="text" /> */}
       <input onChange={(e)=>handleChange(e)} type="text" id="image" name="image"/>

       <span id="image_span"></span>

       <input onChange={(e)=>handleChange(e)} id="hp" name="hp" type="number" />

       <span id="hp_span"></span>

       <input onChange={(e)=>handleChange(e)} id="attack" name="attack" type="number" />

       <span id="attack_span"></span>

       <input onChange={(e)=>handleChange(e)} id="defense" name="defense" type="number" />

       <span id="defense_span"></span>

       <input onChange={(e)=>handleChange(e)} id="speAtt" name="speAtt" type="number" />

       <span id="speAtt_span"></span>

       <input onChange={(e)=>handleChange(e)} id="speDef" name="speDef" type="number" />

       <span id="speDef_span"></span>

       <input onChange={(e)=>handleChange(e)} id="speed" name="speed" type="number" />

       <span id="speed_span"></span>

       <input onChange={(e)=>handleChange(e)} id="weight" name="weight" type="number" />

       <span id="weight_span"></span>

       <input onChange={(e)=>handleChange(e)} id="height" name="height" type="number" />

       <span id="height_span"></span>

      <div>{types?types.map((ty)=><div><input onChange={(e)=>handleTypes(e)} type="checkbox" id={ty} name={ty}/><img for={ty} src={`assets/${ty}.png`}/><label for={ty}>{ty}</label></div>):"no hay tipos"}</div>
      <span id="types_span"></span>
      {/* <input type="checkbox" id="normal" name="normal"/>
      <input type="checkbox" id="bug" name="bug"/>
      <input type="checkbox" id="dragon" name="dragon"/>
      <input type="checkbox" id="fairy" name="fairy"/>
      <input type="checkbox" id="fighting" name="fighting"/>
      <input type="checkbox" id="fire" name="fire"/>
      <input type="checkbox" id="flying" name="flying"/>
      <input type="checkbox" id="ghost" name="ghost"/>
      <input type="checkbox" id="plant" name="plant"/>
      <input type="checkbox" id="earth" name="earth"/>
      <input type="checkbox" id="ice" name="ice"/>
      <input type="checkbox" id="dark" name="dark"/>
      <input type="checkbox" id="poison" name="poison"/>
      <input type="checkbox" id="rock" name="rock"/>
      <input type="checkbox" id="steel" name="steel"/>
      <input type="checkbox" id="water" name="water"/>
      <input type="checkbox" id="psychic" name="psychic"/>
      <input type="checkbox" id="electric" name="electric"/> */}
       <button type="submit">submit</button>
       </form>
      </div>
    );
  };

  let mapStateToProps = (state)=>{
    return {
      types:state.types
    }
  }

    let mapDispatchToProps = (dispatch)=>{
      return {
        createPokemon:(obj)=>dispatch(createPokemon(obj)),
        getTypes:()=>dispatch(getTypes())
      }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(Create)
