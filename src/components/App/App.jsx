import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/PhoneBook/PhoneBookForm/PhoneBookForm';
import { Section } from 'components/PhoneBook/PhoneBookSection/PhoneBookSection';
import { ContactsList } from 'components/PhoneBook/PhoneBookContacts/PhoneBookContacts';
import { Filter } from 'components/PhoneBook/PhoneBookFilter/PhoneBookFilter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    let contacts = this.state.contacts;
    let arrayName = contacts.map(contact => contact.name);
    arrayName.includes(contact.name)
      ? window.alert(`${contact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handlerRemoveButton = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));

    this.setState({ filter: '' });
  };

  render() {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter
            value={this.state.filter}
            onChange={this.changeFilter}
          ></Filter>
          <ContactsList
            contacts={visibleContacts}
            onClick={this.handlerRemoveButton}
          />
        </Section>
      </>
    );
  }
}

export default App;
