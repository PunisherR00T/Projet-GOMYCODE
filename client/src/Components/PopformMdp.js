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
} from '@chakra-ui/react'
import React, { useState } from 'react'
import FocusLock from "react-focus-lock"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateuser } from '../Redux/Actions/authActions'

const PopformMdp =()=> {
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
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  const {id} = useParams()
  const handleEdit=()=>{
    dispatch(updateuser(id,{password}))

}
  const Form = ({ firstFieldRef, onCancel ,password }) => {
    const user = useSelector(state=>state.authReducer.user)
    
  
    return (
      <Stack spacing={4}>
        <TextInput
          label='Ancien Mot de passe'
          id='first-name'
          ref={firstFieldRef}
          defaultValue={user.password}
          isDisabled
          type='password'
        />
        <TextInput
          label='Retapez votre Mot de passe'
          id='first-name'
          ref={firstFieldRef}
          type='password'
        />
        <TextInput label='Nouveau Mot de passe' id='last-name' onchange={(e)=>setPassword(e.target.value)} />
        <ButtonGroup d='flex' justifyContent='flex-end'>
          <Button variant='outline' onClick={onCancel}>
            Cancel
          </Button>
          <Button colorScheme='teal' onClick={()=>handleEdit}>
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
        <Button h='1.75rem' size='sm' colorScheme='teal' variant='ghost' ><EditIcon id="settingsicon"/></Button>
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

export default PopformMdp