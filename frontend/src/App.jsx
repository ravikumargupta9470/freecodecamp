import { Routes, Route } from 'react-router-dom'
import Home from './template/home'
import Addnew from './template/Addnew'
import Navbar from './template/Navbar'
import Update from './template/Update'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Addnew' element={<Addnew />} />
        <Route path='/Update/:id' element={<Update />} />

      </Routes>





    </>
  )
}

export default App
