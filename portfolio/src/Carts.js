import React from 'react'
import image from "./image/Dice.png"
import {motion} from "framer-motion"
import {ThemeContext} from "./Context"


function Carts({data}) {
    const {dark} = React.useContext(ThemeContext)
    const mapSkill = data.skill.map(datas => <div key={datas} className='nic nicce'><span className={`skill ${dark && "light4"}`}>{datas}</span></div>)
    return (
     <a href={data.link} target="_blank">
        <motion.div className={`cart ${dark && "light3"}`}
         initial={{rotateX: "90deg"}}
         whileInView={{rotateX: "0deg", transition: {duration: 2, type: "spring", bounce: 0.75}}}
         whileHover={{scale: 1.05}}
         whileTap={{scale: 0.97}}
        >
            <div className='imgCart'>
                <img src={data.image} className='ook' />
            </div>
            <div className='nic thick special'>{data.title}</div>
            <div className={`nic ${dark && "light1"}`}>Time: {data.duration}</div>
            <div className={`nic ${dark && "light1"}`}>
             {data.text}
            </div>
            <div className='kill'>{mapSkill}</div>
        </motion.div>
     </a>
    )
}

export default Carts
