import { Feed } from './components'
import {Routes, Route} from 'react-router-dom'
import Add from './components/Admin/Add'
import Invoice from './components/Invoice'
function App() {
  return (
    <div className="app">
    <Routes>
      <Route path='/' element={<Feed />} />
      <Route path='/additems' element={<Add />} />
      <Route path='/invoice' element={<Invoice />} />
    </Routes>
    </div>
  )
}

export default App
