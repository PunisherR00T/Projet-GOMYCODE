import { GETCARS, GETONECAR, SETINPT } from "../Types/carTypes"


const initialState = {
    Cars : [],
    Car : {},
    inpt:''
}

const carReducer=(state = initialState,action)=>{
        switch (action.type) {
            case GETCARS : return {...state,Cars : action.payload.Cars}
            case GETONECAR : return {...state,Car : action.payload.OneCar}
            case SETINPT: return {...state, inpt : action.payload}
            default: return state
        }
}

export default carReducer