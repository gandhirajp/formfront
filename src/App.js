import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from './component/UserList';
import Form from './component/Form';
import EditUser from './component/EditUser';


function App() {
  return (
    <BrowserRouter> 
      <div className='container mt-5'>

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<Form />} />
          <Route path="/edit-user/:id" element={<EditUser />} />

        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
