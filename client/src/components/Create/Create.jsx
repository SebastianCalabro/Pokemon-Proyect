import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import { createPokemon, getTypes } from "../../Redux/actions/index.js";
import style from "./Create.module.css"

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
     let [submitted, setSubmitted] = useState(false)

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
      name.style.outlineColor = "rgba(0, 0, 0, 0)";
      spanHp.textContent = ""
      hp.style.outlineColor="rgba(0, 0, 0, 0)"
      spanAttack.textContent = ""
      attack.style.outlineColor="rgba(0, 0, 0, 0)"
      spanDefense.textContent = ""
      defense.style.outlineColor="rgba(0, 0, 0, 0)"
      spanSpeAtt.textContent = ""
      speAtt.style.outlineColor="rgba(0, 0, 0, 0)"
      spanSpeDef.textContent = ""
      speDef.style.outlineColor="rgba(0, 0, 0, 0)"
      spanSpeed.textContent = ""
      speed.style.outlineColor="rgba(0, 0, 0, 0)"
      spanWeight.textContent = ""
      weight.style.outlineColor="rgba(0, 0, 0, 0)"
      spanHeight.textContent = ""
      height.style.outlineColor="rgba(0, 0, 0, 0)"

      // types

      if(pc.types.length < 1){
        e.preventDefault()
        spanTypes.textContent = "Your pokemon must have some type"
        return;
      }if(pc.types.length>2){
        e.preventDefault()
        spanTypes.textContent = "Your pokemon cannot have more than two types"
        return;
      }

      // types

      // name
      
      if(name.value.toString().length<1){
        e.preventDefault()
        name.style.outlineColor = "red";
        spanName.textContent = "You must complete this section :/"
        return;
      }
      if(name.value.length > 10){
        e.preventDefault()
        name.style.outlineColor = "red"
        spanName.textContent = "The name of your pokemon cannot have more than 10 letters"
        return;
      }
      if(!pattern.test(name.value)){
        e.preventDefault()
        name.style.outlineColor="red"
        spanName.textContent = "The name of your pokemon can only contain letters"
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
     
      if(hp.value.toString().length<1){
        e.preventDefault()
        hp.style.outlineColor = "red";
        spanHp.textContent = "You must complete this section :/"
        return;
      }
      if(hp.value < 1){
        e.preventDefault()
        hp.style.outlineColor = "red";
        spanHp.textContent = "The hp cannot be negative!"
        return;
      }
     
      if(hp.value > 255){
        e.preventDefault()
        hp.style.outlineColor="red";
        spanHp.textContent = "The hp cannot be greater than 255!"
        return;
      }
      // hp

      // attack
      
      if(attack.value.toString().length<1){
        e.preventDefault()
        attack.style.outlineColor = "red";
        spanAttack.textContent = "You must complete this section :/"
        return;
      }
      if(attack.value < 1){
        e.preventDefault()
        attack.style.outlineColor = "red";
        spanAttack.textContent = "The attack cannot be negative!"
        return;
      }
      if(attack.value > 180){
        e.preventDefault()
        attack.style.outlineColor="red";
        spanAttack.textContent = "The attack cannot be greater than 180!"
        return;
      }
      // attack

      // defense

      if(defense.value.toString().length<1){
        e.preventDefault()
        defense.style.outlineColor = "red";
        spanDefense.textContent = "You must complete this section :/"
        return;
      }
      if(defense.value < 1){
        e.preventDefault()
        defense.style.outlineColor = "red";
        spanDefense.textContent = "The defense cannot be negative!"
        return;
      }
      if(defense.value > 230){
        e.preventDefault()
        defense.style.outlineColor="red";
        spanDefense.textContent = "the defense cannot be greater than 230!"
        return;
      }
      // defense

      // speAtt

      if(speAtt.value.toString().length<1){
        e.preventDefault()
        speAtt.style.outlineColor = "red";
        spanSpeAtt.textContent = "You must complete this section :/"
        return;
      }
      if(speAtt.value < 1){
        e.preventDefault()
        speAtt.style.outlineColor = "red";
        spanSpeAtt.textContent = "The special attack cannot be negative!"
        return;
      }
      if(speAtt.value > 180){
        e.preventDefault()
        speAtt.style.outlineColor="red";
        spanSpeAtt.textContent = "The special attack cannot be greater than 180!"
        return;
      }
      // speAtt

      // speDef

      if(speDef.value.toString().length<1){
        e.preventDefault()
        speDef.style.outlineColor = "red";
        spanSpeDef.textContent = "You must complete this section :/"
        return;
      }
      if(speDef.value < 1){
        e.preventDefault()
        speDef.style.outlineColor = "red";
        spanSpeDef.textContent = "The special defense cannot be negative!"
        return;
      }
      if(speDef.value > 230){
        e.preventDefault()
        speDef.style.outlineColor="red";
        spanSpeDef.textContent = "The special defense cannot be greater than 230!"
        return;
      }
      // speDef

      // speed
      
      if(speed.value.toString().length<1){
        e.preventDefault()
        speed.style.outlineColor = "red";
        spanSpeed.textContent = "You must complete this section :/"
        return;
      }
      if(speed.value < 1){
        e.preventDefault()
        speed.style.outlineColor = "red";
        spanSpeed.textContent = "The speed cannot be negative!"
        return;
      }
      if(speed.value > 200){
        e.preventDefault()
        speed.style.outlineColor="red";
        spanSpeed.textContent = "The speed cannot be greater than 200!"
        return;
      }
      // speed

      // weight
      if(weight.value.toString().length<1){
        e.preventDefault()
        weight.style.outlineColor = "red";
        spanWeight.textContent = "You must complete this section :/"
        return;
      }
      if(weight.value < 1){
        e.preventDefault()
        weight.style.outlineColor = "red";
        spanWeight.textContent = "The weight cannot be negative!"
        return;
      }
      if(weight.value > 99999){
        e.preventDefault()
        weight.style.outlineColor="red";
        spanWeight.textContent = "The weight cannot be greater than 99999!"
        return;
      }
      // weight

      // height
      
      if(height.value.toString().length<1){
        e.preventDefault()
        height.style.outlineColor = "red";
        spanHeight.textContent = "You must complete this section :/"
        return;
      }
      if(height.value < 1){
        e.preventDefault()
        height.style.outlineColor = "red";
        spanHeight.textContent = "The height cannot be negative!"
        return;
      }
      if(height.value > 25){
        e.preventDefault()
        height.style.outlineColor="red";
        spanHeight.textContent = "The height cannot be greater than 25 feets!"
        return;
      }
      // height
      console.log("El pokemon que creo",pc)
      setSubmitted(true)
        e.preventDefault()
        createPokemon(pc)
     }
     if (submitted===true){
      return(
        <div className={style.go_home_container}>
          <span className={style.success}>Your pokemon was successfully created!</span>
          <span className={style.go_home}>(go home to see it)</span>
        </div>
      )
     }
    return (
      <div className={style.gral_container}>
        <h1 className={style.create_title}>Create your own pokemon!</h1>
         <form className={style.input_container} onSubmit={(e)=>handleSubmit(e)}>
        
      <div className={style.box}>
      

      
      <div className={style.stats_container}>

        <div className={style.input_div}>
       <input placeholder="Name... (maximum 10 characters)" className={style.input} onChange={(e)=>handleChange(e)} id="name" name="name" type="text" />
       <span className={style.validate} id="name_span"></span>
       </div>

      <div className={style.input_div}>
       <input placeholder="URL of your image... (optional)" className={style.input} onChange={(e)=>handleChange(e)} type="text" id="image" name="image"/>
       <span className={style.validate} id="image_span"></span>
       </div>

      <div className={style.input_div}>
       <input placeholder="Health points... (1-255)" className={style.input} onChange={(e)=>handleChange(e)} id="hp" name="hp" type="number" />
       <span className={style.validate} id="hp_span"></span>
       </div>

      <div className={style.input_div}>
       <input placeholder="Attack... (1-180)" className={style.input} onChange={(e)=>handleChange(e)} id="attack" name="attack" type="number" />
       <span className={style.validate} id="attack_span"></span>
       </div>

      <div className={style.input_div}>
       <input placeholder="Defense... (1-230)" className={style.input} onChange={(e)=>handleChange(e)} id="defense" name="defense" type="number" />
       <span className={style.validate} id="defense_span"></span>
       </div>

      <div className={style.input_div}>
       <input placeholder="Special attack... (1-180)" className={style.input} onChange={(e)=>handleChange(e)} id="speAtt" name="speAtt" type="number" />
       <span className={style.validate} id="speAtt_span"></span>
       </div>

      <div className={style.input_div}>
       <input placeholder="Special defense... (1-230)" className={style.input} onChange={(e)=>handleChange(e)} id="speDef" name="speDef" type="number" />
       <span className={style.validate} id="speDef_span"></span>
       </div>

      <div className={style.input_div}>
       <input placeholder="Speed... (1-200)" className={style.input} onChange={(e)=>handleChange(e)} id="speed" name="speed" type="number" />
       <span className={style.validate} id="speed_span"></span>
       </div>

      <div className={style.input_div}>
       <input placeholder="Weight... (1-99999 lbs)" className={style.input} onChange={(e)=>handleChange(e)} id="weight" name="weight" type="number" />
       <span className={style.validate} id="weight_span"></span>
       </div>

      <div className={style.input_div}>
       <input placeholder="Height... (1-25 feets)" className={style.input} onChange={(e)=>handleChange(e)} id="height" name="height" type="number" />
       <span className={style.validate} id="height_span"></span>
       </div>
       </div>
       
      <div className={style.prev_and_submit}>
       <div className={style.preview_div}>
        <h2 className={style.preview_title}>PREVIEW</h2>
        <div className={style.break}></div>
        {pc.image?<img className={style.preview_img} src={pc.image} alt=""/>:<div className={style.no_image}>PNG image recomended
        </div>}
      </div>
      <div className={style.submit_container}>
       <button className={style.submit_button} type="submit">CREATE POKEMON</button>
       </div>
      </div>
      
      <div className={style.types_and_span}><div className={style.types_container}>{types?types.map((ty)=><div className={style.each_type_div}><input className={style.type_checkbox} onChange={(e)=>handleTypes(e)} type="checkbox" id={ty} name={ty}/><img className={style.type_image} alt="" for={ty} src={`assets/${ty}.png`}/><label className={style.label_type} for={ty}>{ty}</label></div>):"no hay tipos"}</div><span className={style.validate} id="types_span"></span></div>
      
      
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
      
      </div>
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
