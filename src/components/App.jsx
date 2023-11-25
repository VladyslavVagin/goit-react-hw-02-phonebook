import { Component } from 'react';
import AddContactForm from './AddContactForm/AddContactForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    this.state.contacts.push(newUser);
  };

  render() {
    return (
      <div>
        <AddContactForm />
      </div>
    );
  }
}
