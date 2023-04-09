import { ADD_COND_INFO,  ADD_USER_INFO, CLEAR_ARRAY } from '../constants'
const initialState = {
    infodata: [],
    conddata: []
}
export default function clearinformation(state = [], action) {
    switch (action.type) {
        case CLEAR_ARRAY:
            // console.warn("reducer",action)
            return [
                ...state,
                {infodata: []},
                {conddata: []}
            ]
           
            
        default:
            return state
    }


}
