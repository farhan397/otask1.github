import {ADD_USER_INFO} from '../constants'
import {ADD_COND_INFO} from '../constants'
import {ADD_SHIFT_INFO} from '../constants'
import {CLEAR_ARRAY} from '../constants'

export const adduserinfo =(data)=>{
     console.warn("actionuserinfo",data)
    return {
        type:ADD_USER_INFO,
        data:data
    }
}
export const addcondinfo =(data1)=>{
     console.warn("actioncondinfo",data1,ADD_COND_INFO)
    return {
        type:ADD_COND_INFO,
        data1:data1
    }
}
export const addshiftinfo =(data2)=>{
     console.warn("shiftaction",data2)
    return {
        type:ADD_SHIFT_INFO,
        data2:data2
    }
}
export const removeduserinfo =()=>{
    // console.warn("CLEARARRAY",data)
   return {
       type:CLEAR_ARRAY,
        // data:data
       
   }
}
