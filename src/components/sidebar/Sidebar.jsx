import React, { useState } from 'react';

// Style
import './sidebar.css';

// Assets
import Logo from '../../assets/OB.svg';

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <aside className={toggleMenu ? 'aside show-menu' : 'aside'}>
        <a
          href='#home'
          className='nav__logo'
        >
          <img
            src={Logo}
            alt='logo'
          />
        </a>

        <nav className='nav'>
          <div className='nav__menu'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a
                  href='#home'
                  className='nav__link'
                >
                  <i className='icon-home'></i>
                </a>
              </li>

              <li className='nav__item'>
                <a
                  href='#about'
                  className='nav__link'
                >
                  <i className='icon-user-following'></i>
                </a>
              </li>

              <li className='nav__item'>
                <a
                  href='#services'
                  className='nav__link'
                >
                  <i className='icon-briefcase'></i>
                </a>
              </li>

              <li className='nav__item'>
                <a
                  href='#resume'
                  className='nav__link'
                >
                  <i className='icon-graduation'></i>
                </a>
              </li>

              <li className='nav__item'>
                <a
                  href='#work'
                  className='nav__link'
                >
                  <i className='icon-layers'></i>
                </a>
              </li>

              <li className='nav__item'>
                <a
                  href='#contact'
                  className='nav__link'
                >
                  <i className='icon-bubble'></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className='nav__footer'>
          <span className='copyright'>&copy; 2022 - 2023.</span>
        </div>
      </aside>

      <div
        className={toggleMenu ? 'nav__toggle nav__toggle-open' : 'nav__toggle'}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <i className='icon-menu'></i>
      </div>
    </>
  );
};

export default Sidebar;
