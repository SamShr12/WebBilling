import { Add, Edit, EditAdmin, Feed, Invoice, ShowAll } from './components'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
    <Routes>
      <Route path='/' element={<Feed />} />
      <Route path='/additems' element={<Add />} />
      <Route path='/invoice' element={<Invoice />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/show/all' element={<ShowAll />} />
      <Route path='/edit/main/:id' element={<EditAdmin />} />
    </Routes>
    </div>
  )
}

export default App
