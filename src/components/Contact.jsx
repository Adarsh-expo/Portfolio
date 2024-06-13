import React from 'react'
import '../styles/contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
function Contact() {
    const form=useRef()
    const sendemail=(e)=>{
e.preventDefault();
emailjs.sendForm('service_29c3lgc', 'template_f1kwf2d', form.current, {
    publicKey: 'Y3JLht6ueWGFkFdDp',
  })
  .then(
    () => {
      console.log('SUCCESS!');
    },
    (error) => {
      console.log('FAILED...', error.text);
    },
  );


    }
  return (
    <div><form id='abc' ref={form} onSubmit={sendemail} className='contact'>
        
        <span className='contact2'>Contact</span>
        <span className='contact5'>Fill out the form to contact me</span>
    <input  className='contact3'  type='text' placeholder='your name'  name="user_name"/>
    <input className='contact3'    type='email' placeholder='Your email'  name="user_email"/>
    <textarea className='contact4'  placeholder='text here to me' name='message'  cols='6'></textarea>
    
    <button type='submit' className='submit'>Submit</button>
    </form></div>
    
  )
}

export default Contact