import React from 'react';
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return(
      <footer className="bck_black">
            <Fade triggerOnce delay={500}> 
              <div className="font_righteous footer_logo_venue">The Summit</div>
              <div className="footer_copyright">
                  The Summit 2023 all rights reserved
              </div>
              </Fade>
      </footer>
  )
}

export default Footer;