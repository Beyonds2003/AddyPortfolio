import React from 'react'

const ThemeContext = React.createContext()

function Context(props) {
    const [dark, setDark] = React.useState(false)
    const [nav , setNav] = React.useState(false)
    return (
         <ThemeContext.Provider value={{setDark, dark, nav, setNav}}>
            {props.children}
         </ThemeContext.Provider>
    )
}

export  {Context, ThemeContext}
