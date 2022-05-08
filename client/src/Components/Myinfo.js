import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current, handlegranted, updateuser } from "../Redux/Actions/authActions"
import { Badge, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputLeftAddon, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tooltip, useDisclosure } from "@chakra-ui/react"
import React, { useState } from 'react'
import { handleShow, register } from "../Redux/Actions/authActions"
import {Link, useNavigate, useParams} from 'react-router-dom'
import '../App.css'
import Errors from "./Errors"
import { FcApproval, FcSettings } from "react-icons/fc";
import { EditIcon } from "@chakra-ui/icons"
import PopformNum from "./PopformNum"
import PopformMdp from "./PopformMdp"
import Taswira from "./Taswira"

const Myinfo = () => {
  const granted = useSelector(state=>state.authReducer.granted)
  
    useEffect(()=>{
        dispatch(current())
    },[])
    const user = useSelector(state=>state.authReducer.user)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [show1, setShow1] = React.useState(false)
    const [checkshow,setCheckshow] = useState(false)
    const [checkpassword,setCheckpassword] = useState('')
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRegister=(e)=>{
    e.preventDefault()
    dispatch(register({firstname,lastname,email,password,phone},navigate))
    }
    
    return (
        <div id='Addpost'>
            
            <FormControl>
                <FormLabel>Prénom</FormLabel>
                <InputGroup size='md'>
                <Input ref={initialRef} placeholder='Prénom' onChange={(e)=>setFirstname(e.target.value)} value={user.firstname} readOnly />
               
                    
                    </InputGroup>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Nom</FormLabel>
                <InputGroup size='md'>
                <Input onChange={(e)=>setLastname(e.target.value)} placeholder='Nom' value={user.lastname} readOnly/>
               
                    </InputGroup>
                    </FormControl>
              
            

              <FormControl mt={4}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                
                <Input onChange={(e)=>setEmail(e.target.value)} id='email' type='email' placeholder="Entrez votre email" readOnly defaultValue={user.email} />
               
                </FormControl>
              <FormControl mt={4}>
              <div id="changemdpflex">
                <FormLabel>Mot de Passe</FormLabel> 
                
                </div>
                <InputGroup size='md'>
                    <Input onChange={(e)=>setPassword(e.target.value)} pr='4.5rem'type={show ? 'text' : 'password'} placeholder='Entrez un mot de passe' value={'aaaaaaaaaa'} readOnly/>
                    <InputRightElement width='4.5rem'>
                    <Tooltip label="Modifier votre Mot de passe" aria-label='A tooltip'>
                    <PopformMdp password={password}/>
                    </Tooltip>
                    </InputRightElement>
                </InputGroup>
              </FormControl>
             
              <FormControl mt={4}>
                <FormLabel>Numéro</FormLabel>
                <InputGroup id="divnum">
                    <InputLeftAddon children={<Taswira/>} />
                    <Input onChange={(e)=>setPhone(e.target.value)} type='tel' placeholder='Votre numéro de téléphone' maxLength="8" value={user.phone}  readOnly/>
                    <InputRightElement width='4.5rem'>
                    <Tooltip label="Modifier votre numéro" aria-label='A tooltip'>
                    <PopformNum phone={phone}/>
                    </Tooltip>
                    </InputRightElement>
                </InputGroup>
              </FormControl>
              
              
              
        </div>
    )
}

export default Myinfo