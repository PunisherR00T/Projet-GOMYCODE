import { Badge } from '@chakra-ui/react'
import '../App.css'
import {
  Button as BTN,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons'
import { Icon, createIcon } from '@chakra-ui/react'
import Carouscard from './Carouscard';
import { Button } from 'react-bootstrap';
import {  IconButton, LightMode } from '@chakra-ui/react'
import { FiHeart } from 'react-icons/fi'

const Carinfocard = ({Car}) => {
    return (
      
        <div id='carcard'>
          
          <Center py={6}>
      <Stack borderWidth="1px" borderRadius="lg" w={{ sm: '100%', md: '540px' }} height={{ sm: '476px', md: '20rem' }}direction={{ base: 'column', md: 'row' }} bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} padding={4} id='cardinf'>
        
      <Stack direction='row' className='stackimg'>
  <Image
    boxSize='230px'
    objectFit='cover'
    src={Car.images}
    alt='Dan Abramov'
  />
  </Stack>
        
        <Stack flex={1} flexDirection="column" justifyContent="center" alignItems="center" p={1} pt={2}>
        
          <Heading fontSize={'2xl'} fontFamily={'body'}>
          {Car.brand} {Car.model}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
          {`${Car.price} DT`}
          </Text>
          
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
            {Car.puissance}
            </Badge>
            <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
            {Car.energie}
            </Badge>
            <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
            {Car.transmission}
            </Badge>
            <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
            {`${Car.kilometrage} KM`}
            </Badge>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
         <LightMode>
    <IconButton
      isRound
      bg="white"
      color="gray.900"
      size="sm"
      _hover={{
        transform: 'scale(1.1)',
      }}
      sx={{
        ':hover > svg': {
          transform: 'scale(1.1)',
        },
      }}
      transition="all 0.15s ease"
      icon={<Icon as={FiHeart} transition="all 0.15s ease" />}
      boxShadow="base"
      
    />
  </LightMode>
        <BTN flex={1}fontSize={'sm'}rounded={'full'}bg={'blue.400'}color={'white'}boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}_hover={{bg: 'blue.500',}}_focus={{bg: 'blue.500',}}>
          Consulter 
          </BTN>
          </Stack>
        </Stack>
      </Stack>
      </Center>
            
        </div>
    )
}


export default Carinfocard