import { ALERT_ERROR } from "../Types/errorTypes"

const initialState = [

]

const errorReducer = (state=initialState,action)=>{
    switch (action.type) {
            case ALERT_ERROR : return [...state,action.payload]
    
        default:return state
        
    }
}


export default errorReducer