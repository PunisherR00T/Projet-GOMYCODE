import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addpost from './Components/Addpost';
import Carlist from './Components/Carlist';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Mesfavoris from './Components/Mesfavoris';
import Myinfo from './Components/Myinfo';
import MyPosts from './Components/MyPosts';
import NavUser from './Components/NavUser';
import Privateroute from './Components/Privateroute';
import Register from './Components/Register';
import Services from './Components/Services';
import { useEffect, useState } from 'react';
import FooterBot from './Components/FooterBot'
import { useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import Privateroutergs from './Components/Privatroutergs';
function App() {
  const granted = useSelector(state=>state.authReducer.granted)
    const toast = useToast()
    const user = useSelector(state=>state.authReducer.user)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
    setLoading(true)
},[])

  return (
    <div >
      <NavUser/>
      
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Occasions' element={<Carlist />}/>
     <Route path='/Register' element={<Privateroutergs><Register/></Privateroutergs>}/>
     <Route path='ajouter-une-annonce' element={<Privateroute><Addpost/></Privateroute>}/>
     <Route path='/Services' element={<Services/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/mes-informations/:id' element={<Privateroute><Myinfo/></Privateroute>}/>
     <Route path='/mes-favoris' element={<Privateroute><Mesfavoris/></Privateroute>}/>
     <Route path='/mes-annonces' element={<Privateroute><MyPosts/></Privateroute>}/>
  
   </Routes>


   
   {granted==true && toast({
          title: `Bienvenue ${user.firstname}`,
          description: "Votre compte a été créé avec succès",
          status: 'success',
          duration: 7000,
          isClosable: true,
        }) }
  
   <FooterBot/>
    </div>
  );
}

export default App;
