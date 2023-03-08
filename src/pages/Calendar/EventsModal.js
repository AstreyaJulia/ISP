import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal';
import BasicButton from '../../components/BasicButton';

const EventsModal = ({ open, setOpen }) => {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <Modal setOpen={setOpen} open={open}  size='lg' >
      <Modal.Toolbar title={isEdit ? 'Редактировать событие' : 'Создать событие'} />

      <Modal.Body>
        <div>
          <BasicButton size='medium' variant='success' type='submit' >Сохранить событие</BasicButton>
        </div>
      </Modal.Body>

    </Modal>
  );
};

EventsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default EventsModal;
