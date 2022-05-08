import {useSelector} from 'react-redux'
const Errors = () => {
    const errors = useSelector(state=> state.errorReducer)
    return (

        <div>
                {
                    errors.map(el=> <h2>{el.msg}</h2>)
                }
        </div>
    )
}

export default Errors