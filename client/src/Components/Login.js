import { Button, FormControl,FormErrorMessage,FormHelperText,FormLabel, Input, InputGroup,InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import '../App.css'
import { login } from "../Redux/Actions/authActions"
import Errors from "./Errors"


const Login = () => { 

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const handlelogin = (e) => {
    e.preventDefault()
    dispatch(login({email,password},navigate))
  }
  const [inputemail, setInputemail] = useState('')
  const [inputpassword, setInputpassword] = useState('')


  const handleregister = () =>  {navigate('/Register')
  window.location.reload()}


  const isError1 = inputemail === '' ? <Errors/> : inputemail
  const isError2 = inputpassword === '' ? <Errors/> : inputpassword

    return (
      <>
        <Button onClick={onOpen}>Se connecter</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
      
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Accéder a votre Compte</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

          
              {/* <FormControl mt={4}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' placeholder="Entrez votre email" onChange={(e)=>setEmail(e.target.value)}/>
                </FormControl> */}

              <FormControl isInvalid={isError1}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input id='email' type='email' value={inputemail} onChange={(e)=>{setEmail(e.target.value);setInputemail(e.target.value)}} />
                    {!isError1 ? (
                      <FormHelperText></FormHelperText>
                      ) : 
                      (<FormErrorMessage><Errors/></FormErrorMessage>)
                    }
            </FormControl>

              <FormControl mt={4} isInvalid={isError2}>
                <FormLabel>Mot de Passe</FormLabel>
                <InputGroup size='md'>
                    <Input pr='4.5rem'type={show ? 'text' : 'password'} placeholder='Entrez votre mot de passe' value={inputpassword} onChange={(e)=>{setPassword(e.target.value);setInputpassword(e.target.value)}}/>
                    <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick} id='mdpbtn'>{show ? 'Cacher' : 'Montrer'}</Button>
                    </InputRightElement>
                    
                    
                </InputGroup>
                {!isError2 ? (
                      <FormHelperText></FormHelperText>
                      ) : 
                      (<FormErrorMessage><Errors/></FormErrorMessage>)
                    }
                <FormHelperText id="forgotmdp">Mot de passe oublier ?</FormHelperText>
              </FormControl>
              <aside id="newaccbtn">
              <h3 id="noacc"> Vous êtes nouveau ? </h3>
              <Button onClick={handleregister} id='registerkey' >Créez un compte</Button>
              </aside>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={(e)=> {handlelogin(e);}}>
                Connexion
              </Button>
              <Button onClick={onClose} >Annuler</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Login