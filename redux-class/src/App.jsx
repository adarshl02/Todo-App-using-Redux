import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from "./components/todo";
import { Provider } from 'react-redux';
import {store} from './app/store.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <Todo/>
    </Provider> 
    </>
  )
}

export default App;
