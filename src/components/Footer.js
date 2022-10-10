import React from 'react';
import './Footer.css'
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best  deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time fam.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
          </div>
          <div class='footer-link-items'>
           
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
          <div class='footer-link-items'>
            
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
     
              <i class='fab fa-typo3' />
            </Link>
          </div>
            <small class='website-rights'>Travel.org
              ©2022</small>
         
        </div>
      </section>
    </div>
   </div>
  );
}

export default Footer;
