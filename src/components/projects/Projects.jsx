import React, { useState } from 'react';

// Style
import './projects.css';

// Assets
import FitClub from '../../assets/demo-fit-club.png';
import ECommerce from '../../assets/demo-e-commerce.png';
import Dashboard from '../../assets/demo-dashboard.jpeg';
import FoodOrder from '../../assets/demo-food-order.png';
import LinkSvg from '../../assets/link.svg';

// Data
const Menu = [
  {
    id: 1,
    image: FitClub,
    title: 'Demo - The Fit Club',
    category: 'ReactJs',
    link: 'https://fit-club-demo-project.vercel.app/',
  },
  {
    id: 2,
    image: ECommerce,
    title: 'Demo - Site e-commerce - JSM Headphones',
    category: 'NextJs',
    link: 'https://nj-e-commerce-app.vercel.app/',
  },
  {
    id: 3,
    image: Dashboard,
    title: 'Demo - Dashboard',
    category: 'ReactJs',
    link: 'https://demo-syncfusion-dashboard-olivier-blz.netlify.app/',
  },
  {
    id: 4,
    image: FoodOrder,
    title: 'Demo - Food Order',
    category: 'ReactJs',
    link: 'https://food-order-demo-app.vercel.app/',
  },
];

const Projects = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItem = Menu.filter((currentEl) => {
      return currentEl.category === categoryItem;
    });

    setItems(updatedItem);
  };

  return (
    <section
      className='work container section'
      id='work'
    >
      <h2 className='section__title'>Mes Projets</h2>
      <div className='work__filters'>
        <span
          className='work__item'
          onClick={() => setItems(Menu)}
        >
          Tous les projects
        </span>
        <span
          className='work__item'
          onClick={() => filterItem('ReactJs')}
        >
          ReactJs
        </span>
        <span
          className='work__item'
          onClick={() => filterItem('NextJs')}
        >
          NextJs
        </span>
      </div>
      <div className='work__container grid'>
        {items.map((el) => {
          const { id, image, title, category, link } = el;
          return (
            <div
              className='work__card'
              key={id}
            >
              <div className='work__thumbnail'>
                <img
                  src={image}
                  alt={title}
                  className='work__img'
                />
                <div className='work__mask'></div>
              </div>

              <span className='work__category'>{category}</span>
              <h3 className='work__title'>{title}</h3>
              <a
                href={link}
                target='_blank'
                className='work__button'
              >
                <img
                  src={LinkSvg}
                  alt='lien'
                  className='icon-link'
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
