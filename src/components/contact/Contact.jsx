import React from 'react';

// Style
import './contact.css';

const Contact = () => {
  return (
    <section
      className='contact container section'
      id='contact'
    >
      <h2 className='section__title'>Me contacter</h2>

      <div className='contact__container grid'>
        {/* <div className='contact__info'>
          <h3 className='contact__title'>Me contacter</h3>
          <p className='contact__details'></p>
        </div> */}

        <form
          action='https://formspree.io/f/myyazqol'
          method='POST'
          className='contact__form'
        >
          <div className='contact__form-group'>
            <div className='contact__form-div'>
              <input
                type='text'
                className='contact__form-input'
                placeholder='Nom'
                name='name'
              />
            </div>
            <div className='contact__form-div'>
              <input
                type='email'
                className='contact__form-input'
                placeholder='Email'
                name='email'
              />
            </div>
            <div className='contact__form-div'>
              <input
                type='text'
                className='contact__form-input'
                placeholder='Subject'
                name='subject'
              />
            </div>
            <div className='contact__form-div contact__form-area'>
              <textarea
                className='contact__form-input'
                placeholder='Message'
                id=''
                cols='30'
                rows='10'
                name='message'
              ></textarea>
            </div>
            <button
              type='submit'
              className='btn'
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
