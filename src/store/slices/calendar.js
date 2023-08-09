import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../index';
import axios from '../../utils/axios';
import apiErrorHelper from '../../utils/apiErrorHelper';

const initialState = {
  isLoading: false,
  error: null,
  events: [],
  event: null,
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

    // Очистка событий
    resetEvents(state) {
      state.isLoading = false;
      state.events = [];
    },

    getEventSuccess(state, action) {
      state.isLoading = false;
      state.event = action.payload;
    },

    // Создание события
    createEventSuccess(state, action) {
      const newEvent = action.payload;
      state.isLoading = false;
      state.events = [...state.events, newEvent];
    },

    // Обновление события
    updateEventSuccess(state) {
      state.isLoading = false;
    },

    // Удаление события
    deleteEventSuccess(state) {
      state.isLoading = false;
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
      state.event = null;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { openModal, closeModal, selectEvent } = slice.actions;

export function getEvents(start, end) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`/calendar?start=${start}&end=${end}`);
      dispatch(slice.actions.getEventsSuccess(response.data.data.map((item) => (
        {
          /* Обработка события */
          id: item.id,
          title: item.title,
          start: item.start,
          end: item.end,
          allDay: item.allDay === 'true',
          calendar: item.calendar,
          extendedProps: {
            color: item.color
          },
          description:item.description,
          display: item.display,
          users: item.users && item?.users !== "" ? item.users.split(',').map((id)=> parseInt(id, 10)) : '',
          creator: item.creator
        }
      ))));
    } catch (error) {
      apiErrorHelper(error)
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getEventById(eventid) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`/calendar/${eventid}`);
      dispatch(slice.actions.getEventSuccess({...response.data.data, users: response.data.data.users && response.data.data.users !== "" ? response.data.data.users.split(',').map((id)=> parseInt(id, 10)) : ''}));
    } catch (error) {
      apiErrorHelper(error)
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getDob(event) {
  return () => {
    dispatch(slice.actions.getEventSuccess(event));
  };
}

export function createEvent(newEvent) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.post('/calendar', newEvent);
    } catch (error) {
      apiErrorHelper(error)
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function updateEvent(id, updateEvent) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.patch('/calendar', {... updateEvent, id});
      dispatch(slice.actions.updateEventSuccess());
    } catch (error) {
      apiErrorHelper(error)
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function deleteEvent(id) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.delete('/calendar', {
        data: {
          id
        }
      });
      dispatch(slice.actions.deleteEventSuccess());
    } catch (error) {
      apiErrorHelper(error)
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function resetEvents() {
  dispatch(slice.actions.resetEvents());
}
