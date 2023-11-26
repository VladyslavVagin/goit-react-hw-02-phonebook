import React from 'react';
import { Component } from 'react';
import css from './AddContactForm.module.css';

class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form className={css.contactForm} onSubmit={this.handleSubmit}>
          <label className={css.label}>
            <input
              type="text"
              name="name"
              className={css.input}
              value={name}
              required
              placeholder="Name"
              onChange={this.handleChange}
            />
          </label>
          <label className={css.label}>
            <input
              type="tel"
              name="number"
              className={css.input}
              value={number}
              required
              placeholder="Number"
              onChange={this.handleChange}
            />
          </label>
          <button className={css.addContactBtn}>Add contact</button>
        </form>
      </div>
    );
  }
}

export default AddContactForm;
