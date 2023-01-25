import React from 'react';

// Style
import './resume.css';

// Components
import Card from './Card.jsx';

// Data
const Data = [
  {
    id: 1,
    category: 'education',
    icon: 'icon-graduation',
    year: '2022',
    title: 'Formation Udemy - ReactJS | NextJS',
    desc: 'Apprentissage sur la plateforme Udemy des framework Javascript : ReactJs et NextJs.',
  },
  {
    id: 2,
    category: 'education',
    icon: 'icon-graduation',
    year: '2021',
    title: "Certification concepteur développeur d'application web - RNCP 6",
    desc: "Formation certifiante RNCP 6 - Le Wagon Paris - Bootcamp d'une durée de 9 semaines concentrées sur l'apprentissage de Ruby on Rails",
  },
  {
    id: 3,
    category: 'education',
    icon: 'icon-graduation',
    year: '2013 - 2017',
    title: 'Brevet de technicien supérieur',
    desc: 'Management des unités commerciales',
  },
  {
    id: 4,
    category: 'education',
    icon: 'icon-graduation',
    year: '2014',
    title: 'Baccalauréat',
    desc: 'Sciences et technologies du management et de la gestion',
  },
  {
    id: 5,
    category: 'experience',
    icon: 'icon-briefcase',
    year: 'sep 2019 - août 2021',
    title: 'Développeur web front-end',
    desc: 'Devanciers - Refonte et création de transition de site e-commerce. Analyse et optimisation SEO.',
  },
  {
    id: 6,
    category: 'experience',
    icon: 'icon-briefcase',
    year: 'nov 2018 - mars 2019',
    title: 'Auto-entrepreneur',
    desc: 'Shopify - Création et gestion de site e-commerce.',
  },
  {
    id: 7,
    category: 'experience',
    icon: 'icon-briefcase',
    year: 'jan 2018 - sep 2018',
    title: 'Consultant en recrutement',
    desc: 'Pragmatan - Sourcing et recrutement de profil IT.',
  },
  {
    id: 8,
    category: 'experience',
    icon: 'icon-briefcase',
    year: 'sept 2016 - dec 2017',
    title: 'Employé services',
    desc: 'Auchan - Gestion de rayon.',
  },
];

const Resume = () => {
  return (
    <section
      className='resume container section'
      id='resume'
    >
      <h2 className='section__title'>Experience</h2>

      <div className='resume__container grid'>
        <div className='timeline grid'>
          {Data.map((val, id) => {
            if (val.category === 'education') {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>

        <div className='timeline grid'>
          {Data.map((val, index) => {
            if (val.category === 'experience') {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
