import PropTypes, { string } from 'prop-types';
import {
  ContactList,
  ContactItem,
  ContactItemInfo,
  RemoveButton,
} from './PhoneBookContacts.styled';

export const ContactsList = ({ contacts, onClick }) => {
  return (
    <ContactList className="contact-list">
      {contacts.map(({ name, number, id }) => (
        <ContactItem className="contact" key={id}>
          <ContactItemInfo>
            {name}: {number}
          </ContactItemInfo>
          <RemoveButton type="button" onClick={() => onClick(name)} name={name}>
            Delete
          </RemoveButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: string.isRequired,
      number: string.isRequired,
      id: string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
