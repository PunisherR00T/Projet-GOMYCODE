import { Avatar, Button, Stack, useDisclosure, } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import '../App.css'
import { current, logout } from "../Redux/Actions/authActions"
import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,} from '@chakra-ui/react'
import React from "react"
import ProfileBtns from "./ProfileBtns"
import { FcAddDatabase, FcAnswers, FcAutomotive, FcLike } from "react-icons/fc"
const Profilebulb = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(current())
    },[])
    const user = useSelector(state=>state.authReducer.user)
    const name = `${user.firstname} ${user.lastname}`
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <div>

        <Stack ref={btnRef} colorScheme='teal' onClick={onOpen} direction='row' style={{cursor:'pointer'}}>
            <Avatar name={name} src='https://bit.ly/broken-link'  />
        </Stack>
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{name.charAt(0).toUpperCase() + name.slice(1)}</DrawerHeader>
                <DrawerBody>
                <div className="flex">
                    
                    <ProfileBtns linki={'/ajouter-une-annonce'} name={'Ajouter une annonce'}/>
                    <FcAddDatabase size='2em'/>
                    </div>
                    <div className="flex">
                        
                    <ProfileBtns linki={'/mes-informations/:id'} name={'Mes Informations'}/>
                    <FcAnswers size='2em'/>
                    </div>
                    <div className="flex">
                    <ProfileBtns linki={'/mes-favoris'} name={'Mes Favoris'}/>
                    <FcLike size='2em'/>
                    </div>
                    <div className="flex">
                    <ProfileBtns linki={'/mes-annonces'} name={'Mes Annonces'}/>
                    <FcAutomotive size='2em'/>
                    </div>
                </DrawerBody>
                <DrawerFooter id="decobtn">
                    <Button colorScheme='blue' onClick={()=>{dispatch(logout());navigate('/')}}>Déconnexion</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    
        
{/* <Popover>
    <PopoverTrigger>
        <Stack direction='row' style={{cursor:'pointer'}}>
            <Avatar name={name} src='https://bit.ly/broken-link'  />
        </Stack>
    </PopoverTrigger>
    <Portal>
        <PopoverContent>
            <PopoverFooter id="popfooter">
                <Button colorScheme='blue' className="popbtn" as={Link} to='/Profile'>Mon Compte</Button>
                <Button colorScheme='blue' className="popbtn" onClick={()=>{dispatch(logout());navigate('/')}}>Déconnexion</Button>
            </PopoverFooter>
        </PopoverContent>
    </Portal>
</Popover> */}


</div>
    )
}

export default Profilebulb