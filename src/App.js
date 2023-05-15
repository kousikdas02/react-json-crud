import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/edit-user/:id' element={<EditUser/> }/>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
