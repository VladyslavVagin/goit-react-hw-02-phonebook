import React from 'react';
import css from './ContactUser.module.css'

const ContactUser = (contact) => {
  const { id, name, number } = contact;
  return (
    <li key={id} className={css.user}>
      <h3>{name}:</h3>
      <p>{number}</p>
      <button type='button' className={css.deleteBtn}>Delete</button>
    </li>
  );
};

export default ContactUser;
