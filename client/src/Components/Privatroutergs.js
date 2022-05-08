import { useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const Privateroutergs = ({children}) => {
    const navigate = useNavigate()
    useEffect(()=>{
        token()
    },[])
    const [connected,setConnected] = useState(false)
    const token  = () => localStorage.getItem('token') ? setConnected(true) : setConnected(false)
    const handleregister = async() =>  { navigate('/')
    
    await toast({
      title: 'Vous êtes déja connecter',
      description: "Deconnectez vous pour effectuer cette action",
      status: 'warning',
      duration: 9000,
      isClosable: true,
    })
  }

  const toast = useToast()

    
    return (
        <div>
            { 
                connected===false ? children : handleregister()
            }
        </div>
    )
}

export default Privateroutergs