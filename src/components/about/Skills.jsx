import React from 'react';

const Skills = (props) => {
  return (
    <div className='skills__data'>
      <div className='skills__titles'>
        <h3 className='skills__name'>{props.name}</h3>
        <span className='skills__number'>{props.number} %</span>
      </div>
      <div className='skills__bar'>
        <span
          className='skills__percentage'
          style={{ width: `${props.number}%` }}
        ></span>
      </div>
    </div>
  );
};

export default Skills;
