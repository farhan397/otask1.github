import { ADD_SHIFT_INFO } from '../constants'
const initialState = {
    shiftdata: []
}
export default function shiftinformation(state = [], action) {
    switch (action.type) {
        case ADD_SHIFT_INFO:
<<<<<<< HEAD
             console.warn("reducershift",action)
            return [
                ...state,
                {shiftdata: action.data2}
=======
            // console.warn("reducer",action)
            return [
                ...state,
                {shiftdata: action.data}
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
            ]
        default:
            return state
    }


}
