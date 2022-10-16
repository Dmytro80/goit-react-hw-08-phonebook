const PhonebookForm = ({ value, onInputChange, onSubmitPhonebookForm }) => {
  return (
    <form onSubmit={onSubmitPhonebookForm}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onInputChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default PhonebookForm;
