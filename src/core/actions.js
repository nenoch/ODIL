import { createAction } from "redux-actions";

export const ACTIONS = {
    LOGIN: "[User] Login",
    LOGOUT: "[User] Logout",
    LOADED: "[User/Day] Page data loaded",
    EDIT_DAY: "[Day] Edit Day",
    DELETE_DAY: "[Day] Delete Day",
    ADD_DAY: "[Day] Add Day",
    UPDATE_DAYS: "[Day] Update Days"
};

const dataPayloadCreator = (data) => {
    return data;
};

const idPayloadCreator = (id) => {
    return id;
};

export const login = createAction(
    ACTIONS.LOGIN,
    dataPayloadCreator
)

export const logout = createAction(
    ACTIONS.LOGOUT,
    null
)

export const loaded = createAction(
    ACTIONS.LOADED,
    dataPayloadCreator
)

export const editDay = createAction(
    ACTIONS.EDIT_DAY,
    dataPayloadCreator
)

export const addDay = createAction(
    ACTIONS.ADD_DAY,
    dataPayloadCreator
)

export const deleteDay = createAction(
    ACTIONS.DELETE_DAY,
    idPayloadCreator
)

export const updateDays = createAction(
    ACTIONS.UPDATE_DAYS,
    dataPayloadCreator
)