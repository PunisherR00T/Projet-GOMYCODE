import { Box, Image, Stack } from "@chakra-ui/react"
import { Carousel } from "react-bootstrap"

const Carouscard = ({Car}) => {
    return (
        
          
      <Stack direction='row'>
  <Image
    boxSize='250px'
    objectFit='cover'
    src={Car.images}
    alt='Dan Abramov'
  />
  </Stack>

    

  

    )
}

export default Carouscard