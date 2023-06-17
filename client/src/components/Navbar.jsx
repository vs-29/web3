import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';



const Reload= (e) => {
    
    e.preventDefault();
    
      window.location.reload();
    
  }

const Navbar= () =>{
     const [toggleMenu,setToggleMenu]=useState(false);



    return(
        
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt='logo' className='w-32 cursor-pointer'/> 
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                
                <li  className={`mx-4 cursor-pointer`}>
                <Link to="https://coinmarketcap.com/">
                 Market
                </Link>
                </li>
                <li  className={`mx-4 cursor-pointer`}>
                <Link to="https://ethereum.org/en/developers/tutorials/">
                 Tutorial
                </Link>
                </li>
                <li  className={`mx-4 cursor-pointer`} onClick={(e)=>Reload(e)}>
                 Home
                </li>
            </ul>
            <div className='flex relative'>
                 {toggleMenu
                 ?<AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=>setToggleMenu(false)}/>
                 :<HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=>setToggleMenu(true)}/>
                 }
                 {
                    toggleMenu && (
                        <ul className='z-10 fixed top-0 right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate=slide'>
                            <li className='text-xl w-full my-2'>
                                <AiOutlineClose onClick={()=>setToggleMenu(false)}/>
                            </li>
                            <li  className={`mx-4 cursor-pointer`}>
                            <Link to="https://coinmarketcap.com/">
                            Market
                            </Link>
                            </li>
                            <li  className={`mx-4 cursor-pointer`}>
                            <Link to="https://ethereum.org/en/developers/tutorials/">
                            Tutorial
                            </Link>
                            </li>
                            <li  className={`mx-4 cursor-pointer`} onClick={(e)=>Reload(e)}>
                             Home
                             </li>
                        </ul>
                    )
                 }
            </div>
        </nav>
    );
}

export default Navbar;