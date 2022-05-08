import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Redux/Store';


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <ChakraProvider theme={theme}>

   <BrowserRouter>

    <Provider store={store}>
      <App />
      </Provider>

   </BrowserRouter>

  </ChakraProvider>

  </React.StrictMode>
);

