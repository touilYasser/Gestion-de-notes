import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './views/components/Navbar';
import NoteForm from './views/components/NoteForm';
import NoteEdit from './views/components/NoteEdit';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<NoteForm />} />
            <Route path="/edit/:id" element={<NoteEdit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;