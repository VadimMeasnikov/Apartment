import { BrowserRouter as Router, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Screen2 from './pages/Screen2/Screen2'
import Test from './pages/Test/test'
import './stylesGlobal/App.scss'

function App() {

  return (
    <>
      <Router>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/screen2' element={<Screen2/>}/>
           <Route path='/test' element={<Test/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
