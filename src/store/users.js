import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getObjectValuesByKey} from "../utils";
import {usersCat} from "../@mock/SampleData";
import {setAuthorization} from "../utils/Helpers/api_helper";

const usersGroups = getObjectValuesByKey(usersCat, "color");

export const fetchUsers = createAsyncThunk("users/fetchUsers", async users => {
    if (localStorage.getItem("jwt")) {
        setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
    }
    const response = await axios.get("/users", {users});
    return response.data;
});

export const addUser = createAsyncThunk("users/addUser", async (user, {dispatch, getState}) => {
    if (localStorage.getItem("jwt")) {
        setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
    }
    await axios.post("/users/add-user", {user});
    await dispatch(fetchUsers(getState().users.selectedUserGroups));
    return user;
});

export const updateUser = createAsyncThunk("users/updateUser", async (user, {dispatch, getState}) => {
    if (localStorage.getItem("jwt")) {
        setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
    }
    await axios.post("/users/update-user", {user});
    await dispatch(fetchUsers(getState().users.selectedUserGroups));
    return user;
});

export const updateFilter = createAsyncThunk("users/updateFilter", async (filter, {dispatch, getState}) => {
    if (getState().user.selectedUserGroups.includes(filter)) {
        await dispatch(fetchUsers(getState().user.selectedUserGroups.filter(i => i !== filter)));
    } else {
        await dispatch(fetchUsers([...getState().user.selectedUserGroups, filter]));
    }
    return filter;
});

export const updateAllFilters = createAsyncThunk("users/updateAllFilters", async (value, {dispatch}) => {
    if (value === true) {
        await dispatch(fetchUsers(usersGroups));
    } else {
        await dispatch(fetchUsers([]));
    }
    return value;
})

export const removeUser = createAsyncThunk("users/removeUser", async id => {
    if (localStorage.getItem("jwt")) {
        setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
    }
    await axios.delete("/users/remove-user", {id});
    return id;
})

export const appUsersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        selectedUser: {},
        selectedUserGroups: usersGroups
    },
    reducers: {
        selectUser: (state, action) => {
            state.selectedUser = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(updateFilter.fulfilled, (state, action) => {
                if (state.selectedUserGroups.includes(action.payload)) {
                    state.selectedUserGroups.splice(state.selectedUserGroups.indexOf(action.payload), 1);
                } else {
                    state.selectedUserGroups.push(action.payload);
                }
            })
            .addCase(updateAllFilters.fulfilled, (state, action) => {
                const value = action.payload;
                let selected;
                if (value === true) {
                    selected = usersGroups
                } else {
                    selected = [];
                }
                state.selectedUserGroups = selected;
            })
    }
})

export const {selectUser} = appUsersSlice.actions;

export default appUsersSlice.reducer;
