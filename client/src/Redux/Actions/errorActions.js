import { ALERT_ERROR } from "../Types/errorTypes"

export const alertError=(msg)=>(dispatch)=>{
    try {
        const id = Math.random()
        dispatch({
            type : ALERT_ERROR,
            payload : {msg,id}

        })
    } catch (error) {
        console.log(error)
    }
}