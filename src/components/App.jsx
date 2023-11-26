import { Component } from 'react';
import AddContactForm from './AddContactForm/AddContactForm';
import ListOfContacts from './ListOfContacts/ListOfContacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    // For change array in state , we need to create copy of array, change him, and then setState
    const copyArray = this.state.contacts.slice(0);
    copyArray.push(newUser);
    this.setState({contacts: copyArray});
  };


  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <AddContactForm createUser={this.createUser}/>
        {ListOfContacts(this.state.contacts)}
      </div>
    );
  }
}
