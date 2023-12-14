import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './routes.tsx';
import './index.css'
import { Loading } from './components/Loading.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={Routes} fallbackElement={<Loading/>} />
    </ChakraProvider>
  </React.StrictMode>
);
