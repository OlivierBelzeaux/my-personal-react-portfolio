import React from 'react';

// Style
import './home.css';

// Assets
import Me from '../../assets/photo.jpg';

// Components
import HeaderSocials from './HeaderSocials.jsx';
import ScrollDown from './ScrollDown.jsx';
import Shapes from './Shapes.jsx';

const Home = () => {
  return (
    <section
      className='home container'
      id='home'
    >
      <div className='intro'>
        <img
          src={Me}
          alt='Me'
          className='home__img'
        />
        <h1 className='home__name'>Olivier Belzeaux</h1>
        <span className='home__education'>Développeur React</span>

        <HeaderSocials />

        <a
          href='#contact'
          className='btn'
        >
          Contactez-moi
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
