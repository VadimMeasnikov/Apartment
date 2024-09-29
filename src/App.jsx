import { BrowserRouter as Router, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Screen2 from './pages/Screen2/Screen2'
import Test from './pages/Test/test'
import Apartment from './pages/Apartment/Apartment'
import Selection from './pages/Selection/Selection'
import './stylesGlobal/App.scss'

function App() {

  return (
    <>
      <Router>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/screen2' element={<Screen2/>}/>
           <Route path='/test' element={<Test/>}/>
           <Route path='/apartment/:id' element={<Apartment/>} />
           <Route path='/selection' element={<Selection/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
