import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/PhoneBook/PhoneBookForm/PhoneBookForm';
import { Section } from 'components/PhoneBook/PhoneBookSection/PhoneBookSection';
import { ContactsList } from 'components/PhoneBook/PhoneBookContacts/PhoneBookContacts';
import { Filter } from 'components/PhoneBook/PhoneBookFilter/PhoneBookFilter';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? ''
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    setContacts(contacts);
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    let arrayName = contacts.map(contact => contact.name);
    arrayName.includes(contact.name)
      ? window.alert(`${contact.name} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const handlerRemoveButton = name => {
    setContacts(contacts => contacts.filter(contact => contact.name !== name));

    setFilter('');
  };

  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter}></Filter>
        <ContactsList
          contacts={visibleContacts}
          onClick={handlerRemoveButton}
        />
      </Section>
    </>
  );
}
