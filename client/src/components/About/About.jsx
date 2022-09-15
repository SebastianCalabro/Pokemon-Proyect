import { AiFillLinkedin } from "react-icons/ai"
import { FaGithubSquare } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { SiRedux } from "react-icons/si"
import { SiSequelize } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiJest } from "react-icons/si"

import style from "./About.module.css"


export default function About (){
    return(
        <div className={style.box}>
            <h1 className={style.tecnologies_h1}>TECNOLOGIES</h1>
            <div className={style.tecnologies_container}>
                <FaReact className={style.react_icon}/>
                <SiRedux className={style.redux_icon}/>
                <SiExpress className={style.express_icon}/>
                <SiSequelize className={style.sequelize_icon}/>
                <SiJest className={style.jest_icon}/>
            </div>
            <h2 className={style.contact_h2}>CONTACT</h2>
            <div className={style.contact_container}>
            <a className={style.link} href="https://www.linkedin.com/in/sebastian-calabro/" target="_blank">
                <AiFillLinkedin className={style.icon1}/>
            </a>
            <a className={style.link} href="https://github.com/SebastianCalabro" target="_blank">
                <FaGithubSquare className={style.icon2}/>
            </a>
            </div>
            
        </div>
    )
}