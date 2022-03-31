import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import { ThemeContext } from '../Context'

const navVariants = {
    animateOpen: {
       rotateZ: "45deg",
       translateX: "1px",
       translateY: "5px",
       transition: {}
    },
    animateOpen2: {
     rotateZ: "-45deg",
     translateX: "1px",
     translateY: "-5px",
     transition: {}
  },
  animateClose: {
     rotateZ: "0deg",
     translateX: "0px",
     translateY: "0px",
     transition: {duration: 0.5}
  },
  animate: {
      opacity: 0,
      display: "none",
      transition: {duration: 2}
  },
  animate1: {
      display: ""
  },
  circleClose: {
    clipPath: ` circle(1.1% at 83.6% 4.7%)`,
    transition: {duration: 0.5, when: "beforeChildren"}
   },
   circleOpen: {
       clipPath:`circle(141.4% at 83.6% 4.7%)`,
       transition: {duration: 0.5, when: "beforeChildren"}
   }
  }

  const stagger = {
      initial: {
          opacity: 0,
          y: 50
      },
      animate: {
          opacity: 1,
          y: 0,
          transition: {duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2}
      }
  }

  const stagger2 = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.3}
    }
}

function Navigation() {
    const {nav, setNav, dark, setDark} = React.useContext(ThemeContext)
    return (
        <motion.div className={`${nav ? "nnn2" : "nnn"}`} variants={navVariants} initial="circleClose" animate={nav ? "circleOpen" : "circleClose"}>
            <AnimatePresence>
                <motion.button 
                 variants={navVariants}
                 initial="circleClose"
                 animate="circleOpen"
                className='mb jj' onClick={() => setNav(pres => !pres)}>
                  <motion.div className='sidebar'/>
                  <div className='pd'>
                     <motion.span variants={navVariants} animate={nav ? "animateOpen" : "animateClose"} className='span'></motion.span>
                     <motion.span variants={navVariants} animate={nav ? "animate" : "animate1"}  className='span'></motion.span>
                     <motion.span variants={navVariants} animate={nav ? "animateOpen2" : "animateClose"} className='span'></motion.span>
                  </div>
               </motion.button>
          </AnimatePresence>
          <div className='menu'>
            <motion.div className="flexs flex3" variants={stagger} initial="initial" animate={nav ? "animate" : "initial"}>
                <a onClick={() => window.scrollTo(0,0)}><motion.div variants={stagger2}  onClick={() => setNav(false)} className={`flexs white ${dark && "light1"}`}><i className="fa fa-home icons"></i><h3 className='margin0 weight'>Home</h3></motion.div></a>
                <a href='#about'> <motion.div variants={stagger2}  onClick={() => setNav(false)} className={`flexs white ${dark && "light1"}`}><i className="fa-regular fa-user icons"></i><h3 className='margin0 weight'>About</h3></motion.div></a>
                <a href="#projects"><motion.div variants={stagger2}  onClick={() => setNav(false)} className={`flexs white ${dark && "light1"}`}>
                <svg stroke="currentColor" className='icons2' fill="currentColor" stroke-width="0" t="1569683753031" viewBox="0 0 1024 1024" version="1.1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L517 485.3l-86.1-86.2c-3.1-3.1-8.2-3.1-11.3 0L275.3 543.4c-3.1 3.1-3.1 8.2 0 11.3l36.8 36.8z"></path><path d="M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1c-3.7 2.4-4.7 7.3-2.3 11l30.3 47.2v0.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-0.1l30.3-47.2c2.4-3.7 1.3-8.6-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 512H160V232h704v440z"></path></svg>   
                 <h3 className='margin0 weight'>Projects</h3></motion.div></a>
                <a href="#contact"><motion.div  variants={stagger2} onClick={() => setNav(false)} className={`flexs white ${dark && "light1"}`}><i className="fa-regular fa-address-card icons"></i><h3 className='margin0 weight'>Contact</h3></motion.div></a>
            </motion.div>
          </div>
        </motion.div>
    )
}

export default Navigation
