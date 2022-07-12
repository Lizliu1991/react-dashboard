
import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

// states on the top that can be open or closed
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
const [activeMenu, setActiveMenu] = useState(true)
 const [isClicked, setIsClicked] = useState(initialState) 
 const [screenSize, setScreenSize] = useState(undefined) 
 const [currentColor, setCurrentColor] = useState("#03C9D7")
 const [currentMode, setCurrentMode] = useState("Light")
 const [themeSettings, setThemeSettings] = useState(false)
 //choose mode and save it in local storage, so when the user comes back, the mode is still there
 //for selecting mode, an even need to be passed
 const setMode = (e) => {
    setCurrentMode(e.target.value)
    localStorage.setItem('themeMode', e.target.value)
    // immidiately close after selecting 
    setThemeSettings(false)
 }
 //for selecting color, value needs to be passed
 const setColor = (color) => {
    setCurrentColor(color)
    localStorage.setItem('colorMode', color)
    setThemeSettings(false)
 }
 const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]:true })
   setThemeSettings(false)
 }
 //isclicked is an object, spread initial state, only change the value that has been clicked
 
    return (
        // the values passed will be passed through all the components across the entire application
        <StateContext.Provider
        value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor,currentMode,themeSettings, setThemeSettings, setMode, setColor
        }}
        >
    {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)