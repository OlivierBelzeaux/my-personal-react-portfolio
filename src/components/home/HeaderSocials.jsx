import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const HeaderSocials = () => {
  return (
    <div className='home__socials'>
      <a
        href='https://www.linkedin.com/in/olivier-belzeaux/'
        className='home__socials-link'
        target='_blank'
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a
        href='https://github.com/OlivierBelzeaux'
        className='home__socials-link'
        target='_blank'
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default HeaderSocials;
