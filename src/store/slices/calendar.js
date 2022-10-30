import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../index';
import axios from '../../utils/axios';

const initialState = {
  isLoading: false,
  error: null,
  events: [],
  isOpenModal: false,
  selectedEventId: null,
};

const slice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    // Начало загрузки
    startLoading(state) {
      state.isLoading = true;
    },

    // Получили ошибку
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Получение событий
    getEventsSuccess(state, action) {
      state.isLoading = false;
      state.events = action.payload;
    },

    // Создание события
    createEventSuccess(state, action) {
      const newEvent = action.payload;
      state.isLoading = false;
      state.events = [...state.events, newEvent];
    },

    // Обновление события
    updateEventSuccess(state, action) {
      const event = action.payload;
      const updateEvent = state.events.map((_event) => {
        if (_event.id === event.id) {
          return event;
        }
        return _event;
      });

      state.isLoading = false;
      state.events = updateEvent;
    },

    // Удаление события
    deleteEventSuccess(state, action) {
      const { eventId } = action.payload;
      state.events = state.events.filter((event) => event.id !== eventId);
    },

    // Выбор события
    selectEvent(state, action) {
      const eventId = action.payload;
      state.isOpenModal = true;
      state.selectedEventId = eventId;
    },

    // Открыть модал
    openModal(state) {
      state.isOpenModal = true;
    },

    // Закрыть модал
    closeModal(state) {
      state.isOpenModal = false;
      state.selectedEventId = null;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { openModal, closeModal, selectEvent } = slice.actions;

export function getEvents() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/calendar/events');
      dispatch(slice.actions.getEventsSuccess(response.data.events));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function createEvent(newEvent) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/calendar/events/new', newEvent);
      dispatch(slice.actions.createEventSuccess(response.data.event));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function updateEvent(eventId, updateEvent) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/calendar/events/update', {
        eventId,
        updateEvent,
      });
      dispatch(slice.actions.updateEventSuccess(response.data.event));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function deleteEvent(eventId) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.post('/calendar/events/delete', { eventId });
      dispatch(slice.actions.deleteEventSuccess({ eventId }));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
