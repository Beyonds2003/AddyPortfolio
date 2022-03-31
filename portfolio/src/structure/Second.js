import React from 'react'
import { AnimatePresence, motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {ThemeContext} from "../Context"


const cardVariants= {
    offscreen : {
        opacity: 0,
    },
    onscreen : {
      opacity: 1,
      transition: {
          staggerChildren: 0.3,
      }
    } 
}

const variants = {
    offscreen: {
        opacity: 0,
        x: -500
    }, 
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {duration: 1, ease: "easeInOut"}
    }
}

const iconVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.3, delayChildren: 0.3}
    }
}

const showIcons = {
    hidden: {
        opacity: 0,
        y: 15
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.7}
    }
}

function Second() {
    const {dark} = React.useContext(ThemeContext)
    const Docs = [
        {id: 1, text: `My name's Addy. I live in Myanmar.
        I'm a IT major student from Hmawbi Techonology University.`},
        {id: 2, text: ` My ambition is to become Software Engineer. Now, I'm doing 
        front end web development at Upwork as a freelancer and I also got react advanced bootcamp certificate from Scrimba. And, I really like 
        to create new thing with other people. Also,  I'm always improving myself with each project I get my hands on.`},
        {id: 3, text: <div className='special special3'>Here my certificate: <a href='https://drive.google.com/file/d/1UvycUWVPifFdaB6I5cRMhMXXzO9FVyrv/view?usp=drivesdk' className='Vv' target="_blank">Scrimba Certificate</a></div>},
        {id: 4, text: `I am a dedicated person who pursues his dreams, hardworking and results oriented, I always seek to achieve my best version.`}
    ]

    const realDoc = Docs.map((data, i) => {
        return (
                <motion.div key={data.id}
                variants={variants}
            >
                <div>{data.text}</div>
                <br />
            </motion.div>
        )
    })
    
    return (
        <div className='realFlex' id='about'>
            <div className='aboutFirst'>
            <h2 className={`abouts ${dark && "light1"}`}>Who I Am</h2>
           <div className={`text ${dark && "light1"}`}>
            <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            >
             {realDoc}
             <br />
            <motion.div variants={variants} className='special special1'>Here are my main skills :</motion.div>
            </motion.div>
            <motion.div 
             variants={iconVariants}
             initial="hidden"
             whileInView="show"
             className='next'>
                <motion.div className='skills html' variants={showIcons}>
                    <img src="https://joaotulio.vercel.app/static/media/html-icon.ebfc51e406097a90691ab82f1aa72db3.svg" className='ook' />
                    <div className='iconText'>Html</div>
                </motion.div>
                <motion.div className='skills' variants={showIcons}>
                    <img src="https://joaotulio.vercel.app/static/media/css-icon.60a6c50d5a470990f63ee17a3bbd9178.svg" className='ook' />
                    <div className='iconText'>Css</div>
                </motion.div>
                <motion.div className='skills' variants={showIcons}>
                    <img src="https://joaotulio.vercel.app/static/media/js-icon.ffcf56dc5498f7bbbec802191c740e5f.svg" className='ook' />
                    <div className='iconText'>Js</div>
                </motion.div>
                <motion.div className='skills' variants={showIcons}>
                    <img src="https://joaotulio.vercel.app/static/media/react-icon.f1484e295933af0e748d6a01b05a8361.svg" className='ook' />
                    <div className='iconText'>React</div>
                </motion.div>
                <motion.div className='skills' variants={showIcons}>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/redux-283024.png" className='ook' />
                    <div className='iconText'>Redux</div>
                </motion.div>
                <motion.div className='skills' variants={showIcons}>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/firebase-1-282796.png" className='ook' />
                    <div className='iconText'>Firebase</div>
                </motion.div>
                <motion.div className='skills' variants={showIcons}>
                    <img src="https://cdn.sanity.io/images/oneb1r22/production/f07d289005d5be44fe6a045efdc0a796d230bfc8-774x560.jpg" className='ook' />
                    <div className='iconText'>Framer motion</div>
                </motion.div>
            </motion.div>
           </div>
            </div>
            <motion.div className='aboutSecond'
             initial={{x: 300, opacity: 0}}
             whileInView={{x: 0, opacity: 1}}
             transition={{duration: 0.5, type: "tween"}}
            >
             <img src='images/TUHmawbi3.jpg' className='img'/>
            </motion.div>
        </div>
    )
}

export default Second
