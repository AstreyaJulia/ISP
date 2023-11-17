import React from "react";
import PropTypes from "prop-types";
import NewEditEventForm from "./NewEditEventForm";
import SlideOverStickyFooter from "./SlideOverStickyFooter";

const EventsModal = ({ open, setOpen, event, isEdit, user, updateEvents }) => (
    <SlideOverStickyFooter open={open} setOpen={setOpen} title={isEdit ? "Редактировать событие" : "Создать событие"} size='2xl' onSlideOverClose={setOpen}>
      <NewEditEventForm isEdit={isEdit} currentEvent={event ?? null} onCloseModal={setOpen} user={user} updateEvents={updateEvents} />
    </SlideOverStickyFooter>
  );

EventsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  event: PropTypes.object,
  isEdit: PropTypes.bool,
  user: PropTypes.object,
  updateEvents: PropTypes.func
};

EventsModal.defaultProps = {
  event: {},
  isEdit: false,
  user: {},
  updateEvents: () => null
};

export default EventsModal;
