import {combineReducers} from 'redux'
import AuthReducers from './AuthReducers'

export default combineReducers({
    AuthResponse: AuthReducers
})