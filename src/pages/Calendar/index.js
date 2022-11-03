import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ruLocale from '@fullcalendar/core/locales/ru';

import { events } from '../../@mock/SampleData';
import BasicPage from '../pagesLayouts/BasicPage';
import Card from '../../components/Card';
import { CalendarToolbar } from './CalendarToolbar';
import { useDispatch, useSelector } from '../../store';
import { closeModal, openModal } from '../../store/slices/calendar';
import EventsModal from './EventsModal';

const selectedEventSelector = (state) => {
  const { events, selectedEventId } = state.calendar;
  if (selectedEventId) {
    return events.find((_event) => _event.id === selectedEventId);
  }
  return null;
};

const Calendar = () => {
  const dispatch = useDispatch();

  const calendarRef = useRef(null);
  const [date, setDate] = useState(new Date());
  const [viewDates, setViewDates] = useState({ start: new Date(), end: new Date() });
  const [view, setView] = useState('dayGridMonth');

  const selectedEvent = useSelector(selectedEventSelector);
  /*
    const { events, isOpenModal} = useSelector((state) => state.calendar);

   */
  const { isOpenModal } = useSelector((state) => state.calendar);

  const handleClickDatePrev = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleClickDateNext = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleClickToday = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleChangeView = (newView) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const handleAddEvent = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <BasicPage title="Календарь" className="full-height-page mx-auto px-5">
      <Card classname="calendar-module overflow-visible">
        <CalendarToolbar
          date={date}
          view={view}
          onNextDate={handleClickDateNext}
          onPrevDate={handleClickDatePrev}
          onToday={handleClickToday}
          onChangeView={handleChangeView}
          onAddEvent={handleAddEvent}
          dates={viewDates}
        />
        <FullCalendar
          events={events}
          plugins={[listPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={view}
          datesSet={(arg) => {
            setViewDates({ start: arg.start, end: arg.end });
          }}
          headerToolbar={false}
          editable
          ref={calendarRef}
          rerenderDelay={10}
          initialDate={date}
          dayMaxEvents
        eventTimeFormat={{ // like '14:30:00'
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false
        }}
          navLinks
          eventDisplay="block"
          allDayMaintainDuration
          locale={ruLocale}
          eventClassNames={({ event: calendarEvent }) => [
            `fc-event-${calendarEvent._def.extendedProps.calendar}`,
            `fc-event-${calendarEvent._def.ui.display}`,
          ]} // Фоновый цвет событий
        />
      </Card>
      <EventsModal open={isOpenModal} setOpen={handleCloseModal} event={events[0]} />
    </BasicPage>
  );
};

export default Calendar;
