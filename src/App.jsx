
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementBy } from './store/slices/counter'
import { useState } from 'react'

function App() {

  const {counter} = useSelector( state => state.counter)
  const dispatch = useDispatch()

  const [value, setValue] = useState();

  const onClickHandler = (e) =>{
    const value = e.target.value;
    setValue(value);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> count is : {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>
          Increment
        </button>   
        <button onClick={() => dispatch( decrement() )}>
          Decrement
        </button>
        <button onClick={() => dispatch( incrementBy(Number(value)) )}>
          Increment By :
        </button>
        <input type="text" 
          value={value}
          onChange={onClickHandler}/>
      </div>
    </>
  )
}

export default App
