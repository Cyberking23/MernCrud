import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TableComponent from './Component/TableComponent';
import AddUser from './Component/AddUser';
import UpdatedUser from './Component/UpdatedUser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TableComponent />} />
      <Route path="/User" element={<AddUser />} />
      <Route path="/Update/:id" element={<UpdatedUser />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
