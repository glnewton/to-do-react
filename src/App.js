import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

//Components
import Navbar from './components/Navbar.js';
import List from './components/List';

import CreateTodoForm from './components/CreateTodoForm.js';
import EditTodoForm from './components/EditTodoForm.js';
import Footer from './components/Footer.js';

//Pages
import ViewToDoPage from './components/ViewTodoPage.js';

function App() {

  return (
    <div className="App">
      <h1>To Do App</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/create-todo" element={<CreateTodoForm />} />
          <Route path='/view-todo/:id' element={<ViewToDoPage />} />
          <Route path='/edit-todo/:id' element={<EditTodoForm />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
