import { NextUIProvider, createTheme } from '@nextui-org/react'
import { Provider as JotaiProvider } from 'jotai'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'

import './index.css'
import AuthController from './AuthController'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
    },
  },
})

const darkTheme = createTheme({
  type: 'dark',
})

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <JotaiProvider>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider theme={darkTheme}>
        <AuthController />
      </NextUIProvider>
    </QueryClientProvider>
  </JotaiProvider>
)
