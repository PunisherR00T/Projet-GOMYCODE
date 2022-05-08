import { CURRENT, FAIL, HANDLEGRANTED, LOGIN, LOGOUT, REGISTER } from "../Types/authTypes"

const initialState = {
    user : {},
    errors : [],
    granted : false

}

const authReducer = (state=initialState,action) => {
            switch (action.type) {

                case REGISTER :
                localStorage.setItem('token',action.payload.token)
            
                return {...state , user : action.payload.newUser , granted : state.granted=true}
                
                case HANDLEGRANTED : return {...state,granted : state.granted=action.payload}

                case FAIL : return {...state,errors : action.payload.errors,user : null}

                case LOGIN : localStorage.setItem('token',action.payload.token)
                return {...state , user : action.payload.found}

                case CURRENT : return {...state , user : action.payload , granted : state.granted=false}

                case LOGOUT : localStorage.removeItem('token')
                return {...state,user: null,errors:null}

                default:return state
                    
            }
}


export default authReducer