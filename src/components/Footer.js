import React, { useState } from 'react';
import './Footer.css'
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0 -9-]+(?:\.[a-zA-Z0-9-]+)*$/
  
  const [email, setEmail] = useState('');
  
  const [error, setError] = useState('');

  const [Msg, setMsg] = useState('');

  const checkEmail = (e) => {
    setEmail(e.target.value);
    if (regex.test(email) === false) {
      setError('Please enter valid email address');
    } else {
      setError('');
      return true;
    }
  }


  const submit = () => {
    if(email = '') {
      setMsg('Thank you for subscribing' + email);
    } else {
      setError('Email cant be blank')
    }
  }

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
            <p className='errormessage'>{ error}</p>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              onChange={checkEmail}
       
            />
            <p className='text-succes'>{ Msg}</p>
            <Button buttonStyle='btn--outline'onClick={submit} >Subscribe</Button>
            
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
      
          </div>
            <small class='website-rights'>Travel.org
              ©2022</small>
         
    </div>
  );
}

export default Footer;
