import { valueSorted } from '@syncfusion/ej2/pivotview';
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
 const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]:true })
   
 }
 //isclicked is an object, spread initial state, only change the value that has been clicked
 
    return (
        // the values passed will be passed through all the components across the entire application
        <StateContext.Provider
        value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize
        }}
        >
    {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)