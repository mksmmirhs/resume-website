import React from 'react';

// import data ]
import { contact } from '../data';
//import logo
import Logo from '../assets/img/logo.svg';
// import components
import Social from './Social';

const Contact = () => {
  return (
    <section
      className="section before:content-ornament
    before:flex  before:justify-center lg:before:mb-[44px]"
      id="contact"
    >
      <div className="container mx-auto">
        <h2 className="section-title text-accent">{contact.title}</h2>
        <p className="section-subtitle">{contact.subtitle}</p>
        {/* logo */}
        <div className="max-w-[200px] lg:max-w-xs mx-auto mb-28">
          <img className="w-full" src={Logo} alt="" />
        </div>
        <div className="flex justify-center">
          <Social />
        </div>
      </div>
    </section>
  );
};

export default Contact;
