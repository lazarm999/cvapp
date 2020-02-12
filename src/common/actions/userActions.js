
import * as userActions from '../constants/userActionsTypes';

export const loginRequest = credentials => ({
    type: userActions.FETCH_USER,
    credentials
})

export const loginApproved = user => ({
    type: userActions.LOGIN_SUCCESSFUL,
    user
})

export const loginFailed = () => ({
    type: userActions.LOGIN_FAIL
})