import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { TodoApp } from './TodoApp'
//import { PokemonApp } from './PokemonApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PokemonApp/> */}
      <TodoApp/>
    </Provider>
  </StrictMode>,
)
