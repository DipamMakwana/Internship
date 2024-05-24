import React from 'react'
import './Footer.css'
// import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import vastra_logo from '../Assets/vastra_logo.png'

const Footer = () => {
  return (
    <div className='footer'>
 <div className="footer-logo">
            <img src={vastra_logo} alt="" />
            <p>VASTRA</p>
        </div>
        <ul className="footer-links">
            <li><a href='https://www.shoppersstop.com/'>Company</a></li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>        
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-conatiner">
            <a href="https://www.instagram.com">
            <img src={instagram_icon} alt="Instagram" />
            </a>
            </div>
            
            <div className="footer-icons-conatiner">
            <a href="https://in.pinterest.com/">
                <img src={pintester_icon} alt="Pintrest" />
                </a>    
            </div>
            <div className="footer-icons-conatiner">
                <a href='https://www.whatsapp.com/'>
                <img src={whatsapp_icon} alt="Whatsapp" />
                </a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer