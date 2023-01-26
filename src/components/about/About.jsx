import React from 'react';

// Style
import './about.css';

// Assets
import Me from '../../assets/photo.jpg';
import Skills from './Skills.jsx';

// CV
import CV from '../../doc/Olivier_Belzeaux_CV_React.pdf';

const About = () => {
  return (
    <section
      id='about'
      className='about container section'
    >
      <h2 className='section__title'>À Propos</h2>

      <div className='about__container grid'>
        {/* <img
          src={Me}
          alt='about image'
          className='about__img'
        /> */}

        <div className='about__data grid'>
          <div className='about__info'>
            <p className='about__description'>
              Bonjour, je m'appelle Olivier Belzeaux, j'ai 26 ans et je suis
              développeur web. J'ai récemment obtenu une certification sur le
              langage Ruby on Rails grâce à la formation 'Le Wagon' à Paris. Je
              me concentre actuellement sur le framework React. Je suis
              passionné par la programmation et je suis impatient de mettre en
              pratique mes nouvelles connaissances pour relever de nouveaux
              défis professionnels. N'hésitez pas à me contacter si vous avez
              besoin de mes compétences en tant que développeur web.
            </p>
            <a
              href={CV}
              download='CV - Olivier Belzeaux - Développeur React'
              className='btn'
            >
              Télécharger mon CV
            </a>
          </div>
          <div className='about__skills grid'>
            <Skills
              name='Frontend'
              number='90'
            />
            <Skills
              name='Backend'
              number='60'
            />
            <Skills
              name='SEO'
              number='90'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
