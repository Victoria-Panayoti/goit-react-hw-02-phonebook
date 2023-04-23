import PropTypes from 'prop-types';

export const Filter = ({ search, onSearch }) => (
  <label>
    Find contact by name:
    <input type="text" value={search} onChange={onSearch} />
  </label>
);

Filter.propTypes = {
    onSearch: PropTypes.func.isRequired,
}