import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as userActionTypes from '../constants/userActionsTypes'
import * as userActions from '../actions/userActions';
import * as userService from '../../services/userService';

function *fetchUser(action) {
    try{
        const user = yield call(userService.fetchUser, action.credentials);
        if (user.length === 0){
            yield put(userActions.loginFailed());
        }
        else {
            yield put(userActions.loginApproved(user[0]))
        }
    
    }
    catch (error) {
        console.log(error);
    }
}

function *userSaga() {
    yield takeEvery(userActionTypes.FETCH_USER, fetchUser)
}


export default userSaga;