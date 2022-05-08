import { EditIcon } from '@chakra-ui/icons'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  IconButton,
  Button,
  FormLabel,
  useDisclosure,
  FormControl,
  Input,
  Stack,
  ButtonGroup,
  Box,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FocusLock from "react-focus-lock"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { current, updateuser } from '../Redux/Actions/authActions'

const PopformNum =()=> {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = React.useRef(null)
  const TextInput = React.forwardRef((props, ref) => {
    return (
      <FormControl>
        <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
        <Input ref={ref} id={props.id} {...props} />
      </FormControl>
    )
  })
const navigate = useNavigate()
const [phone,setPhone] = useState('')
const {id} = useParams
const dispatch = useDispatch()
const handleEdit=()=>{
  dispatch(updateuser(id,{phone}))
  onClose()
}
useEffect(()=>{
  dispatch(current(id))
},[])



  const Form = ({ firstFieldRef, onCancel }) => {
    const user = useSelector(state=>state.authReducer.user)

    return (
      <Stack spacing={1}>
        <FormControl mt={3}>
        <FormLabel>Ancien Numéro</FormLabel>
        <InputGroup id="divnum">
                    <InputLeftAddon children='+216'/> 
        <Input label='Nouveau Numéro' id='last-name' type='tel' ref={firstFieldRef} isDisabled defaultValue={user.phone}/>
        </InputGroup>
        </FormControl>
        
        <FormControl mt={4}>
        <FormLabel>Nouveau Numéro</FormLabel>
        <InputGroup id="divnum">
                    <InputLeftAddon children={'+216'}/> 
        <Input label='Nouveau Numéro' id='last-name' type='tel' maxLength="8"/>
        </InputGroup>
        </FormControl>
        <ButtonGroup d='flex' justifyContent='flex-end'>
          <Button variant='outline' onClick={onCancel}>
            Cancel
          </Button>
          <Button colorScheme='teal' onClick={handleEdit}>
            Save
          </Button>
        </ButtonGroup>
      </Stack>
    )
  }
  return (
    <div>
    
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
        <Button h='1.75rem' size='sm' colorScheme='teal' variant='ghost'><EditIcon id="settingsicon"/></Button>
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
          </FocusLock>
        </PopoverContent>
      </Popover>
      </div>
  )
}

export default PopformNum