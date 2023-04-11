<<<<<<< HEAD
import { ADD_USER_INFO, CLEAR_ARRAY } from '../constants'
=======
import { ADD_USER_INFO } from '../constants'
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
const initialState = {
    infodata: []
}
export default function userinformation(state = [], action) {
    switch (action.type) {
        case ADD_USER_INFO:
            // console.warn("reducer",action)
            return [
                ...state,
                {infodata: action.data}
            ]
<<<<<<< HEAD

            case CLEAR_ARRAY:
                // console.warn("reducer",action)
                state.pop();
                
                return [
                    ...state,
                    
                ]
=======
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
        default:
            return state
    }


}
