import React from 'react';
import css from './Filter.module.css'

const Filter = ({value, onChange}) => {
  return (
    <label>
      <input
        className={css.filter}
        name="filter"
        placeholder="Search..."
        type="search"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
