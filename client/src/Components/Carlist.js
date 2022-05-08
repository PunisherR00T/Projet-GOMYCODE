import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCars } from "../Redux/Actions/carActions"
import Carinfocard from "./Carinfocard"
import NavCar from "./NavCar"

const Carlist = () => {
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCars())
        setLoading(false)
    },[])
    const Cars = useSelector(state=> state.carReducer.Cars)
    const cartitle = `${Cars.brand} ${Cars.model} `
    const inpt = useSelector(state => state.carReducer.inpt)
    const x = Cars.filter(car=> car.brand.toUpperCase().includes(inpt.toUpperCase()) || car.model.toUpperCase().includes(inpt.toUpperCase()) && cartitle.toUpperCase().includes(inpt.toUpperCase())).map(Car => <Carinfocard key={Car._id} Car={Car}/> )
   
console.log(Cars)

    return (
        <div>
            <NavCar/>
            
        <section id="Section" style={{textAlign:"center"}}>
            
            { loading && Cars? <img src='https://jereparsdetoi.org/wp-content/plugins/embed-any-document/images/loading.svg' alt='Verify source'/> :  x.length == 0 ? <img src="https://i.stack.imgur.com/6M513.png"/> : x
            }

            
        </section>
        </div>
    )
}

export default Carlist