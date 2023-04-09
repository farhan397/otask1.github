import {combineReducers} from 'redux'
import userinformation from './reducer'
import condinformation from './reducer'
import shiftinformation from './reducer'
import clearinformation from './reducer'

export default combineReducers({
    userinformation,
    condinformation,
    shiftinformation,
    clearinformation
})