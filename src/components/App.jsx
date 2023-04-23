import React, { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { PhonebookForm } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };
  
  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <PhonebookForm
          onSave={this.addContact}
          contacts={contacts}
        />
        <h2>Contacts</h2>
        <Contacts contacts={contacts} filter={filter} />
      </div>
    );
  }
}
