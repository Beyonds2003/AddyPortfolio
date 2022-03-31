import React from 'react'
import {ThemeContext} from "../Context"

function Bottom() {
    const {dark} = React.useContext(ThemeContext)
    return (
        <div className={`bot  ${dark && "light2"}`}>
            <div className='fotter'>Made with <i className="fa-solid fa-heart hearts"></i> by Addy</div>
        </div>
    )
}

export default Bottom
