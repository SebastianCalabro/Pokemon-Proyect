const app = require("express").Router()
const {Op} = require("sequelize")
const {Pokemon, Tipo} = require("../db.js")
const axios = require("axios")


app.get("/pokemons", async(req, res, next)=>{
    let {name} = req.query
    let pokeArr = []
    if(name){return next()}
    for (let i = 1; i < 41; i++) {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(data=>{pokeArr.push({
            name:data.data.name,
            image:data.data.sprites.front_default,
            types:data.data.types.map(e=> e.type.name),
            id:data.data.id,
            hp:data.data.stats[0].base_stat,
            attack:data.data.stats[1].base_stat,
            defense:data.data.stats[2].base_stat,
            speAtt:data.data.stats[3].base_stat,
            speDef:data.data.stats[4].base_stat,
            speed:data.data.stats[5].base_stat,
            height:data.data.height,
            weight:data.data.weight
        })})
        .catch(e=>res.send(e))
    }
    /* await axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(async data=>{console.log(data.data.results[0].url);for(i in data.data.results){await axios.get(i.url)
    .then(data=>{pokeArr.push({
        name:data.data.name,
        image:data.data.sprites.front_default,
        types:data.data.types.map(e=> e.type.name).join(" - "),
        id:data.data.id
    })})}})
    .catch((e)=>res.send(e)) */
    let dbPoke = await Pokemon.findAll({include:Tipo})
    for(i in dbPoke){dbPoke[i].dataValues.types = []}
    console.log("pokemon de base de datos1: ", dbPoke)
    for(i in dbPoke){dbPoke[i].tipos.map((e)=>{dbPoke[i].dataValues.types.push(e.name)})}
    console.log("pokemon de base de datos2: ", dbPoke)
    for(i in dbPoke){dbPoke[i].dataValues.types = dbPoke[i].dataValues.types}
    console.log("pokemon de base de datos3: ", dbPoke)
    dbPoke.map(e=>{ pokeArr.push(e)})
    // console.log(pokeArr)
    res.send(pokeArr)
})

app.get("/pokemons/:id", async(req, res, next)=>{
    let {id} = req.params
    console.log("este es el id:",id)
    try{
        

        if(id.toString().length>5){
            let tipoPoke = await Pokemon.findAll({include:Tipo})
            let pokeFilt = tipoPoke.filter(e=>e.id.toString()===id.toString())
            if(pokeFilt.length>0){
                return res.send({
                    name:pokeFilt[0].name,
                    image:pokeFilt[0].image,
                    types:pokeFilt[0].tipos.map(e=>e.name),
                    id: pokeFilt[0].id,
                    hp:pokeFilt[0].hp,
                    attack:pokeFilt[0].attack,
                    defense:pokeFilt[0].defense,
                    speAtt:pokeFilt[0].speAtt,
                    speDef:pokeFilt[0].speDef,
                    speed:pokeFilt[0].speed,
                    height:pokeFilt[0].height,
                    weight:pokeFilt[0].weight
                    
                })
            }
        }
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(data=>{return res.send({
            name:data.data.name,
            image:data.data.sprites.front_default,
            types:data.data.types.map(e=> e.type.name),
            id: data.data.id,
            hp:data.data.stats[0].base_stat,
            attack:data.data.stats[1].base_stat,
            defense:data.data.stats[2].base_stat,
            speAtt:data.data.stats[3].base_stat,
            speDef:data.data.stats[4].base_stat,
            speed:data.data.stats[5].base_stat,
            height:data.data.height,
            weight:data.data.weight
            
        })})
    }catch(e){
        return res.send("No existe el pokemon solicitado")
    }
})

app.get("/pokemons",async (req, res)=>{
    let {name} = req.query
    let arrEnv = []
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(data=>{arrEnv.push({
        name:data.data.name,
        image:data.data.sprites.front_default,
        types:data.data.types.map(e=> e.type.name).join(" - "),
        id:data.data.id
    }); return res.send(arrEnv)})
    .then(null,async e=>{
        let tipoPoke = await Pokemon.findAll({include:Tipo})
        let pokeFilt = tipoPoke.filter(e=>e.name===name)
        if(pokeFilt.length>0){
            return res.send([{
                name:pokeFilt[0].name,
                image:pokeFilt[0].image,
                types:pokeFilt[0].tipos.map(e=>e.name).join(" - "),
                id:pokeFilt[0].id
            }])
        }else{return res.send("No existe ese pokemon")}
})
})

app.get("/types",async(req,res)=>{
    console.log("ESTOY EN EL GET DE TYPES")
    await axios.get(`https://pokeapi.co/api/v2/type`)
    .then(data=>{
        let typeArr = data.data.results.map((e)=>e.name);
        typeArr.map(async e=>{let x = await Tipo.findOne({where:{name:e}});
        if(!x){Tipo.create({name:e})}}); 
        return res.send(typeArr)
    })
    .catch(e=>res.send(e))
})

app.post("/pokemons",async(req,res)=>{
        let {name, image, types, hp, attack, defense, speAtt, speDef, speed, height, weight} = req.body
        console.log("mis tipos: ", types)
        console.log(req.body)
        /* if(!types||types.length<1){return res.send("No se enviaron los tipos")} */
        if(types.length===1){
            let myTypes = await Tipo.findAll({where:{name:types[0]},
            attributes:["id"]})
            let filtTypes = []
            for(i in myTypes){filtTypes.push(myTypes[i].dataValues.id)}
            console.log("my types chavale:", myTypes)
            let myPkm = await Pokemon.findOne({where:{name:name}})
            // console.log("mi imagen es: ",image)
            if(myPkm){return res.send("Ya existe ese pokemon")}
            console.log("antes del then")
            Pokemon.create({name,image,hp,attack,defense,speAtt,speDef,speed,height,weight})
            .then(async data=>{await data.setTipos(filtTypes);console.log("dentro del then");return res.send(data)})
            .catch(e=>res.send("Hubo un error en POST"))
        }else{
        let myTypes = await Tipo.findAll({where:{[Op.or]: [
            { name: types[0] },
            { name: types[1] }
          ]},
        attributes:["id"]})
        let filtTypes = []
        for(i in myTypes){filtTypes.push(myTypes[i].dataValues.id)}
        console.log("my types chavale:", myTypes)
        let myPkm = await Pokemon.findOne({where:{name:name}})
        // console.log("mi imagen es: ",image)
        if(myPkm){return res.send("Ya existe ese pokemon")}
        Pokemon.create({name,image,hp,attack,defense,speAtt,speDef,speed,height,weight})
        .then(async data=>{await data.setTipos(filtTypes);return res.send(data)})
        .catch(e=>res.send(e.message))
        }
})

module.exports = app