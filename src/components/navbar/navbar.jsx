
import '../../styles/navbar.css';
import data from './config.js';
import React, { useEffect, useState } from 'react'
import { ReactComponent as Menu } from '../../assets/resources/icon-hamburger.svg'
import Dropdown from './dropdown';

export const Navbar = (props) => {
    const buttons = data.buttons;
    const settings = props.settings;

    const [mobile, setMobile] = useState(null);
    const [status, setStatus] = useState(null);
    const [click, incrementClick] = useState(0);
    const [dropdown, dropdownHandle] = useState(false)
    function navBarStatus() {
        const h = window.scrollY;
        if (h >= 65) {
            setStatus("fixed")
        } else {
            setStatus("absolute")
        }
    }
    function changeWindowsState() {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        settings.windowSize = vw;
        if (vw <= 800) {
            setMobile(true)
         } else {
            setMobile(false)
        }
    }
    
    
    useEffect(() => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        settings.windowSize = vw;
        if (vw <= 800) {
            setMobile(true)
         } else {
            setMobile(false)
        }
        window.addEventListener('resize',  changeWindowsState );
        window.addEventListener('scroll', navBarStatus)
        return () => {
            window.removeEventListener('resize', changeWindowsState);
          };
      }, [])
    return(
        <header style={{position : (status === "fixed")? "fixed" : "absolute", background: (status === "fixed")? "#3DBEFF" : "transparent"  }}>
            <svg width="124" height="24" xmlns="http://www.w3.org/2000/svg">
                <path 
                    id="logo"
                    d={data.d} 
                    fill={data.fill} 
                    fillRule={data.fill_rule} 
                    onClick={() => { window.scrollTo(0, 0); }}/>
            </svg>
                 <nav 
                    id="desktop"
                    style={{display : (mobile === true)? "none" : "flex"}}
                >
                {buttons.map((button) => <a key={button}>{button}</a>)}
            </nav>
            <Menu 
                id="burger" 
                style={{display : 
                    (mobile === true)
                    ? "flex"
                    : "none"
                }}
                onClick={() => {
                    incrementClick(click + 1);
                    if(click % 2 === 0) {
                        dropdownHandle(false)
                    } else {
                        dropdownHandle(true)
                    }
                    
                }}
                />
                <Dropdown
                    isMobile = {mobile}
                    dropdown = {dropdown}
                />
           
        </header>
    )
}
export default Navbar;