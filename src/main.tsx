import React from 'react'
import ReactDOM from 'react-dom/client'

import router from './routes/Routes.tsx'
import { RouterProvider } from 'react-router-dom'
import GlobalStyle from './assets/style/GlobalStyle.tsx'
import ContextProvider from './context/ContextAPI.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
