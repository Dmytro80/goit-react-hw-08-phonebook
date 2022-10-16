import PropTypes from 'prop-types';
import { FindLabel, FindInput } from './Filter.styled';

const Filter = ({ filter, onInputChange }) => {
  return (
    <FindLabel>
      Finde contacts by name:
      <FindInput
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onInputChange}
      />
    </FindLabel>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
