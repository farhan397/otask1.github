import {combineReducers} from 'redux'
import userinformation from './reducer'
<<<<<<< HEAD
import condinformation from './condreducer'
import shiftinformation from './shiftreducer'

=======
import condinformation from './reducer'
import shiftinformation from './reducer'
import clearinformation from './reducer'
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19

export default combineReducers({
    userinformation,
    condinformation,
    shiftinformation,
<<<<<<< HEAD
    
=======
    clearinformation
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
})