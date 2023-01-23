import React from 'react';

// Style
import './services.css';

// Assets
import Svg1 from '../../assets/service-1.svg';
import Svg2 from '../../assets/service-2.svg';
import Svg3 from '../../assets/service-4.svg';

// Data
const data = [
  {
    id: 1,
    image: Svg1,
    title: 'Intégration Front-end',
    description:
      'Intégration de vos maquettes en page web et landing page responsive.',
  },
  {
    id: 2,
    image: Svg2,
    title: 'Développement backend',
    description:
      "Développement d'API et d'application métier pour vos besoins.",
  },
  {
    id: 3,
    image: Svg3,
    title: 'SEO',
    description:
      'Analyse et recommandations SEO pour comprendre et optimiser le traffic de votre site.',
  },
];

const Services = () => {
  return (
    <section
      id='services'
      className='services container section'
    >
      <h2 className='section__title'>Services</h2>

      <div className='services__container grid'>
        {data.map(({ id, image, title, description }) => {
          return (
            <div
              key={id}
              className='services__card'
            >
              <img
                src={image}
                alt={title}
                className='services__img'
              />
              <h3 className='services__title'>{title}</h3>
              <p className='services__description'>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
