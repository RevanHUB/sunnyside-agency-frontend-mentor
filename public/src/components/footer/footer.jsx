import '../../styles/footer.css'
import React from 'react'
import { data } from './config.js'
import { ReactComponent as Instagram } from '../../assets/resources/icon-instagram.svg' ;
import { ReactComponent as Facebook } from '../../assets/resources/icon-facebook.svg' ;
import { ReactComponent as Twitter } from '../../assets/resources/icon-twitter.svg' ;
import { ReactComponent as Pinterest } from '../../assets/resources/icon-pinterest.svg' ;
export const Footer = (props) => {
    let navegation = data.buttons;
    return (
        <footer id={props.id}>
             <svg className='logo' width="124" height="24" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d={data.d} 
                    fill={data.fill} 
                    fillRule={data.fill_rule} 
                    onClick={() => { window.scrollTo(0, 0); }}/>
            </svg>
            <nav>
                {navegation.map((button) => <a key={button} href="">{button}</a>)}
            </nav>
            <div className='links__media'>
                <Facebook />
                <Instagram />
                <Twitter />
                <Pinterest />
            </div>
        </footer>
    )
}

export default Footer;
