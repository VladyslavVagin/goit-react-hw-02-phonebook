import { Component } from 'react';
import AddContactForm from './AddContactForm/AddContactForm';
import ListOfContacts from './ListOfContacts/ListOfContacts';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  createUser = data => {
    let namesOfUsers = [];
    namesOfUsers = this.state.contacts.map(userName => userName.name);
    if (!namesOfUsers.includes(data.name)) {
      const newUser = {
        ...data,
        id: nanoid(),
      };

      // For change array in state , we need to create copy of array, change him, and then setState
      const copyArray = this.state.contacts.slice(0);
      copyArray.push(newUser);
      return this.setState({ contacts: copyArray });
    } else {
      alert(`User ${data.name} already exist`);
    }
  };

  changeFilter = e => this.setState({ filter: e.target.value });

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (e) => {
    console.log(e);
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.filterContacts();
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <AddContactForm createUser={this.createUser} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        {ListOfContacts(visibleContacts)}
      </div>
    );
  }
}
