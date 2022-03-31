import React from 'react'
import Particles from "react-tsparticles"
import  ParticalConfig  from './ParticalsConfig'
import First from './structure/First'
import Second from './structure/Second'
import Header from './structure/Header'
import Third from './structure/Third'
import Fourth from './structure/Fourth'
import Bottom from './structure/Bottom'
import {ThemeContext} from "./Context"
import LightParticle from './LightParticle'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from './structure/Navigation'


function App() {
  const {dark, nav} = React.useContext(ThemeContext)

    return (
        <div className='mother'>
          <div className='sheHateme'>
          {!dark ? 
         <div className='particles'>
           <Particles params={LightParticle}/>
         </div>: 
         <div className='particles'>
         <Particles params={ParticalConfig}/>
         </div>
         }
         <Header />
         <Navigation />
         <First />
         <Second />
         <Third />
         <Fourth />
         <Bottom />
          </div>
        </div>
    )
}

export default App
