import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { Overlay, Modal } from './EditContactModal.styled';
import ContactEditorForm from 'components/contactEditorForm/ContactEditorForm';

const modalRoot = document.querySelector('#modal-root');

const EditContactModal = () => {
  const { contactId } = useParams();

  const { data: contacts } = useGetContactsQuery();

  const contactById = contacts.filter(contact => contact.id === contactId);

  return createPortal(
    <Overlay>
      <Modal>
        {contactById && (
          <ContactEditorForm
            initialValues={{
              name: contactById[0].name,
              number: contactById[0].number,
            }}
            id={contactId}
          />
        )}
      </Modal>
    </Overlay>,
    modalRoot
  );
};

export default EditContactModal;
