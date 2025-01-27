import "./FooterStyles.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem" }} />
                    <div>
                        <p>3418 Pritchett Pl.</p>
                        <p>Coquitlam, BC.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem" }} />
                        236-234-8045
                    </h4>
                    
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem" }} />
                        khuckelly@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <div className="social">
                <FaLinkedin size={20} style={{color:"#fff", marginRight:"1rem" }} />
                <FaGithub size={20} style={{color:"#fff", marginRight:"1rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer