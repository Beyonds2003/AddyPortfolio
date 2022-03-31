import React from 'react'
import Carts from '../Carts'
import ProjectData from '../ProjectData'
import {ThemeContext} from "../Context"

function Third() {
    const {dark} = React.useContext(ThemeContext)
    const mapCart = ProjectData.map(datas => <Carts key={datas.id}  data={datas}/>)
    return (
         <>
        <div className='realFlex text' id="projects">   
            <div>
            <div className={`abouts ab2 ${dark && "light1"}`}>Projects</div>
             <div className='gd'>{mapCart}</div>
            </div>
        </div>
         </>
    )
}

export default Third
