import { FindLabel, FindInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setValueFilter } from 'redux/contacts/filterSlice';
import { selectValueFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const query = useSelector(selectValueFilter);

  const dispatch = useDispatch();

  const onInputChange = e => {
    const { value } = e.currentTarget;

    dispatch(setValueFilter(value));
  };

  return (
    <FindLabel>
      Finde contacts by name:
      <FindInput
        type="text"
        name="filter"
        value={query}
        placeholder="Search contact"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onInputChange}
      />
    </FindLabel>
  );
};
export default Filter;
