import { ADD_USER_INFO, CLEAR_ARRAY } from '../constants'
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

            case CLEAR_ARRAY:
                // console.warn("reducer",action)
                state.pop();
                
                return [
                    ...state,
                    
                ]
        default:
            return state
    }


}
