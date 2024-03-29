import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar2 from '../data/avatar2.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
 
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span style={{background: dotColor}} 
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
       />
       {icon}
    </button>
  </TooltipComponent>
)


const Navbar = () => {
const { setActiveMenu, isClicked, handleClick,screenSize, setScreenSize, currentColor } =useStateContext()

//find out the screen size, based on which, the sidebar will be visible or not

useEffect(() => {
  const handleResize = () => setScreenSize(window.innerWidth);
  //everytime it resizes, will call the handleResize function
  window.addEventListener('resize', handleResize)

  handleResize();
  //this function will be called initially to figure out the initial width
  return () => window.removeEventListener('resize', handleResize)
  
}, [setScreenSize])

//track the screensize changes
useEffect(() => {
  if(screenSize <= 900) {
    setActiveMenu(false)
  } else {
    setActiveMenu(true)
  }
}, [setActiveMenu,screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'
    >
   
      <NavButton 
        title="Menu" 
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
       <div className="flex">
       <NavButton 
        title="Cart" 
        customFunc={() => handleClick("cart")} 
        color={currentColor} 
        icon={<FiShoppingCart />}
      />
      <NavButton 
        title="Chat" 
        dotColor="#03C9D7"
        customFunc={() => handleClick("chat")} 
        color={currentColor}
        icon={<BsChatLeft />}
      />
      <NavButton 
        title="Notification" 
        dotColor="#03C9D7"
        customFunc={() => handleClick("notification")} 
        color={currentColor}
        icon={<RiNotification3Line />}
      />
      <TooltipComponent content="Profile" position='BottomCenter'> 
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
        onClick={() => handleClick('userProfile')}>
      
        <img src={avatar2} alt='' className='rounded-full w-8 h-8'/>
<p>
  <span>Hi,</span> {' '} <span>Lisa</span>
</p>
<MdKeyboardArrowDown className='text-gray-400 text-14'/>
        </div>
      </TooltipComponent>
      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
   
  )
}

export default Navbar