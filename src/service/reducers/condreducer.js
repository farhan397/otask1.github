import { ADD_COND_INFO } from '../constants'
const initialState = {
    conddata: []
}
export default function condinformation(state = [], action) {
<<<<<<< HEAD
    console.log("actiontype",action.type,action.data1)
    switch (action.type) {
        case ADD_COND_INFO:
             console.warn("reducer",action.data1)
            return [
                ...state,
                {conddata: action.data1}
            ]
            // case CLEAR_ARRAY:
            //     // console.warn("reducer",action)
            //     state.pop()
                
            //     return [
            //         ...state,
                    
            //     ]
=======
    switch (action.type) {
        case ADD_COND_INFO:
            // console.warn("reducer",action)
            return [
                ...state,
                {conddata: action.data}
            ]
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
        default:
            return state
    }


}
