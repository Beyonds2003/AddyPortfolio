import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import {ThemeContext} from "../Context"

function First() {

    const second = {
        initial: {
            opacity: 0,
            x : 300,
        },
        animate: {
            opacity: 1,
            x : 0,
            transition: {duration: 1.5, type: "spring", stiffness: 25}
        },

    }
      
    const firstVariants = {
        hidden: {
            opacity: 0,
            y: 60
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const first = {
        hidden: {
            opacity: 0,
            y: 60
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
               duration: 0.5
            }
        }
    }
    const {dark} = React.useContext(ThemeContext)
    return (
        <div id='home' className='realFlex fff'>
           <motion.div className='first first2' 
            variants={firstVariants}
            initial="hidden"
            whileInView="show"
           >
           <motion.div variants={first} className='flexs flexs2'>
           <motion.div  className={`waves waves2 ${dark && "light1"}`}>Hi There!</motion.div>
            <motion.div  
             initial={{rotate: 0}}
             animate={{rotate: [-10,10,-10,10,-10,10,-10], transition: {repeat: Infinity, repeatDelay: 2, duration: 1.5}}}
            className="MainSection_wave__1G15Y waves">👋🏻</motion.div> 
           </motion.div>
        <motion.div 
          variants={first}
        className={`waves2 ${dark && "light1"}`}>I'm <span className='special'>ADDY .</span></motion.div>  
         <motion.div 
            variants={first}
         className='waves3 special'>
             <Typewriter 
              words={["React Js Devloper", "Enthusiastic On New Tech"]}
              loop={Infinity}
             />
         </motion.div>
           </motion.div>
           <motion.div className='second'
            variants={second}
            whileInView="animate"
            initial="initial"
           >
               <img src="https://sv-dev.netlify.app/static/media/home-main.4885597d.svg"  className='img'/>
           </motion.div>
        </div>
    )
}

export default First
