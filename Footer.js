import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import insta from '../images/icon-instagram.svg'
import pint from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'

export default function Footer() {
  return (
    <div className='footer-container'>
        <div classname='footer-element'>
            <img src={logo} alt="logo" />
        </div>
        <div classname='footer-element'>
            <h1>Features</h1>
                <ul>
                    <li>link shortening</li>
                    <li>branded links</li>
                    <li>Analytics</li>
                </ul>
        </div>
        <div classname='footer-element'>
            <h1>Resources</h1>
                <ul>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
        </div>
        <div classname='footer-element'>
            <h1>Company</h1>
                <ul>
                    <li>About</li>
                    <li>Our Teams</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
        </div>
        <div classname='footer-element1'>
                
                    <img src={facebook} alt="fb" />
                    <img src={insta} alt="IG" />
                    <img src={pint} alt="PT" />
                    <img src={twitter} alt="tw" />
                
        </div>


    </div>
  )
}
