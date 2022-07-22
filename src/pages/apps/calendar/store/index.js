import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getObjectValuesByKey} from "../../../../utils";
import {calendCat} from "../../../../@mock/SampleData";
import {setAuthorization} from "../../../../utils/Helpers/api_helper";

const calendarColors = getObjectValuesByKey(calendCat, "color");

export const fetchEvents = createAsyncThunk("appCalendar/fetchEvents", async calendars => {
    if (localStorage.getItem("jwt")) {
        setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
    }
    const response = await axios.get("/apps/calendar/events", {calendars});
    return response.data;
});

export const addEvent = createAsyncThunk("appCalendar/addEvent", async (event, {dispatch, getState}) => {
    if (localStorage.getItem("jwt")) {
        setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
    }
    await axios.post("/apps/calendar/add-event", {event});
    await dispatch(fetchEvents(getState().calendar.selectedCalendars));
    return event;
});

export const updateEvent = createAsyncThunk("appCalendar/updateEvent", async (event, {dispatch, getState}) => {
    if (localStorage.getItem("jwt")) {
        setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
    }
    await axios.post("/apps/calendar/update-event", {event});
    await dispatch(fetchEvents(getState().calendar.selectedCalendars));
    return event;
});

export const updateFilter = createAsyncThunk("appCalendar/updateFilter", async (filter, {dispatch, getState}) => {
    if (getState().calendar.selectedCalendars.includes(filter)) {
        await dispatch(fetchEvents(getState().calendar.selectedCalendars.filter(i => i !== filter)));
    } else {
        await dispatch(fetchEvents([...getState().calendar.selectedCalendars, filter]));
    }
    return filter;
});

export const updateAllFilters = createAsyncThunk("appCalendar/updateAllFilters", async (value, {dispatch}) => {
    if (value === true) {
        await dispatch(fetchEvents(calendarColors));
    } else {
        await dispatch(fetchEvents([]));
    }
    return value;
})

export const removeEvent = createAsyncThunk("appCalendar/removeEvent", async id => {
    if (localStorage.getItem("jwt")) {
        setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
    }
    await axios.delete("/apps/calendar/remove-event", {id});
    return id;
})

export const appCalendarSlice = createSlice({
    name: "appCalendar",
    initialState: {
        events: [],
        selectedEvent: {},
        selectedCalendars: calendarColors
    },
    reducers: {
        selectEvent: (state, action) => {
            state.selectedEvent = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.events = action.payload;
            })
            .addCase(updateFilter.fulfilled, (state, action) => {
                if (state.selectedCalendars.includes(action.payload)) {
                    state.selectedCalendars.splice(state.selectedCalendars.indexOf(action.payload), 1);
                } else {
                    state.selectedCalendars.push(action.payload);
                }
            })
            .addCase(updateAllFilters.fulfilled, (state, action) => {
                const value = action.payload;
                let selected;
                if (value === true) {
                    selected = calendarColors
                } else {
                    selected = [];
                }
                state.selectedCalendars = selected;
            })
    }
})

export const {selectEvent} = appCalendarSlice.actions;

export default appCalendarSlice.reducer;