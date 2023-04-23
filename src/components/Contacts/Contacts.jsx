import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" key={id} onClick={() => onDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
