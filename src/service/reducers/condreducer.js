import { ADD_COND_INFO } from '../constants'
const initialState = {
    conddata: []
}
export default function condinformation(state = [], action) {
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
        default:
            return state
    }


}
