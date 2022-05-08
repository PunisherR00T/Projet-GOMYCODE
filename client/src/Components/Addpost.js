import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, Select } from "@chakra-ui/react"
import { useState } from "react"
import { Button, Form, FormGroup} from "react-bootstrap"
import '../App.css'
import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addCar } from "../Redux/Actions/carActions"

const Addpost = () => {
    const [price, setPrice] = useState(' ')
    const [kilometrage, setKilometrage] = useState(' ')
    const handleClick = () => setShow(!show)
  const handlepriceChange = (e) => setPrice(e.target.value)
  const handlekiloChange = (e) => setKilometrage(e.target.value)
  const [show, setShow] = React.useState(false)
  const isError1 = price === ''
  const isError2 = kilometrage === ''
  const [bmw,setBmw] = useState(false)
  const [mercedes,setMercedes] = useState(false)
  const [brand,setBrand] = useState('')
  const [model,setModel] = useState('')
  const [year,setYear] = useState('')
  const [gouvernorat,setGouvernorat] = useState('')
  const [description,setDescription] = useState('')
  const [transmission,setTransmission] = useState('')
  const [energie,setEnergie] = useState('')
  const [puissance,setPuissance] = useState('')
  const [boite,setBoite] = useState('')
  const [images,setImages] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAdd=(e)=>{
    e.preventDefault()
    dispatch(addCar(data,navigate))
   
    }
    var data = new FormData()
    data.append("images",images)
    data.append("price",price)
    data.append("description",description)
    data.append("brand",brand)
    data.append("model",model)
    data.append("energie",energie)
    data.append("transmission",transmission)
    data.append("puissance",puissance)
    data.append("kilometrage",kilometrage)
    data.append("boite",boite)
    data.append("year",year)
    
    // const onInputChanged = (e) => {
    //   const files =  e.currentTarget.files;
    //   let tab = [];
    //   Array.from(files).forEach(file => tab.push(file.name));
      
    //   setImages([tab])
    // }
  
  // onChange={(e)=>e.target.value==='Bmw' ? setBmw(!bmw) : e.target.value === 'Mercedes-Benz' ? setMercedes(!mercedes) : null }
  // {bmw && <option>X2</option>}
  //   {mercedes && <option>Class E</option>}
    return (
        <div id="Addpost">
          
            <FormControl>
  <FormLabel htmlFor='dates'>Marque</FormLabel>
  <Select placeholder='Selectioner une marque' onChange={(e)=>setBrand(e.target.value)}>
    <option>Alfa Romeo</option>
    <option>Audi</option>
    <option>Baic YX</option>
    <option>Bmw</option> 
    <option>Chery</option>
    <option>Chevrolet</option> 
    <option>Citroen</option>
    <option>Dacia</option> 
    <option>DFSK</option>
    <option>Dodge</option> 
    <option>Dongfeng</option>
    <option>DS</option>  
    <option>Faw</option>
    <option>Fiat</option> 
    <option>Ford</option>
    <option>Geely</option> 
    <option>Genesis</option>
    <option>Great Wall</option> 
    <option>Haval</option>
    <option>Hyundai</option> 
    <option>Infiniti</option>
    <option>Isuzu</option>
    <option>Iveco</option> 
    <option>Jaguar</option>
    <option>Jeep</option> 
    <option>KIA</option>
    <option>Lada</option> 
    <option>Lancia</option>
    <option>Land Rover</option> 
    <option>Mahindra</option>
    <option>Mazda</option> 
    <option>Mercedes-Benz</option> 
    <option>MG</option>
    <option>Mini</option> 
    <option>Mitsubitchi</option>
    <option>Nissan</option> 
    <option>Opel</option>
    <option>Peugeot</option> 
    <option>Porshe</option>
    <option>Renault</option>
    <option>Seat</option> 
    <option>Skoda</option>
    <option>Smart</option> 
    <option>Ssangyong</option>
    <option>Suzuki</option> 
    <option>Tata</option> 
    <option>Toyota</option>
    <option>Volkswagen</option> 
    <option>Volvo</option>
    <option>Wallyscar</option> 

  </Select>
</FormControl>

<FormControl>
  <FormLabel htmlFor='country'>Modéle</FormLabel>
  <Select placeholder='Selectioner le modéle' onChange={(e)=>setModel(e.target.value)}>
  <option>x2</option>
    <option>classe e</option>
    <option>911</option>
    <option>cayenne</option>
  </Select>
</FormControl>



    <FormControl>
  <FormLabel >Année</FormLabel>
  <Select  placeholder="Choisissez l'année" onChange={(e)=>setYear(e.target.value)}>
    <option>2022</option>
    <option>2021</option>
    <option>2020</option>
    <option>2019</option>
    <option>2018</option>
    <option>2017</option>
    <option>2016</option>
    <option>2015</option>
    <option>2014</option>
    <option>2013</option>
    <option>2012</option>
    <option>2011</option>
    <option>2010</option>
    <option>2009</option>
    <option>2008</option>
    <option>2007</option>
    <option>2006</option>
    <option>2005</option>
    <option>2004</option>
    <option>2003</option>
    <option>2002</option>
    <option>2001</option>
    <option>2000</option>
    <option>1999</option>
    <option>1998</option>
    <option>1997</option>
    <option>1996</option>
    <option>1995</option>
    <option>1994</option>
    <option>1993</option>
    <option>1992</option>
    <option>1991</option>
    <option>1990</option>
  </Select>
</FormControl>







<FormControl isInvalid={isError2}>
      <FormLabel >kilométrage</FormLabel>
      
      <InputGroup size='md'>
      <Input
        type='number'
        value={kilometrage}
        onChange={handlekiloChange}
      />
      <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' colorScheme='teal' variant='ghost'>KM</Button>
                    </InputRightElement>
                    </InputGroup>
     
    </FormControl>



    <FormControl>
  <FormLabel htmlFor='dates'>Gouvernorat</FormLabel>
  <Select placeholder='Selectioner une gouvernorat' onChange={(e)=>setGouvernorat(e.target.value)}>
    <option>Ben Arous</option>
    <option>Ariana</option>
    <option>Béja</option>
    <option>Bizere</option>
    <option>Gabès</option>
    <option>Gafsa</option>
    <option>Jendouba</option>
    <option>Kairouan</option>
    <option>Kasserine</option>
    <option>La Manouba</option>
    <option>Le Kef</option>
    <option>Mahdia</option>
    <option>Médenine</option>
    <option>Monastir</option>
    <option>Nabeul</option>
    <option>Sfax</option>
    <option>Sidi Bouzid</option>
    <option>Siliana</option>
    <option>Sousse</option>
    <option>Tataouine</option>
    <option>Tozeur</option>
    <option>Tunis</option>
    <option>Zaghouan</option>
  </Select>
</FormControl>

    <label htmlFor="exampleFormControlTextarea1">Description</label>
      <textarea onChange={(e)=>setDescription(e.target.value)}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
      />

    <FormControl isInvalid={isError1}>
      <FormLabel htmlFor='email'>Prix</FormLabel>
      <InputGroup size='md'>
      <Input
      
        type='number'
        value={price}
        onChange={handlepriceChange}
      />
      <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' colorScheme='teal' variant='ghost'>DT</Button>
                    </InputRightElement>
                    </InputGroup>
      
    </FormControl>

    <FormControl>
  <FormLabel htmlFor='country'>Boite</FormLabel>
  <Select id='country' placeholder="Type de boite" onChange={(e)=>setBoite(e.target.value)}>
    <option>Manuelle</option>
    <option>Automatique</option>
  </Select>
</FormControl>

    <FormControl>
  <FormLabel htmlFor='country'>Transmission</FormLabel>
  <Select id='country' placeholder="Type de transmission" onChange={(e)=>setTransmission(e.target.value)}>
    <option>AWD</option>
    <option>RWD</option>
    <option>FWD</option>

  </Select>
</FormControl>


    <FormControl>
  <FormLabel htmlFor='country'>Energie</FormLabel>
  <Select id='country' placeholder="Type du carburant" onChange={(e)=>setEnergie(e.target.value)}>
    <option>Essence</option>
    <option>Diesel</option>
  </Select>
</FormControl>

<FormControl>
  <FormLabel htmlFor='country'>Puissance</FormLabel>
  <Select id='country' placeholder='Puissance du véhicule' onChange={(e)=>setPuissance(e.target.value)}>
    <option>350</option>
    <option>120</option>
  </Select>
</FormControl>
<FormControl>
<Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Choisissez un fichier</Form.Label>
    <Form.Control type="file" onChange={(event)=>setImages(event.target.files[0])} />
  </Form.Group>
  </FormControl>

  <Button colorScheme='blue' onClick={(e)=>{handleAdd(e)}}>Ajouter</Button>
    

        </div>


    )
}

export default Addpost