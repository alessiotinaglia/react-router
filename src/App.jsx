import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './pages/DefaultLayout';
import Post from './pages/Post'; 
import Contact from './pages/Contact'; 
import HomePage from './pages/HomPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Post />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
